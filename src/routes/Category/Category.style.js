import styled from 'styled-components';

export const CategoryContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 320px;
    margin: 10px auto;

    @media only screen and (min-width: 768px) {
        width: 640px;
    }
`;