import { TUser, userSchema } from '@/schema/user';

const Home = () => {
  validateUser({
    name: '',
    height: 123,
    age: 3000,
    sex: 'male',
    phoneNum: '010-1234-5678',
    isGamer: true
  });

  return <main>Hello Zod!</main>;
};

export default Home;

const validateUser = (user: TUser) => {
  const validate = userSchema.safeParse(user);

  if (!validate.success) {
    validate.error.issues.forEach(issue => {
      console.log(
        `[error]\r\n- [path]: ${issue.path[0]}\r\n- [msg]: ${issue.message}`
      );
    });
  }
};
