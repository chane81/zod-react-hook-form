import { Separator } from '@/components/ui/separator';
import UserForm from '@/views/user/UserForm';

const User = () => {
  return (
    <main className='mx-auto max-w-sm flex flex-col my-5'>
      <div className='flex flex-col'>
        <span className='text-2xl font-semibold text-slate-700'>Profile</span>
        <span className='text-sm text-slate-400 font-light'>
          Please enter your profile in the form below.
        </span>
        <Separator className='my-6' />
      </div>
      <UserForm />
    </main>
  );
};

export default User;
