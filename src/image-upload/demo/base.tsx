import React from 'react';
import { ImageUpload } from '../../index';

export default () => {
  return (
    <div>
      <ImageUpload />
      <div>只读模式</div>
      <ImageUpload readOnly={true} />
    </div>
  );
};
