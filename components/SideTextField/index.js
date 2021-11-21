import React, { useState } from 'react'
import styles from './SideTextField.module.css';

import { Container, Row, Col } from 'react-bootstrap'

export default function SideTextField({
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
        <Container className={styles.container}>
            <Row className="d-flex align-items-center justify-content-center">
                <Col xs={12} sm={12} md={3} lg={3}>
                    <label className={styles.textFieldLabel}> {label} </label>
                </Col>
                <Col xs={12} sm={12} md={9} lg={9}>
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
                </Col>
                {error && <span className="error">{error}</span>}
            </Row>
        </Container>
    )
}