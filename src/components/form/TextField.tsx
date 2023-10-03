import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FieldValues, UseControllerProps } from 'react-hook-form';

interface ITextFieldProps {
  labelText?: string;
  placeholder?: string;
  description?: string;
}

const TextField = <T extends FieldValues>({
  name,
  control,
  disabled,
  labelText,
  placeholder,
  description,
}: ITextFieldProps & UseControllerProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      disabled={disabled}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{labelText}</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              value={field.value ?? ''}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextField;
