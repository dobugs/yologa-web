import React, { useState } from 'react';
import DefaultUserImage from 'assets/images/default-user.png';
import { IProfile } from 'types/member';
import { wrap, box } from './style';

interface Props {
  data: Pick<IProfile, 'profileUrl'>;
  handleIamgeChange: (data: FormData) => void;
  onError: () => void;
}

function Image({ data, handleIamgeChange: onImageChange, onError }: Props) {
  const [local, setLocal] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      onError();
      return;
    }

    setLocal(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append('name', 'profile');
    formData.append('filename', `${file.name || `${+new Date()}.${file.type}`}`);

    onImageChange(formData);
  };

  return (
    <div css={wrap}>
      <div css={box}>
        <input type="file" name="profile" accept="image/*" onChange={handleImageChange} />
        <figure>
          <img src={local || data.profileUrl || DefaultUserImage} />
        </figure>
      </div>
    </div>
  );
}

export default Image;
