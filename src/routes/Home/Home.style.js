import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  width: 100%;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ButtonsWrapper = styled.div`
    margin: 5px auto;
    flex-direction: row;
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
