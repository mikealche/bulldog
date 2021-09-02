import * as Yup from "yup";
export declare type FunctionType<T extends Yup.ObjectSchema<any, any, any, any>, R> = (params: Yup.Asserts<T>) => any;
declare const pipe: <T extends Yup.ObjectSchema<any, any, any, any>>(yupSchema: T, func: FunctionType<T, any>) => (params: any) => Promise<any>;
export default pipe;
