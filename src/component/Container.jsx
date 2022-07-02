import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: 0 20px;
`;

export default ({ children }) => (
  <Container>
    {children}
  </Container>
);
