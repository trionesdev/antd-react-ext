import { VPanel } from '@trionesdev/antd-react-ext';
import React from 'react';

export default () => {
  const header = <div>header</div>;
  const footer = <div>footer</div>;
  return (
    <div style={{ height: '100px' }}>
      <VPanel header={header} footer={footer}>
        center
      </VPanel>
    </div>
  );
};
