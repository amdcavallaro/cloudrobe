import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  width: 100%;

  @media only screen and (min-width: 961px) {
    width: 960px;
    min-width: 660px;
    margin: 0 auto;
    flex-direction: row;
  }
`;

export const ButtonsWrapper = styled.div`
  @media only screen and (min-width: 961px) {
    width: 960px;
    min-width: 660px;
    margin: 0 auto;
    flex-direction: row;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
