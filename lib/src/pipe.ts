import * as Yup from "yup";

export type FunctionType<T extends Yup.ObjectSchema<any, any, any, any>, R> = (
  params: Yup.Asserts<T>
) => any;

const pipe = <T extends Yup.ObjectSchema<any, any, any, any>>(
  yupSchema: T,
  func: FunctionType<T, any>
) => {
  return async (params: any) => {
    //@ts-ignore
    const isValid = yupSchema.isValidSync(params);
    if (isValid) {
      return func(params);
    } else {
      return "is not valid";
    }
  };
};

export default pipe;
