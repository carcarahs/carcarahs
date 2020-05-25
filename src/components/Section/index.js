import React from "react";

import { Container } from "./styles";

function Section({ style, ...rest }) {
  return <Container style={style}>{rest.children}</Container>;
}

export default Section;
