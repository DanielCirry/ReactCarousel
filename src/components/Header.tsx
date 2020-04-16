import styled from "styled-components";
import Label from "../components/Label";

export default styled(Label)`
  font-size: ${({ fontSize }) => (fontSize ? 43 : 36)}px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
