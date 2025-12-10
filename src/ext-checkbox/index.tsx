import { ExtCheckBox as InternalExtCheckbox,ExtCheckBoxProps } from './ExtCheckbox';
import { ExtCheckboxGroup,ExtCheckBoxGroupProps } from './ExtCheckboxGroup';


type CompoundedComponent = typeof InternalExtCheckbox & {
  Group: typeof ExtCheckboxGroup;
};

const ExtCheckbox = InternalExtCheckbox as CompoundedComponent;
ExtCheckbox.Group = ExtCheckboxGroup;
export type { ExtCheckBoxProps, ExtCheckBoxGroupProps };
export default ExtCheckbox;
