import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    color: #3a87ad;
    background-color: #d9edf7;
    border-color: #bce8f1;

    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
`;

const AlertInfo = () => {
    return (
        <StyledDiv>
            NOTE: CSV files should have those columns in the following order:{' '}
            <br />
            category, dimension1, dimension2, dimension3, dimension4,
            dimension5, dimension6, dimension7, dimension8
        </StyledDiv>
    );
};

export default AlertInfo;
