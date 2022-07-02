import styled from "@emotion/styled";

import theme from "../theme";

export default styled.a`
  display: flex;
  align-items: center;
  padding: 30px;
  color: inherit;
  text-decoration: none;
  background-color: ${theme.color.background.secondary};
  border-radius: 10px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: 1px solid rgb(224, 227, 231);
  box-shadow: none;

  &:hover {
    color: ${theme.color.text.primary};
    box-shadow: rgba(159, 171, 182, 0.3) 0px 4px 20px;
  }
`;
