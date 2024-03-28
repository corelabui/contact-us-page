import { Textarea as FTextarea, TextareaProps } from 'formfusion';
import './textarea.css';

function Textarea(props: TextareaProps) {
  return (
    <FTextarea
      {...props}
      classes={{
        root: 'textarea',
        field: 'textarea-field',
        label: 'textarea-field__label',
        error: 'textarea-field__error',
      }}
    />
  );
}

export default Textarea;
