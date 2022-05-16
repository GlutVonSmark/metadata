import React from 'react';
import styled from 'styled-components';

const StyledTopNavbar = styled.div`
    position: relative;
    z-index: 999;
    min-height: 50px;
    margin-bottom: -5px;
`;

const Navbar = ({ className }) => {
    return (
        <StyledTopNavbar>
            <div className={className}></div>
        </StyledTopNavbar>
    );
};

const StyledNavbar = styled(Navbar)`
    background-color: #4fa2c2;
    min-height: 50px;
    position: fixed !important;
    right: 0;
    left: 0;
    top: 0;
    border-width: 0 0 1px;
    margin-bottom: 0 ${'' /* z-index: 999; */};
`;

export default StyledNavbar;
