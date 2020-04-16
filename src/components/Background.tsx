import React, { Component } from "react";
import styled from "styled-components";
import BackgroundImage from "../images/background.jpg";

interface IState {
  width: number;
}

export default class Background extends Component<any, IState> {
  state = {
    width: window.screen.availWidth
  };

  conponentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    return <Image>{!isMobile && <img src={BackgroundImage} alt="" />}</Image>;
  }
}

const Image = styled.div`
  position: absolute;
  min-height: 630px;
  min-width: 50px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
