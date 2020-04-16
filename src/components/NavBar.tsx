import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { colors } from "../Constants/theme";

const NavBar = () => {
  return (
    <TopBar>
      <Toolbar>
        <TypoGraphy> React & Material-UI sample application</TypoGraphy>
      </Toolbar>
    </TopBar>
  );
};

const TopBar = styled(AppBar)`
  && {
    position: relative;
    color: ${colors.skin};
    background: ${colors.darkRed};
  }
`;

const TypoGraphy = styled(Typography)``;

export default NavBar;
