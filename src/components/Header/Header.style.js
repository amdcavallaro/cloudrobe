import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 660px;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const BackButton = styled.button`
    color: black;
    font-size: 16px;
    font-weight: 500;

    background-color: white;

    width 70px;
    height: 24px;
    border: 1px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;

    left: 0;
    position: absolute;
`;

export const HeaderContent = styled.h1``;
