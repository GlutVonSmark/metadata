import React from 'react';
import PrimaryButton from './PrimaryButton';

const generateText =
    'Generate Classification Hierarchy file based on the current instance portfolio.';

const Generate = ({ handleGenerate, isNew = false }) => {
    return (
        <div style={{ textAlign: isNew ? 'left' : 'center', width: '45%' }}>
            <div style={{ marginBottom: '10px' }}>
                <PrimaryButton onClick={handleGenerate}>Generate</PrimaryButton>
            </div>
            <div style={{ textAlign: 'left' }}>{generateText}</div>
            <div style={{ textAlign: 'left', marginTop: '5px' }}>
                <input
                    type='checkbox'
                    name='skus'
                    id='skus'
                    style={{ verticalAlign: 'middle' }}
                />
                <label htmlFor='skus' style={{ verticalAlign: 'middle' }}>
                    Include Competitors SKUs
                </label>
            </div>
        </div>
    );
};

export default Generate;
