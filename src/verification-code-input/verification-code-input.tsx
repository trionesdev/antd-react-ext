import { useCssInJs } from '@trionesdev/antd-react-ext';
import { Input, InputProps } from 'antd';
import classNames from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';
import { genValidationCodeInputStyle } from './styles';

const prefixCls = 'triones-validation-code-input';

export type VerificationCodeInputProps = Omit<InputProps, 'suffix'> & {
  /**
   * @description 发送按钮文案
   * @default '获取验证码'
   */
  sendText?: string;
  /**
   * @description 重新发送按钮文案
   * @default '重新发送'
   */
  resendText?: string;
  /**
   * @description 倒计时间隔时间
   * @default 60
   */
  intervalSeconds?: number;
  /**
   * @description 发送验证码
   * @default () => true
   */
  onSend?: () => Promise<boolean>;
};

const SendSuffix: FC<VerificationCodeInputProps> = ({
  sendText,
  resendText,
  intervalSeconds = 60,
  onSend,
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

  const { hashId } = useCssInJs({
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
              secondsRef.current = intervalSeconds - 1;
              setSeconds(secondsRef.current);
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
  return handleSuffix();
};

const VerificationCodeInput: FC<VerificationCodeInputProps> = ({
  sendText = '获取验证码',
  resendText = '重新发送',
  intervalSeconds = 60,
  onSend,
  ...props
}) => {
  const { hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genValidationCodeInputStyle,
  });

  return (
    <Input
      {...props}
      className={classNames(prefixCls, props.className, hashId)}
      suffix={
        <SendSuffix
          sendText={sendText}
          resendText={resendText}
          intervalSeconds={intervalSeconds}
          onSend={onSend}
        />
      }
    />
  );
};
export default VerificationCodeInput;
