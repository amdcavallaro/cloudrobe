import styled from 'styled-components';

export const ButtonWrapper = styled.button`
    font-weight: 600;
    padding: 8px 8px;
    margin: auto 10px;
    text-align: center;
    cursor: pointer;
    color: black;
    width: 250px;

    background: rgba(255, 255, 255, 1);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .2);

    :hover {
        background: rgba(240, 240, 240, 1);
    }
`;