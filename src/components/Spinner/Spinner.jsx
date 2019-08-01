import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const StyledSpinner = styled.div`
    margin: 10px auto;
    border: 5px solid #ccc;
    border-top: 5px solid maroon;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: ${spin} 1s linear infinite;
`;

const Spinner = () => <StyledSpinner />;

export default Spinner;
