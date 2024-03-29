import React, { useState } from 'react';
import { IProfile } from 'types/member';
import { wrap, box } from './style';
import DefaultProfileImage from 'assets/images/default-user.png';

interface Props {
  data: Pick<IProfile, 'profileUrl'>;
  handleImageChange: (data: File) => void;
  onError: () => void;
}

function Image({ data, handleImageChange: onImageChange, onError }: Props) {
  const [local, setLocal] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      onError();
      return;
    }

    setLocal(URL.createObjectURL(file));
    onImageChange(file);
  };

  return (
    <div css={wrap}>
      <div css={box}>
        <input type="file" name="profile" accept="image/*" onChange={handleImageChange} />
        <figure>
          <img
            src={local ?? data.profileUrl ?? DefaultProfileImage}
            onError={event => (event.currentTarget.src = DefaultProfileImage)}
          />
        </figure>
      </div>
    </div>
  );
}

export default Image;
