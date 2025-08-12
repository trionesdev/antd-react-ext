import { ExtDatePicker as InternalExtDatePicker } from './ExtDatePicker';
type CompoundedComponent = typeof InternalExtDatePicker;

const ExtDatePicker = InternalExtDatePicker as CompoundedComponent;
export default ExtDatePicker;
