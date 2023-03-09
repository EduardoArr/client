import React, { useState } from "react";
import "./Newsletter.scss";
import { Form } from "semantic-ui-react";
import { initialValues, validationSchema } from "./Newsletter.form";
import { NewsLetter as NewsLetterController } from "../../../../Api";
import { useFormik } from "formik";

const newsletterController = new NewsLetterController();
export const Newsletter = () => {
  const [success, setSuccess] = useState(true);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (fomValue) => {
      setSuccess(false);
      try {
        await newsletterController.createEmail(fomValue.email);
        formik.resetForm();
        setSuccess(true);
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <div className="footer-newsletter">
      <h4>Apuntate y aprende</h4>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Input name="email" placeholder="Correo electronico" onChange={formik.handleChange} value={formik.values.email} error={formik.errors.email}></Form.Input>
        <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
          Me suscribo
        </Form.Button>

        {success && <p className="success">Email registrado</p>}
      </Form>
    </div>
  );
};
