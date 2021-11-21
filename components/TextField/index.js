import React from 'react'
import styles from './TextField.module.css';

export default function TextField({
    label,
    placeholder,
    required,
    error,
    onChange,
    disabled,
    defaultValue,
    type
}) {
    return (
        <div className={styles.container}>
            <label className={styles.textFieldLabel}> {label} </label>
            <input
                className={styles.textFieldInput}
                type={type === "password" ? "password" : "text"}
                name={label}
                value={defaultValue}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                disabled={disabled}
                defaultValue={defaultValue}
            />
            {error && <span className="error">{error}</span>}
        </div >
    )
}