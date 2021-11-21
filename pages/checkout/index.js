import Head from 'next/head'

import SideTextField from '../../components/SideTextField'
import TextareaField from '../../components/TextareaField'

import styles from '../../styles/Checkout.module.css'

import { Container, Row, Col } from 'react-bootstrap'

export default function Checkout() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Checkout</title>
            </Head>
            <h1 className={styles.title}>Checkout</h1>
            <Container>
                <Row>
                    <Col md={8} lg={8} xl={8}>
                        <div className={styles.shippingAddress}>
                            <h3>Shipping Address</h3>
                            <SideTextField
                                label={"Name"}
                                placeholder={"Type your name"}
                                required={true}
                            />
                            <SideTextField
                                label={"Email"}
                                placeholder={"Type your email"}
                                required={true}
                            />
                            <SideTextField
                                label={"Phone Number"}
                                placeholder={"Type your phone number"}
                                required={true}
                            />
                            <SideTextField
                                label={"Address"}
                                placeholder={"Type your address"}
                                required={true}
                            />
                        </div>
                        <div className={styles.paymentMethod}>
                            <h3>Payment Method</h3>
                            <p>Transfer to <b>BNI - Intan Berlian</b> (Account Number: 1782835672)</p>
                        </div>
                        <div className={styles.paymentConfirmation}>
                            <h3>Payment Confirmation</h3>
                            <p>Please upload your payment evidence before placing order</p>
                        </div>
                        <div className={styles.note}>
                            <h3>Note</h3>
                            <TextareaField
                                placeholder={"Type your note"}
                                required={true}
                            />
                        </div>
                    </Col>
                    <Col md={4} lg={4} xl={4}>Variable width content</Col>
                </Row>
            </Container>
        </div>
    )
}