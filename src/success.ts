import { AttemptType } from './enums'

export type Success<T = any> = {
  type: typeof AttemptType.SUCCESS;
  value: T;
};

export const Success = <T = any>(value: T): Success<T> => ({
  type: AttemptType.SUCCESS,
  value,
});
