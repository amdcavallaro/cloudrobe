import styled from 'styled-components';

export const CategoryWrapper = styled.div`
    margin: 5px 10PX;
`;

export const CategoryImage = styled.div`
    background: url(assets/images/categories/${props => props.main}_desktop.jpg);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    opacity: 0.9;
    width: 200px;
    height: 150px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;

    :hover {
        opacity: 1;
        cursor: pointer;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
`;

export const CategoryDetails = styled.div`
    background-color: white;
    width: 200px;
    opacity: 0.7;
`;

export const CategoryName = styled.div`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 24px;
    cursor: pointer;
`;

export const CategoryCount = styled.div`
    font-size: 20px;
    cursor: pointer;
    margin-bottom: 5px;
    font-weight: 500;
`;
