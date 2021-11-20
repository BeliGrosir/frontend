import React, { useState } from 'react'
import styles from './TextField.module.css';

export default function TextField({
    label,
    placeholder,
    required,
    error,
    onChange,
    disabled,
    defaultValue
}) {
    const [value, setValue] = useState(null);
    const onInputChange = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
    }

    return (
        <div>
            <label className={styles.textFieldLabel}> {label} </label>
            <input
                className={styles.textFieldInput}
                type="text"
                name={label}
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={onInputChange}
                disabled={disabled}
                defaultValue={defaultValue}
            />
            {error && <span className="error">{error}</span>}
        </div>
    )
}