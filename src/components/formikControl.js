import React from 'react'
import Input from './input'
import Select from './select'
// import Textarea from './Textarea'
// import Select from './Select'
// import RadioButtons from './RadioButtons'
import CheckboxGroup from './checkBox'
import DatePicker from './datePicker'
import CheckBoxItem from './checkBoxItem'
// import ChakraInput from './ChakraInput'

function FormikControl (props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
    //   return <Textarea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'radio':
    //   return <RadioButtons {...rest} />
    case 'checkboxx':
        return <CheckBoxItem {...rest} />
    case 'date':
        return <DatePicker {...rest} />
    case 'chakraInput':
    //   return <ChakraInput {...rest} />
    default:
      return null
  }
}

export default FormikControl