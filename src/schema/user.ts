import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(1, '* Put your name'),
  address: z.string().optional(),
  height: z.coerce
    .number({
      invalid_type_error: '* Invalid your height',
    })
    .positive('* Put your height'),
  age: z.coerce
    .number({ invalid_type_error: '* Invalid your age' })
    .positive('* Put your age')
    .refine((value) => value < 1000, '* Age must be less than 1000'),
  sex: z.enum(['male', 'female']),
  phoneNum: z.string().min(1, '* Put your phone number'),
  isGamer: z.coerce.boolean(),
});

/**
 * userSchema 를 extend 를 통해 override 할 수 있다.
 */
export const userSchemaCustom = userSchema.extend({
  name: z.string().min(1, '* This is user name custom validation message'),
});

/**
 * user 타입 반환
 */
export type TUser = z.infer<typeof userSchema>;
