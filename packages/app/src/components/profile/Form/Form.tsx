import React from 'react';
import { IProfile } from 'types/member';

import { Textfield, Label, Fieldset, Form } from 'components/common/form';
import { FixedBottomCTA } from 'components/common';

type FormValuesType = Pick<IProfile, 'nickname' | 'phoneNumber'>;

interface Props {
  data: IProfile;
  handleSubmit: (data: FormValuesType) => void;
}

const FORM_ID = 'profile-form' as const;

function ProfileForm({ data, handleSubmit }: Props) {
  return (
    <Form id={FORM_ID} handleSubmit={handleSubmit}>
      <Fieldset>
        <Label>닉네임</Label>
        <Textfield type="text" name="nickname" defaultValue={data.nickname} placeholder="닉네임을 입력해주세요" />
      </Fieldset>

      <Fieldset>
        {/** 휴대폰 번호 */}
        <Label>휴대폰 번호</Label>
        <Textfield
          type="text"
          name="phoneNumber"
          placeholder="휴대폰 번호를 입력해주세요"
          defaultValue={data.phoneNumber}
        />
      </Fieldset>

      <Fieldset>
        <FixedBottomCTA type="submit" form={FORM_ID}>
          저장하기
        </FixedBottomCTA>
      </Fieldset>
    </Form>
  );
}

export default ProfileForm;
