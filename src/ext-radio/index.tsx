import {ExtRadio as InternalExtRadio, ExtRadioProps} from "./ExtRadio"
import {ExtRadioGroup, ExtRadioGroupProps} from "./ExtRadioGroup"

type CompoundedComponent = typeof InternalExtRadio & {
    Group: typeof ExtRadioGroup
}

const ExtRadio = InternalExtRadio as CompoundedComponent
ExtRadio.Group = ExtRadioGroup
export type {ExtRadioProps, ExtRadioGroupProps}
export default ExtRadio
