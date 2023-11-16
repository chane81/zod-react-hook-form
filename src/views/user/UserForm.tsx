import { TUser, userSchema, userSchemaCustom } from '@/schema/user';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import TextField from '@/components/form/TextField';
import { Button } from '@/components/ui/button';
import { GAMER_OPTIONS, SEX_OPTIONS } from '@/views/user/constants/selectOptions';
import SelectField from '@/components/form/SelectField';
import { useToast } from '@/components/ui/use-toast';

const UserForm = () => {
  const { toast } = useToast();
  const form = useForm<TUser>({
    // userSchemaCustom 으로 바꿔보면!
    // userSchema 의 name 의 메시지를 override 한 메시지를 볼 수 있다.
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: '',
      age: undefined,
      height: undefined,
      sex: 'male',
      phoneNum: '',
      isGamer: false,
      address: '',
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  console.log('err', errors);

  const handleSubmitForm = (values: TUser) => {
    console.log('success', values);
    toast({
      variant: 'success',
      title: 'Success',
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className='flex flex-col gap-4'
      >
        <TextField
          control={control}
          name='name'
          description='This is your public display name'
          labelText='User Name'
          placeholder='Put your name'
        />
        <TextField
          control={control}
          name='height'
          description='This is your height'
          labelText='Height'
          placeholder='Put your height'
        />
        <TextField
          control={control}
          name='age'
          description='This is your age'
          labelText='Age'
          placeholder='Put your age'
        />
        <SelectField
          control={control}
          name='sex'
          options={SEX_OPTIONS}
          labelText='Sex'
          placeholder='Select your sex'
          description='This is your sex'
        />
        <TextField
          control={control}
          name='phoneNum'
          description='This is your phone number'
          labelText='Phone Number'
          placeholder='Put your phone number'
        />
        <TextField
          control={control}
          name='address'
          description='This is your address'
          labelText='Address'
          placeholder='Put your address'
        />
        <SelectField
          control={control}
          name='isGamer'
          options={GAMER_OPTIONS}
          labelText='Gamer'
          placeholder='Select you are gamer'
          description='Are you gamer?'
        />
        <Button type='submit'>Update profile</Button>
      </form>
    </Form>
  );
};

export default UserForm;
