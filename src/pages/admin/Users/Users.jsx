import React, { useState } from "react";
import { Tab, Button } from "semantic-ui-react";
import "./Users.scss";
import { BasicModal } from "../../../components/Shared";
import { UserForm } from "../../../components/admin/Users";
import { ListUsers } from "../../../components/admin/Users/ListUsers/ListUsers";

export const Users = () => {
  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false);

  //El onReload es para actualizar la lista de usuarios cuando creamos uno nuevo y no tengamos que refrescar.
  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  const onReload = () => setReload((prevState) => !prevState);

  const panes = [
    {
      menuItem: "Usuarios activos",
      render: () => (
        <Tab.Pane attached={false}>
          <ListUsers usersActive={true} reload={reload} onReload={onReload} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Usuarios inactivos",
      render: () => (
        <Tab.Pane attached={false}>
          <ListUsers usersActive={false} reload={reload} onReload={onReload} />
        </Tab.Pane>
      ),
    },
  ];
  return (
    <>
      <div className="user-page">
        <Button className="users-page__add" primary onClick={onOpenCloseModal}>
          Nuevo Usuario
        </Button>
        <Tab menu={{ secondary: true }} panes={panes}></Tab>
      </div>

      <BasicModal show={showModal} close={onOpenCloseModal} title="Crear nuevo usuario">
        <UserForm close={onOpenCloseModal} onReload={onReload} />
      </BasicModal>
    </>
  );
};
