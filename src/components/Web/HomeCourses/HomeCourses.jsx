import React, { useState, useEffect } from "react";
import "./HomeCourses.scss";
import { Container, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { map } from "lodash";
import { Course } from "../../../Api";
import { ENV } from "../../../utils";

const courseController = new Course();
export const HomeCourses = () => {
  const [courses, setCourse] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await courseController.getCourses({ limit: 3 });
        setCourse(response.docs);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <Container className="home-courses">
      <h2>Aprende y mejora tus habilidades</h2>
      <div className="home-courses__all-courses">
        {map(courses, (course) => (
          <a key={course._id} href={course.url} target="_blank">
            <Image src={`${ENV.BASE_PATH}/${course.miniature}`} />
            <div>
              <span>{course.title}</span>
              <span>{course.description}</span>
            </div>
          </a>
        ))}
      </div>
      <div className="home-courses__more">
        <Button as={Link} to="/courses" primary>
          Ver Mas
        </Button>
      </div>
    </Container>
  );
};
