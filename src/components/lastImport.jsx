import React from 'react';

const getStyles = (isNew) => {
    let styles = { marginBottom: '80px' };
    if (isNew)
        styles = {
            ...styles,
            color: '#999',
            textAlign: 'center',
            marginTop: '10px',
        };
    return styles;
};

const LastImport = ({ isNew, isSuccess }) => {
    const getText = () => {
        const lastUser = isSuccess
            ? 'piotr.juszczyk@ascential.com'
            : 'marc.delamontagne@ascential.com';
        const lastImport = isSuccess ? '29/04/2022' : '11/04/2022';
        return `LAST IMPORT: ${lastImport} - ${lastUser} - 50 rows uploaded`;
    };

    return <div style={getStyles(isNew)}>{getText()}</div>;
};

export default LastImport;
