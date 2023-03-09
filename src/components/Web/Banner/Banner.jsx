import React from "react";
import "./Banner.scss";
import { Container } from "semantic-ui-react";

export const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <h1>
          Aprende nuevas <br />
          tecnologías web y movil
        </h1>
        <h2>
          A través de cursos prácticos, concisos y actualizados, creados por
          <br />
          profesionales con años de experiencia.
        </h2>
      </Container>
      <div className="banner__dark" />
    </div>
  );
};
