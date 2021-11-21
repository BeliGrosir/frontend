import React, { useState } from 'react';
import styles from './FileField.module.css'

const FileField = ({ description, required, error, onFileSelected }) => {
    const [fileName, setFileName] = useState('');

    const handleChange = (event) => {
        onFileSelected(event.target.files);
        setFileName(event.target.files[0].name);
    }

    return (
        <div className={styles.container}>
            {fileName === '' ? (
                <label className="desc">{description}</label>
            ) : (
                <label className="desc name">{fileName}</label>
            )}
            <input required={required} type="file" onChange={handleChange} className={styles.fileFieldInput} />
            {error && <span className="error">{error}</span>}
        </div>
    );
}

export default FileField;
