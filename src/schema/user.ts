import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().nonempty({
    message: '* Put your name',
  }),
  height: z.coerce
    .number({
      invalid_type_error: '* Put your height',
    })
    .positive('* Put your height'),
  age: z.coerce
    .number({ invalid_type_error: '* Put your age' })
    .positive('* Put your age')
    .refine((value) => value < 1000, '* Age must be less than 1000'),
  sex: z.enum(['male', 'female']),
  phoneNum: z.string().nonempty('* Put your phone number'),
  isGamer: z.coerce.boolean(),
});

export type TUser2 = z.infer<typeof userSchema>;
export type TUser = z.input<typeof userSchema>;
