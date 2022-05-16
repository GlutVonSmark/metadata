import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Leftbar from './components/leftbar';
import Breadcrumb from './components/breadcrumb';
import Layout from './components/layout';
import NavTabs from './components/navTabs';
import AlertInfo from './components/alertInfo';
import FileInput from './components/fileInput';
import Import from './components/import';
import LastImport from './components/lastImport';
import Generate from './components/generate';
import Or from './components/or';
import HorizontalLine from './components/horizontalLine';
import Checkboxes from './components/checkboxes';
import ImportResult from './components/importResult';
import GeneratedFile from './components/generatedFile';
import Preview from './components/preview';
import Loader from './components/loader';

function App() {
    const [isNew, setIsNew] = React.useState(false);
    const [isResult, setIsResult] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [isGenerated, setIsGenerated] = React.useState(false);
    const [fileReady, setFileReady] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const [previewReady, setIsPreviewReady] = React.useState(false);

    const handleImportClick = () => {
        document.body.style.cursor = 'wait';
        setIsLoading(true);
        setTimeout(() => {
            document.body.style.cursor = 'auto';
            isNew ? setIsPreviewReady(true) : setIsResult(true);
            if (previewReady) setIsResult(true);
            setIsLoading(false);
        }, 3000);
    };

    const handleGenerate = () => {
        document.body.style.cursor = 'wait';
        setIsLoading(true);
        setTimeout(() => {
            document.body.style.cursor = 'auto';
            setIsGenerated(true);
            if (isNew) {
                setFileReady(true);
                setIsPreviewReady(true);
            }
            setIsLoading(false);
        }, 3000);
    };

    const showCheckboxes = () => {
        if (!isNew) return true;
        return previewReady;
    };

    const showImport = () => {
        if (!isNew) return true;
        return fileReady;
    };

    const handleChooseFile = (value) => {
        console.log('value', value);
        setFileReady(value);
    };

    return (
        <>
            <Navbar />
            <Leftbar handleClick={setIsNew} />
            <Layout>
                <Breadcrumb />
                <h2>Classification Hierarchy</h2>
                <NavTabs />
                <LastImport isNew={isNew} isSuccess={isSuccess} />
                <div
                    style={{
                        width: isNew ? '75%' : ' 50%',
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {!isNew && <AlertInfo />}

                    <div style={{ display: 'flex' }}>
                        <Generate
                            handleGenerate={handleGenerate}
                            isNew={isNew}
                        />
                        <Or isNew={isNew} />
                        <FileInput
                            isNew={isNew}
                            handleClick={handleChooseFile}
                            fileReady={fileReady}
                        />
                    </div>
                    {isGenerated && !isNew && <GeneratedFile />}
                    {!isNew && <HorizontalLine />}
                    {showCheckboxes() && (
                        <Checkboxes handleClick={setIsSuccess} isNew={isNew} />
                    )}
                    {showImport() && (
                        <Import
                            handleClick={handleImportClick}
                            isNew={isNew}
                            previewReady={previewReady}
                        />
                    )}
                    {isResult && (
                        <ImportResult isSuccess={isSuccess} isNew={isNew} />
                    )}
                    {isNew && previewReady && !isResult && (
                        <Preview isGenerated={isGenerated} />
                    )}
                </div>
            </Layout>
            {isLoading && <Loader />}
        </>
    );
}

export default App;
