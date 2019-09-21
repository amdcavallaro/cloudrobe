import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: #212a36;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    width: 100%;
    margin: 0 auto;
    color: #FFCC2A;
`;

export const BackButton = styled.button`
    color: #FFCC2A;
    font-size: 16px;
    font-weight: 500;

    background-color: #2C394A;

    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .2);

    :hover {
        background: #000;
    }

    width: 70px;
    height: 24px;
    border: 1px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;

    left: 0;
    position: absolute;
`;

export const HeaderContent = styled.h1``;
