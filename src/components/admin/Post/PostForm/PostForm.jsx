import React, { useCallback } from "react";
import { Form, Image } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { Editor } from "@tinymce/tinymce-react";
import { useFormik } from "formik";
import { Post } from "../../../../Api";
import { useAuth } from "../../../../hooks";
import { initialValues, validationSchema } from "./PostForm.form";
import { ENV } from "../../../../utils";
import "./PostForm.scss";

const postController = new Post();

export const PostForm = (props) => {
  const { accessToken } = useAuth();
  const { onClose, onReload, post } = props;
  const formik = useFormik({
    initialValues: initialValues(post),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (post) {
          await postController.updatePost(accessToken, post._id, formValue);
        } else {
          await postController.createPost(accessToken, formValue);
        }
        onReload();
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });
  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    formik.setFieldValue("miniature", URL.createObjectURL(file));
    formik.setFieldValue("file", file);
  });

  const getMinitature = () => {
    if (formik.values.file) {
      return formik.values.miniature;
    } else if (formik.values.miniature) {
      return `${ENV.BASE_PATH}/${formik.values.miniature}`;
    }
    return null;
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    onDrop,
  });
  return (
    <Form className="post-form" onSubmit={formik.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input name="title" placeholder="Titulo del post" onChange={formik.handleChange} value={formik.values.title} error={formik.errors.title} />
        <Form.Input name="path" placeholder="Path del post" onChange={formik.handleChange} value={formik.values.path} error={formik.errors.path} />
      </Form.Group>

      <Editor
        init={{
          height: 400,
          menubar: true,
          plugins: ["advlist autolink lists link image charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table paste code help wordcount"],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
        }}
        initialValue={formik.values.content}
        onBlur={(e) => formik.setFieldValue("content", e.target.getContent())}
      />

      <div className="post-form__miniature" {...getRootProps()}>
        <input {...getInputProps()} />
        {getMinitature() ? (
          <Image size="small" src={getMinitature()} />
        ) : (
          <div>
            <span>Arrastra tu imagen</span>
          </div>
        )}
      </div>

      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        {post ? "Actualizar post" : "Crear post"}
      </Form.Button>
    </Form>
  );
};
