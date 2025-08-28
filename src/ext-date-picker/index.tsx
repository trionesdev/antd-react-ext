import { ExtDatePicker as InternalExtDatePicker,ExtDatePickerProps } from './ExtDatePicker';
import { ExtDateRangePicker,ExtDateRangePickerProps } from './ExtDateRangePicker';
type CompoundedComponent = typeof InternalExtDatePicker &{
  RangePicker: typeof ExtDateRangePicker;
};

const ExtDatePicker = InternalExtDatePicker as CompoundedComponent;
ExtDatePicker.RangePicker = ExtDateRangePicker;

export type { ExtDatePickerProps,ExtDateRangePickerProps };

export default ExtDatePicker
