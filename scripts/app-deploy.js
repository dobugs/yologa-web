const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const inquirer = require('inquirer');

const args = _.slice(process.argv);
const pathNode = args.shift();
const pathShell = args.shift();

const AWS_PROFILE = 'rgh';
const BUCKET_NAME = 'yologa.dobugs.co.kr';
const RSYNC_EXCLUDE =
  '\
  --exclude=build \
  --exclude=node_modules \
  --exclude=.idea \
  --exclude=yarn.lock \
  --exclude=yarn-error.log \
  --exclude=sessions \
  --exclude=package-lock.json \
  --exclude=scripts \
  --exclude=.DS_Store \
';

function saveManifest(manifest) {
  return new Promise(async (resolve, reject) => {
    fs.writeFile(path.join(__dirname, '../public/manifest.json'), JSON.stringify(manifest, null, 2), function (err) {
      if (err) {
        console.info(err);
        reject(err);
      } else {
        console.info('Manifest saved ', manifest.version);
        resolve(manifest);
      }
    });
  });
}

function savePackage(packageFile) {
  return new Promise(async (resolve, reject) => {
    fs.writeFile(path.join(__dirname, '../package.json'), JSON.stringify(packageFile, null, 2), function (err) {
      if (err) {
        console.info(err);
        reject(err);
      } else {
        console.info('package saved ', packageFile.version);
        resolve(packageFile);
      }
    });
  });
}

function updateVersion() {
  return new Promise(async (resolve, reject) => {
    const manifest = require('../public/manifest.json');
    const packageFile = require('../package.json');

    const askQuestions = () => {
      const questions = [
        {
          name: 'updateVersion',
          type: 'input',
          message: `Update Version (${packageFile.version}) :`,
        },
      ];
      return inquirer.prompt(questions);
    };

    const answers = await askQuestions();
    const version = answers.updateVersion || packageFile.version;

    packageFile.version = version;
    manifest.version = version;
    manifest['minimum-version'] = version;

    try {
      await saveManifest(manifest);
      await savePackage(packageFile);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

function deployToAWS(target, buildTarget, distributionId) {
  const startTime = +new Date();

  shell.echo(`Building ${target.toUpperCase()} ...`);
  shell.exec(`yarn ${buildTarget}`, {});

  if (!fs.existsSync('./build')) {
    shell.echo(`Build Error!!`);
    return;
  }

  shell.echo(`✅  Built`);

  shell.echo(`Deploying...`);
  shell.exec(
    `aws --profile ${AWS_PROFILE} s3 sync ./build/ s3://${BUCKET_NAME}/${target.toLowerCase()} ${RSYNC_EXCLUDE} --acl public-read`,
  );
  shell.exec(
    `aws --profile ${AWS_PROFILE} cloudfront create-invalidation --distribution-id ${distributionId} --paths "/*"`,
  );
  shell.echo(`✅  Deployed`);

  const endTime = +new Date();
  const secs = (endTime - startTime) * 0.001;
  const duration = `${(secs / 60).toFixed(0)}m ${(secs % 60).toFixed(1)}s`;

  shell.echo(`Duration: ${duration}`);
  shell.echo(' ');
}

function deployToDevelopment() {
  deployToAWS('development', 'build:dev', 'EV37IUNJ4OE7Z');
}

function deployToProduction() {
  deployToAWS('production', 'build:prod', 'E33TDUHW5CQL1Z');
}

async function main() {
  const command = args.shift() || '';

  await updateVersion();

  switch (command.toUpperCase()) {
    case 'DEV':
    case 'DEVELOPMENT':
      deployToDevelopment();
      break;

    case 'PROD':
    case 'PRODUCTION':
      deployToProduction();
      break;

    case 'ALL':
      deployToProduction();
      deployToDevelopment();
      break;

    default:
      shell.echo('Usage: node deploy.js [dev|prod]');
      break;
  }
}

main();
