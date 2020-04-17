import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { colors } from "../Constants/theme";

const Course = (props) => {
  return (
    props.course && (
      <CourseCard>
        <CardContent>
          <CardMediaContent
            image={props.course.fields.courseImage}
            title={props.course.fields.title}
          />
          <Typography variant="h5">{props.course.fields.title}</Typography>
          <Typography>{props.course.fields.description}</Typography>
          <CardActions>
            <CardButton
              size="small"
              href={props.course.fields.url}
              target="_blank"
            >
              Go To Course
            </CardButton>
          </CardActions>
        </CardContent>
      </CourseCard>
    )
  );
};

export default Course;

const CourseCard = styled(Card)`
  position: relative;
  flex: 1;
  cursor: pointer;
  width: 358px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const CardMediaContent = styled(CardMedia)`
  width: 100%;
  height: 100%;
  padding-top: 56.25%;
`;

const CardButton = styled(Button)`
  && {
    color: ${colors.lightBlue};
  }
`;
