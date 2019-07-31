import styled from 'styled-components';

export const GroupWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 1000px;
    margin: 10px auto;
    padding: 10px;

    :hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
`;

export const GroupImage = styled.div`
    :hover {
        cursor: pointer;
    }
`;

export const GroupName = styled.div`
    font-size: 24px;
    cursor: pointer;
`;

export const GroupCount = styled.div`
    font-size: 24px;
    cursor: pointer;
`;

export const GroupContent = styled.div`
    display: flex;
`;
