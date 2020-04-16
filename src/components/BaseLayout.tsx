import React from "react";
import Background from "./Background";
import ContainerBox from "./ContainerBox";
import NavBar from "./NavBar";

export default class BaseLayout extends React.Component<any, any> {
  render() {
    return (
      <>
        <Background />
        <NavBar />
        <ContainerBox>{this.props.children}</ContainerBox>
      </>
    );
  }
}
