import { pipe, Yup } from "lib";

const Schema = new Yup.ObjectSchema({
  id: Yup.string(),
});

export default pipe(Schema, ({ id }) => {
  return `This is another route ${id}`;
});
