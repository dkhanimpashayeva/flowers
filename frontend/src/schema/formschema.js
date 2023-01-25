import * as yup from 'yup';
export const formSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required().positive().integer(),

  url: yup.string().url().required(),
  
});