import Input from "@/components/Input";
import { useController } from "react-hook-form";
import type { FieldPath, Control, FieldValues, RegisterOptions } from 'react-hook-form';

interface InputTextFieldProps<
  TFormValues extends FieldValues = FieldValues,
  TPath extends FieldPath<TFormValues> = FieldPath<TFormValues>
> extends React.InputHTMLAttributes<HTMLInputElement> {
  control?: Control<TFormValues>;
  name: TPath;
  rules?: RegisterOptions<TFormValues, TPath>;
  label?: string;
  customError?: string;
}

const InputTextField = <
  TFormValues extends FieldValues,
  TPath extends FieldPath<TFormValues>
>({
  label,
  customError,
  name,
  control,
  ...inputProps
}: InputTextFieldProps<TFormValues, TPath>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const formError = error?.message || customError;

  return (
    <div className='block mb-3'>
      {label && (
        <label className="text-lg font-normal mb-1 block" htmlFor={name}>
          {label}
        </label>
      )}
      <Input
        id={name}
        data-invalid={!!formError}
        {...field}
        {...inputProps}
      />
      <div className="text-red-500 h-6 text-base mt-1">{formError}</div>
    </div>
  );
};

export default InputTextField;