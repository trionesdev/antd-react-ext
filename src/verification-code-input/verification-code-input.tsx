import { useCssInJs } from '@trionesdev/antd-react-ext';
import { Input, InputProps } from 'antd';
import classNames from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';
import { genValidationCodeInputStyle } from './styles';

export type VerificationCodeInputProps = Omit<InputProps, 'suffix'> & {
  sendText?: string;
  resendText?: string;
  waitSeconds?: number;
  onSend?: () => Promise<boolean>;
};

const VerificationCodeInput: FC<VerificationCodeInputProps> = ({
  sendText = '获取验证码',
  resendText = '重新发送',
  waitSeconds = 60,
  onSend,
  ...props
}) => {
  const [send, setSend] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<any>(0);
  const secondsRef = useRef<number>(0);
  const timer = useRef<any>(null);

  useEffect(() => {
    if (seconds < 1) {
      clearTimeout(timer.current);
      timer.current = null;
    } else {
      setSend(true);
    }
  }, [seconds]);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const prefixCls = 'triones-validation-code-input';

  const { hashId, wrapSSR } = useCssInJs({
    prefix: prefixCls,
    styleFun: genValidationCodeInputStyle,
  });

  const handleSuffix = () => {
    if (seconds > 0) {
      return (
        <div className={classNames(`${prefixCls}-counting`, hashId)}>
          {seconds}s
        </div>
      );
    }
    return (
      <div
        className={classNames(`${prefixCls}-send`, hashId)}
        onClick={async () => {
          if (!timer.current) {
            if (await onSend?.()) {
              secondsRef.current = waitSeconds;
              timer.current = setInterval(() => {
                secondsRef.current = secondsRef.current - 1;
                setSeconds(secondsRef.current);
              }, 1000);
            }
          }
        }}
      >
        {send ? resendText : sendText}
      </div>
    );
  };

  return wrapSSR(
    <Input
      {...props}
      className={classNames(prefixCls, props.className, hashId)}
      suffix={handleSuffix()}
    />,
  );
};
export default VerificationCodeInput;
