import { AvatarEditor } from '@trionesdev/antd-react-ext';
import React from 'react';

export default () => {
  const [avatar, setAvatar] = React.useState(
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  );
  return (
    <div>
      <AvatarEditor />
      <AvatarEditor value={avatar} onChange={setAvatar} />
    </div>
  );
};
