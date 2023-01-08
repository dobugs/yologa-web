const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const shell = require("shelljs");
const inquirer = require("inquirer");
const args = _.slice(process.argv);
const pathNode = args.shift();
const pathShell = args.shift();

const AWS_PROFILE = "" // TODO AWS -> GCP 이관;
const BUCKET_NAME = "" // TODO AWS -> GCP Compute Engine 이관;

const RSYNC_EXCLUDE =
  // eslint-disable-next-line no-multi-str
  "\
  --exclude=build \
  --exclude=node_modules \
  --exclude=.idea \
  --exclude=yarn.lock \
  --exclude=yarn-error.log \
  --exclude=sessions \
  --exclude=package-lock.json \
  --exclude=scripts \
  --exclude=.DS_Store \
";

function saveManifest(manifest) {
  return new Promise(async (resolve, reject) => {
    fs.writeFile(
      path.join(__dirname, "../public/manifest.json"),
      JSON.stringify(manifest, null, 2),
      function (err) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log("Manifest saved ", manifest.version);
          resolve(manifest);
        }
      },
    );
  });
}

function saveInfo(info) {
  return new Promise(async (resolve, reject) => {
    fs.writeFile(
      path.join(__dirname, "../src/config/info.json"),
      JSON.stringify(info, null, 2),
      function (err) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log("Info saved ", info.version);
          resolve(info);
        }
      },
    );
  });
}

function savePackage(package) {
  return new Promise(async (resolve, reject) => {
    fs.writeFile(
      path.join(__dirname, "../package.json"),
      JSON.stringify(package, null, 2),
      function (err) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log("Package saved ", package.version);
          resolve(package);
        }
      },
    );
  });
}

function updateVersion() {
  return new Promise(async (resolve, reject) => {
    // eslint-disable-next-line global-require
    const manifest = require("../public/manifest.json");
    // eslint-disable-next-line global-require
    const package = require("../package.json");

    const askQuestions = () => {
      const questions = [
        {
          name: "updateVersion",
          type: "input",
          message: `Update Version (${package.version}) :`,
        },
      ];
      return inquirer.prompt(questions);
    };

    const answers = await askQuestions();
    const version = answers.updateVersion || package.version;

    package.version = version;
    manifest.version = version;
    manifest.minimumVersion = version;

    try {
      await saveManifest(manifest);
      await savePackage(package);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

function deployTo(target, buildTarget, distributionId) {
  const startTime = +new Date();

  shell.echo(`Building ${target.toUpperCase()} ...`);
  shell.exec(`yarn ${buildTarget}`, {});

  if (!fs.existsSync("./dist")) {
    shell.echo(`Build Error!!`);
    return;
  }

  shell.echo(`✅  Built`);

  shell.echo(`Deploying...`);
  // shell.exec(
  //   `aws --profile ${AWS_PROFILE} s3 sync ./dist/ s3://${BUCKET_NAME}/${target.toLowerCase()} ${RSYNC_EXCLUDE} --acl public-read`,
  // );
  // shell.exec(
  //   `aws --profile ${AWS_PROFILE} cloudfront create-invalidation --distribution-id ${distributionId} --paths "/*"`,
  // );
  // TODO AWS -> GCP 이관 및 rsync 혹은 GCP SDK API 참고;
  shell.echo(`✅  Deployed`);

  const endTime = +new Date();
  const secs = (endTime - startTime) * 0.001;
  const duration = `${(secs / 60).toFixed(0)}m ${(secs % 60).toFixed(1)}s`;

  shell.echo(`Duration: ${duration}`);
  shell.echo(" ");
}

function deployToDevelopment() {
  deployTo("development", "build:dev", "DISTRIBUTION_ID");
}

function deployToProduction() {
  deployTo("production", "build:prod", "DISTRIBUTION_ID");
}

async function main() {
  const command = args.shift() || "";

  await updateVersion();

  switch (command.toUpperCase()) {
    case "DEV":
    case "DEVELOPMENT":
      deployToDevelopment();
      break;

    case "STG":
    case "STAGING":
      // deployToStaging();
      break;

    case "PROD":
    case "PRODUCTION":
      deployToProduction();
      break;

    case "ALL":
      deployToProduction();
      // deployToStaging();
      deployToDevelopment();
      break;

    default:
      shell.echo("Usage: node deploy.js [dev|stg|prod]");
      break;
  }
}

main();
