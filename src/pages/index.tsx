import { TUser, userSchema } from '@/schema/user';
import { z } from 'zod';

const Home = () => {
  // validate user
  validateUser({
    name: '',
    height: 123,
    age: 3000,
    sex: 'male',
    phoneNum: '010-1234-5678',
    isGamer: true,
  });

  // coerce validate
  coerceValidateSample();

  return <main>Hello Zod!</main>;
};

export default Home;

const coerceValidateSample = () => {
  const normalNumber = z.number();
  const coerceNumber = z.coerce.number();

  console.log('=========================');
  console.log('[일반] date validate', normalNumber.safeParse('123').success);
  console.log('[COERCE] date validate', coerceNumber.safeParse('123').success);
};

const validateUser = (user: TUser) => {
  const validate = userSchema.safeParse(user);

  if (!validate.success) {
    validate.error.issues.forEach((issue) => {
      console.log(
        `[error]\r\n- [path]: ${issue.path[0]}\r\n- [msg]: ${issue.message}`,
      );
    });
  }
};
