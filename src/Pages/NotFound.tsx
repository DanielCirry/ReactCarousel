import React from "react";
import { errors } from "../Constants/strings";
import Header from "../components/Header";
import Label from "../components/Label";

export default class NotFound extends React.Component<any, any> {
  render() {
    return (
      <>
        <Header>{errors.notFound404}</Header>
        <Label>{errors.notFoundMessage}</Label>
      </>
    );
  }
}
