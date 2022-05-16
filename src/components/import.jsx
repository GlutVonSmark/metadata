import React from 'react';
import PrimaryButton from './PrimaryButton';

const Import = ({ handleClick, isNew, previewReady }) => {
    const getText = () => {
        if (!isNew || previewReady) return 'Import';
        return 'Preview';
    };
    return (
        <div style={{ marginTop: '10px' }}>
            <PrimaryButton onClick={handleClick}>{getText()}</PrimaryButton>
        </div>
    );
};

export default Import;
