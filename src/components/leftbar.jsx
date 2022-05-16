import React from 'react';
import styled from 'styled-components';

const Leftbar = ({ className, handleClick }) => {
    return (
        <div className={className}>
            <div style={{ marginTop: '200px' }}>
                <input
                    type='checkbox'
                    onClick={(e) => handleClick(e.target.checked)}
                />
                <label>New</label>
            </div>
        </div>
    );
};

const StyledLeftbar = styled(Leftbar)`
    display: block;
    border-right: 1px solid #c3c3c3;
    background-color: #3a4b55;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 230px;
`;

export default StyledLeftbar;
