import React from 'react';
import styled from 'styled-components';

const StyledOl = styled.ol`
    border: solid 1px #d4d4d4;
    padding: 8px 15px;
    margin-bottom: 20px;
    list-style: none;
    background-color: #f5f5f5;
    border-radius: 4px;
`;

const StyledLi = styled.li`
    display: inline-block;

    &.active {
        color: #999;
    }

    & + &::before {
        padding: 0 5px;
        color: #ccc;
        content: '/';
    }
`;

const Breadcrumb = () => {
    return (
        <StyledOl>
            <StyledLi>Customers</StyledLi>
            <StyledLi>Nestle FR</StyledLi>
            <StyledLi className='active'>Classification Hierarchy</StyledLi>
        </StyledOl>
    );
};

export default Breadcrumb;
