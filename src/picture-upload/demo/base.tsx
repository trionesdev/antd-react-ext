import React from 'react';
import PictureUpload from '../index';

export default () => {
  return (
    <div>
      <PictureUpload />
      <div>只读模式</div>
      <PictureUpload readonly={ true} />
    </div>
  );
};
