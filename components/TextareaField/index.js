import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import styles from './TextareaField.module.css';

export default function TextField({
    label,
    placeholder,
    required,
    error,
    onChange,
    disabled,
    defaultValue,
}) {
    const [value, setValue] = useState(null);
    const onInputChange = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
    }

    return (
        <Container>
            <textarea
                rows={4}
                className={styles.textareaFieldInput}
                name={label}
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={onInputChange}
                disabled={disabled}
                defaultValue={defaultValue}
            />
            {error && <span className="error">{error}</span>}
        </Container>
    )
}