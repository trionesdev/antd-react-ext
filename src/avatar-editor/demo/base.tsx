import { AvatarEditor } from '@trionesdev/antd-react-ext';
import { Button } from 'antd';
import React from 'react';

export default () => {
  const [avatar, setAvatar] = React.useState<string>('');

  return (
    <div>
      <AvatarEditor />
      <Button
        onClick={() =>
          setAvatar(
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          )
        }
      >
        设置图片
      </Button>
      <AvatarEditor value={avatar} onChange={setAvatar} />
    </div>
  );
};
