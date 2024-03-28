import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import './button.css';

function Button(
  props: Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'className'
  > & {
    width?: string;
  }
) {
  return (
    <button
      {...props}
      className="button button--primary"
      style={{ width: props.width }}
    >
      {props.children}
    </button>
  );
}

export default Button;
