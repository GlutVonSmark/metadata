import React from 'react';
import tableImage from '../table.png';

const GeneratedInfo = ({ isGenerated }) => {
    const text = isGenerated
        ? 'PREVIEW OF GENERATED CLASSIFICATION HIERARCHIES BASED ON CURRENT PORTFOLIO.'
        : 'PREVIEW OF MANUALLY PREPARED FILE.';

    const link = isGenerated
        ? 'https://somethingsomethingsomethis_s3_bucket_something.csv'
        : 'Hierachy_Neste_FR_QA_Structure_22-04-25_3levels (1).csv';

    const style = isGenerated
        ? { marginLeft: '5px' }
        : { textDecoration: 'none', color: '#999' };
    return (
        <>
            <h3 style={{ marginBottom: '0px' }}>{text}</h3>
            {isGenerated && <span>Download Link:</span>}
            <a href='' style={style}>
                {link}
            </a>
        </>
    );
};

const tableDataHeaders = (isGenerated) => {
    const data = [
        'category',
        'dimension1',
        'dimension2',
        'dimension3',
        'dimension4',
        'dimension5',
        'dimension6',
        'dimension7',
        'dimension8',
    ];

    if (isGenerated) {
        data.push('own sku count');
        data.push('competitor sku count');
    }

    return data;
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const tableData = (isGenerated) => {
    const data = [
        'Boissons,Boissons Bien-Être,Boissons,,,5,,25,13',
        'Boissons,Boissons Bien-Être,Cafés purs,,,2,,8,27',
        'Boissons,Boissons Bien-Être,UNCATEGORIZED,,,11,,13,1',
        'Boissons,Boissons Chocolatées,UNCATEGORIZED,,,42,,2,0',
        'Boissons,Cafés Moulus ou en Grains,Cafés purs,,,44,,76,99',
        'Boissons,Cafés Moulus ou en Grains,Moulu,,55,,,8,5',
        'Boissons,Cafés Moulus ou en Grains,Spécialités,,,13,,3,1',
        'Boissons,Cafés Moulus ou en Grains,UNCATEGORIZED,,,22,,55,11',
        'Boissons,Dosettes Et Capsules,Cafés purs,,11,,,14,3',
        'Boissons,Dosettes Et Capsules,Cat Dry Food,,,17,,89,99',
    ];

    const tempData = data.map((row) => {
        const tempRow = row.split(',');
        if (isGenerated) {
            tempRow.push(getRandomInt(0, 100));
            tempRow.push(getRandomInt(0, 100));
        }
        return tempRow;
    });

    return tempData;
};

const PreviewTable = ({ isGenerated }) => {
    return (
        <table>
            <tr>
                {tableDataHeaders(isGenerated).map((item) => {
                    return <th>{item}</th>;
                })}
            </tr>
            {tableData(isGenerated).map((row) => {
                return (
                    <tr>
                        {row.map((item) => {
                            return (
                                <td
                                    style={{
                                        textAlign: isNaN(item)
                                            ? 'left'
                                            : 'right',
                                    }}
                                >
                                    {item}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </table>
    );
};

const Preview = ({ isGenerated }) => {
    return (
        <div style={{ marginTop: '60px' }}>
            <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                <GeneratedInfo isGenerated={isGenerated} />
            </div>
            <PreviewTable isGenerated={isGenerated} />
            {/* <img src={tableImage} alt='preview' /> */}
        </div>
    );
};

export default Preview;
