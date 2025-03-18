import { ReactDomUtils } from '@trionesdev/antd-react-ext';
import { Button, Modal } from 'antd';
import React, { useRef, useState } from 'react';

const El = ({ onDestroy }: { onDestroy?: () => void }) => {
  return (
    <div>
      ReactDomUtils <Button onClick={onDestroy}>关闭</Button>
    </div>
  );
};

const ModalEl = ({
  container,
  onDestroy,
}: {
  container?: any;
  onDestroy?: () => void;
}) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    onDestroy?.();
  };
  return (
    <Modal
      title={`确定删除？`}
      open={open}
      onClose={handleClose}
      onCancel={handleClose}
      getContainer={container}
    >
      这是一个可以关闭的弹窗
    </Modal>
  );
};

export default () => {
  const devRef = useRef<any>();

  return (
    <>
      <div ref={devRef}></div>
      <Button
        onClick={() => {
          ReactDomUtils.render(<El />, devRef.current);
        }}
      >
        有指定挂载dom
      </Button>
      <Button
        onClick={() => {
          ReactDomUtils.render(<El />);
        }}
      >
        无指定dom
      </Button>
      <Button
        onClick={() => {
          ReactDomUtils.render(<ModalEl />);
        }}
      >
        点击
      </Button>
    </>
  );
};
