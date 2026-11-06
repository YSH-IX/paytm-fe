import {
  HtmlHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from 'react';
import { Input as BaseInput } from '@base-ui/react/input';

const InputRoot = ({
  children,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement>) => {
  return <div {...props}>{children}</div>;
};
const InputLabel = ({
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) => {
  return <label {...props}>{children}</label>;
};

const InputField = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <BaseInput {...props} />;
};

export { InputRoot, InputLabel, InputField };
