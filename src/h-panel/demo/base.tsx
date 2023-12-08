import { HPanel } from '@trionesdev/antd-react-ext';
import React from 'react';

export default () => {
  const left = <div>left</div>;
  const right = <div>right</div>;
  return (
    <div style={{ height: '100px' }}>
      <HPanel left={left} right={right}>
        center
      </HPanel>
    </div>
  );
};
