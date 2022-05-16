import React from 'react';

const Or = ({ isNew }) => {
    return (
        <div
            style={{
                margin: isNew ? '0px 80px' : '0px 30px',
                color: isNew ? '#999' : 'inherit',
                marginTop: isNew ? '10px' : '0px',
            }}
        >
            OR
            {!isNew && (
                <div
                    style={{
                        borderLeft: '3px solid black',
                        height: '75px',
                        marginLeft: '6px',
                        marginTop: '10px',
                    }}
                />
            )}
        </div>
    );
};

export default Or;
