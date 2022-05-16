import React from 'react';

export const GeneratedInfo = () => {
    return (
        <>
            <h3 style={{ textDecoration: 'underline', marginBottom: '0px' }}>
                GENERATED CLASSIFICATION HIERARCHIES BASED ON CURRENT PORTFOLIO
            </h3>
            Download Link:
            <span
                style={{
                    textDecoration: 'underline',
                    color: 'blue',
                    cursor: 'pointer',
                    marginLeft: '5px',
                }}
            >
                https://somethingsomethingsomethis_s3_bucket_something.csv
            </span>
        </>
    );
};

const GeneratedFile = () => {
    return (
        <div style={{ alignSelf: 'start', marginTop: '5px' }}>
            <GeneratedInfo />
            <div style={{ marginTop: '10px' }}>
                <div
                    style={{
                        textDecoration: 'underline',
                        fontWeight: 'bold',
                        fontSize: '14px',
                    }}
                >
                    raw data:
                </div>
                <div>
                    category,dimension1,dimension2,dimension3,dimension4,dimension5,dimension6,dimension7,dimension8{' '}
                    <br />
                    Boissons,Boissons Bien-Être,Boissons,,,,,25,
                    <br />
                    Boissons,Boissons Bien-Être,Cafés purs,,,,,8,
                    <br />
                    Boissons,Boissons Bien-Être,UNCATEGORIZED,,,,,13,
                    <br />
                    Boissons,Boissons Chocolatées,UNCATEGORIZED,,,,,2,
                    <br />
                    Boissons,Cafés Moulus ou en Grains,Cafés purs,,,,,76,
                    <br />
                    Boissons,Cafés Moulus ou en Grains,Moulu,,,,,8,
                    <br />
                    Boissons,Cafés Moulus ou en Grains,Spécialités,,,,,3,
                    <br />
                    Boissons,Cafés Moulus ou en Grains,UNCATEGORIZED,,,,,55,
                    <br />
                    Boissons,Dosettes Et Capsules,Cafés purs,,,,,14,
                    <br />
                    Boissons,Dosettes Et Capsules,Cat Dry Food,,,,,89,
                    <br />
                    Boissons,Dosettes Et Capsules,Moulu,,,,,69,
                    <br />
                    Boissons,Dosettes Et Capsules,Spécialités,,,,,11,
                    <br />
                    Boissons,Dosettes Et Capsules,Thés,,,,,7,
                    <br />
                </div>
            </div>
        </div>
    );
};

export default GeneratedFile;
