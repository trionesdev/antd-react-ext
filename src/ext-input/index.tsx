import {ExtInput as InternalExtInput, ExtInputProps} from "./ExtInput"
import {ExtInputPassword, ExtInputPasswordProps} from "./ExtInputPassword"
import {ExtInputTextArea, ExtInputTextAreaProps} from "./ExtInputTextArea"
import {ExtInputOTP, ExtInputOPTProps} from "./ExtInputOTP"

type CompoundedComponent = typeof InternalExtInput & {
  TextArea: typeof ExtInputTextArea;
  Password: typeof ExtInputPassword;
  OTP: typeof ExtInputOTP;
};

const ExtInput = InternalExtInput as CompoundedComponent;
ExtInput.TextArea = ExtInputTextArea;
ExtInput.Password = ExtInputPassword;
ExtInput.OTP = ExtInputOTP;

export type {ExtInputProps, ExtInputTextAreaProps, ExtInputPasswordProps, ExtInputOPTProps}
export default ExtInput
