import { Form as FForm, FormProps } from 'formfusion';
import './form.css';

function Form(props: Omit<FormProps, 'className'>) {
  return <FForm {...props} className="container column mt-2 mb-2 form" />;
}

export default Form;
