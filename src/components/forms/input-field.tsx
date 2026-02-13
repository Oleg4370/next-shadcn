import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface InputFieldPropsType<T extends FieldValues = FieldValues> {
  field: ControllerRenderProps<T, Path<T>>;
  label: string;
  placeholder: string;
  children?: React.ReactNode;
}

export function InputField<T extends FieldValues>({
  field,
  label,
  placeholder,
  children,
}: InputFieldPropsType<T>) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input placeholder={placeholder} {...field} />
      </FormControl>
      <FormMessage />
      {children}
    </FormItem>
  );
}
