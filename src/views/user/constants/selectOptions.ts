import { TUser } from '@/schema/user';
import { TSelectOptions } from '@/types/global/selectOptions';

export const SEX_OPTIONS: TSelectOptions<TUser['sex']> = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
];

export const GAMER_OPTIONS: TSelectOptions<TUser['isGamer']> = [
  {
    label: 'Yes',
    value: true,
  },
  {
    label: 'No',
    value: false,
  },
];
