import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FieldValues, UseControllerProps } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export type TSelectOptions<T = string> = Array<{
  label: string;
  value: T;
}>;

interface ISelectFieldProps<OptionValue> {
  labelText?: string;
  placeholder?: string;
  description?: string;
  options: TSelectOptions<OptionValue>;
}

const SelectField = <T extends FieldValues, OptionValue>({
  name,
  control,
  disabled,
  labelText,
  placeholder,
  description,
  options,
}: ISelectFieldProps<OptionValue> & UseControllerProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      disabled={disabled}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{labelText}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={String(field.value)}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map(({ label, value }) => (
                <SelectItem value={String(value)} key={String(value)}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectField;
