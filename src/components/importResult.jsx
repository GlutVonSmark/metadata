import React from 'react';
import HorizontalLine from './horizontalLine';

const Fail = () => (
    <>
        Import status: Fail = file was not imported <br />
        Error row 5 - dimension3 [SHA - 4 Blade] is not a valid classification
        value. <br /> Error row 11 - category [Lighter] is not a valid category
        value. <br />
    </>
);

const Success = () => (
    <>
        File imported succesfully. <br />3 rows skipeed.
    </>
);

const ImportResult = ({ isSuccess = false, isNew }) => {
    const result = isSuccess ? <Success /> : <Fail />;

    const getStyle = () => {
        if (isNew) {
            const style = {
                marginTop: '50px',
                position: 'relative',
                padding: '.75rem 1.25rem',
                marginBottom: '1rem',
                border: '1px solid transparent',
                borderRadius: '.25rem',
            };

            const successStyle = {
                color: '#155724',
                backgroundColor: '#d4edda',
                borderColor: '#c3e6cb',
            };

            const failStyle = {
                color: '#721c24',
                backgroundColor: '#f8d7da',
                borderColor: '#f5c6cb',
            };

            const finalStyle = isSuccess ? successStyle : failStyle;

            return { ...style, ...finalStyle };
        }
        return { marginTop: '20px' };
    };

    return (
        <div style={{ width: '100%' }}>
            {!isNew && <HorizontalLine />}

            <div style={getStyle()}>{result}</div>
        </div>
    );
};

export default ImportResult;
