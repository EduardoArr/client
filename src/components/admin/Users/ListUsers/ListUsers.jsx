import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { size, map } from "lodash";
import { User } from "../../../../Api";
import { useAuth } from "../../../../hooks";
import { UserItem } from "../UserItem/UserItem";

const userController = new User();
export const ListUsers = (props) => {
  const { usersActive, reload, onReload } = props;
  const [users, setUsers] = useState(null);
  const { accessToken } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        //para que se vea el loader ponemos los usuarios en null.
        setUsers(null);
        const response = await userController.getUsers(accessToken, usersActive);
        setUsers(response);
      } catch (error) {
        console.error();
      }
    })();
  }, [usersActive, reload]);
  //Cuando ponemos el usersActive abajo significa
  //que el effect se tiene que volver a ejecutar cuando el usersActive cambie.
  //Es decir cuando nos movemos de la pestaña usuarios activos a inactivos y viceversa.

  if (!users) return <Loader active inline="centered" />;
  if (size(users) === 0) return "No hay ningun usuario";

  return map(users, (user) => <UserItem key={user._id} user={user} onReload={onReload} />);
};
