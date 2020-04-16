import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const Course = (props) => {
  return (
    props.course && (
      <Card>
        <CardContent>
          <CardMedia
            image={props.course.fields.courseImage}
            title={props.course.fields.title}
            style={{ height: "100%", paddingTop: "56.25%" }}
          />
          <Typography variant="h5">{props.course.fields.title}</Typography>
          <Typography>{props.course.fields.description}</Typography>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href={props.course.fields.url}
              target="_blank"
            >
              Go To COurse
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    )
  );
};

export default Course;
