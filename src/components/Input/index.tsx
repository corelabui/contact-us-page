import { Input as FInput, InputProps } from 'formfusion';
import './input.css';

function Input(props: InputProps) {
  return (
    <FInput
      {...props}
      classes={{
        root: props.type === 'checkbox' ? 'input--checkbox' : 'input',
        field:
          props.type === 'checkbox' ? 'input-field--checkbox' : 'input-field',
        label:
          props.type === 'checkbox'
            ? 'input-field--checkbox__label'
            : 'input-field__label',
        error: 'input-field__error',
      }}
    />
  );
}

export default Input;
