import * as Yup from "yup";

export const initialValues = (user) => {
  return {
    avatar: user?.avatar || "",
    fileAvatar: null,
    firstname: user?.firstname || "",
    lastname: user?.lastname || "",
    email: user?.email || "",
    role: user?.role || "",
    password: "",
  };
};

export const validationSchema = (user) => {
  return Yup.object({
    firstname: Yup.string().required(true),
    lastname: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    role: Yup.string().required(true),
    //Si el usuario edita su perfil, no es obligatorio que actualice la contraseña.
    password: user ? Yup.string() : Yup.string().required(true),
  });
};
