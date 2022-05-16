import React from 'react';
import styled from 'styled-components';

const text1 =
    'Use Generated Classification Hierarchy file (if disabled, use manually loaded file instead)';

const text2 = 'Delete existing hierarchy for this customer';

const text3 = 'Skip invalid rows (they will not be imported).';

const StyledInput = styled.input`
    vertical-align: middle;
`;

const StyledLabel = styled.label`
    vertical-align: middle;
    margin-left: 10px;
`;

const StyledLi = styled.li`
    list-style: none;
`;

const CheckBox = ({ text, id, setSuccess, isNew }) => (
    <StyledLi style={{ marginTop: isNew ? '5px' : '0px' }}>
        <StyledInput
            type='checkbox'
            id={id}
            onClick={(e) => setSuccess(e.target.checked)}
        />
        <StyledLabel htmlFor={id}>{text}</StyledLabel>
    </StyledLi>
);

const Checkboxes = ({ handleClick, isNew }) => {
    return (
        <div style={{ marginTop: isNew ? '60px' : '20px' }}>
            <ul>
                {!isNew && <CheckBox text={text1} id={1} />}
                <CheckBox text={text2} id={2} />
                <CheckBox
                    text={text3}
                    id={2}
                    setSuccess={handleClick}
                    isNew={isNew}
                />
            </ul>
        </div>
    );
};

export default Checkboxes;
