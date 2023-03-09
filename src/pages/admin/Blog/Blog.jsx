import React, { useState } from "react";
import { Tab, Button } from "semantic-ui-react";
import { BasicModal } from "../../../components/Shared";
import "./Blog.scss";
import { PostForm } from "../../../components/admin/Post";
import { ListPost } from "../../../components/admin/Post";
export const Blog = () => {
  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false);

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  const onReload = () => setReload((prevState) => !prevState);
  const panes = [
    {
      render: () => (
        <Tab.Pane attached={false}>
          <ListPost reload={reload} onReload={onReload} />
        </Tab.Pane>
      ),
    },
  ];
  return (
    <>
      <div className="blog-page">
        <div className="blog-page__add">
          <Button primary onClick={onOpenCloseModal}>
            Nuevo post
          </Button>
        </div>
        <Tab menu={{ secondary: true }} panes={panes}></Tab>
      </div>
      <BasicModal show={showModal} close={onOpenCloseModal} title="Crear un nuevo post" size="large">
        <PostForm onClose={onOpenCloseModal} onReload={onReload}></PostForm>
      </BasicModal>
    </>
  );
};
