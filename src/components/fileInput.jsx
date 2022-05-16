import React from 'react';
import PrimaryButton from './PrimaryButton';

const uploadText = 'Upload Classification Hierarchy file manually.';

// const getInputStyle = (isNew) => {
//     if (isNew) {
//         return {
//             marginTop: '7px',
//             marginRight: '15px',
//             backgroundColor: '#4fa2c2',
//             borderColor: '#50abc2',
//             color: '#fff',
//             display: 'inline-block',
//             padding: '6px 12px',
//             marginBottom: '0',
//             fontSize: '14px',
//             fontWeight: 'normal',
//             lineHeight: '1.428571429',
//             textAlign: 'center',
//             whiteSpace: 'nowrap',
//             verticalAlign: 'middle',
//             cursor: 'pointer',
//             border: '1px solid transparent',
//             borderRadius: '4px',
//             WebkitUserSelect: 'none',
//             MozUserSelect: 'none',
//             MsUserSelect: 'none',
//             OUserSelect: 'none',
//             userSelect: 'none',
//         };
//     }
//     return;
// };

const FileInput = ({ isNew = false, handleClick, fileReady }) => {
    return (
        <div style={{ textAlign: isNew ? 'left' : 'center', width: '45%' }}>
            {!isNew ? (
                <input
                    accept='csv'
                    type='file'
                    style={{ color: '#999', marginTop: '7px' }}
                />
            ) : (
                <>
                    <PrimaryButton
                        onClick={() => handleClick(true)}
                        style={{ marginRight: '5px' }}
                    >
                        Choose file
                    </PrimaryButton>
                </>
            )}

            <div style={{ textAlign: 'left', marginTop: '13px' }}>
                {uploadText}
            </div>
            {isNew && (
                <div
                    style={{
                        color: 'rgb(153, 153, 153)',
                        textAlign: 'left',
                        marginTop: '5px',
                    }}
                >
                    {fileReady
                        ? 'Hierachy_N....levels(1).csv'
                        : 'No file chosen'}
                </div>
            )}
        </div>
    );
};

export default FileInput;
