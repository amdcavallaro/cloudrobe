import styled from 'styled-components';

export const ClothesItem = styled.img`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    opacity: 0.9;
    margin: 5px 5px;
    width: 150px;
    height: 100px;

    @media only screen and (min-width: 768px) {
        width: 200px;
        height: 150px; 
    }

    :hover {
        opacity: 1;
        cursor: pointer;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
`;