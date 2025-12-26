import * as Yup from "yup";

export const contactValidationSchema = Yup.object().shape({
  fullname: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
  email: Yup.string()
    .email("آدرس ایمیل معتبر نیست")
    .required("آدرس ایمیل الزامی می باشد"),
  subject: Yup.string().required("نوشتن عنوان الزامی می باشد"),
  message: Yup.string().required("نوشتن پیام الزامی می باشد"),
  recaptcha: Yup.string().required(" من ربات نیستم الزامی می باشد"),
});
export const contactValidationSchemaEn = Yup.object().shape({
  fullname: Yup.string().required("Fullname is required"),
  email: Yup.string()
    .email("Email address is not valid")
    .required("Email address is required"),
  subject: Yup.string().required("Title is required"),
  message: Yup.string().required("Text is required"),
  recaptcha: Yup.string().required("I'm not a robot is required"),
});
