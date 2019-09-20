import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    min-width: 660px;
`;

export const ButtonsWrapper = styled.div`
    min-width: 660px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;