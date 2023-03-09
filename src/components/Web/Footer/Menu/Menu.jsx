import React from "react";
import "./Menu.scss";
import { Grid, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
export const Menu = () => {
  return (
    <div className="footer-menu">
      <h4>Navegación</h4>
      <Grid columns={2}>
        <Grid.Column>
          <Link to="#">
            <Icon name="book" /> Cursos online
          </Link>
          <Link to="#">
            <Icon name="code" /> Desarrollo web
          </Link>
          <Link to="#">
            <Icon name="database" /> Base de datos
          </Link>
          <Link to="#">
            <Icon name="code" /> UI/UX
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="#">
            <Icon name="server" /> Sistemas/ Servidores
          </Link>
          <Link to="#">
            <Icon name="cogs" /> CMS
          </Link>
          <Link to="#">
            <Icon name="user outline" /> Portfolio
          </Link>
          <Link to="#">
            <Icon name="python" /> Backend
          </Link>
        </Grid.Column>
      </Grid>
    </div>
  );
};
