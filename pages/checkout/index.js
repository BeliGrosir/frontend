import Head from 'next/head'
import Image from 'next/image'

import FileField from '../../components/FileField'
import SideTextField from '../../components/SideTextField'
import TextareaField from '../../components/TextareaField'

import styles from '../../styles/Checkout.module.css'

import { Container, Row, Col } from 'react-bootstrap'
import { style } from 'dom-helpers'

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
                            <FileField
                                description={'Please upload your payment evidence before placing order'}
                            />
                        </div>
                        <div className={styles.note}>
                            <h3>Note</h3>
                            <TextareaField
                                placeholder={"Type your note"}
                                required={true}
                            />
                        </div>
                    </Col>
                    <Col md={4} lg={4} xl={4}>
                        <Container>
                            <div className={styles.product}>
                                <Row className="d-flex align-items-center justify-content-center">
                                    <Col>
                                        <img
                                            src={'https://media.npr.org/assets/img/2019/09/27/nuts-1_custom-61cfca772f4f991e157977ffe42febcb8c23d7dc-s1100-c50.jpg'}
                                            alt={'Product 1'}
                                            width={100}
                                            height={100}
                                            className={styles.productImage}
                                        />
                                    </Col>
                                    <Col>
                                        <p className={styles.productName}>Almond</p>
                                    </Col>
                                    <Col className="text-end">
                                        <p>Rp65.000</p>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.product}>
                                <Row className="d-flex align-items-center justify-content-center">
                                    <Col>
                                        <img
                                            src={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/flour-in-bowl-bread-flour-vs-all-purpose-flour-1611940896.jpg?crop=0.631xw:1.00xh;0.311xw,0&resize=640:*'}
                                            alt={'Product 1'}
                                            width={100}
                                            height={100}
                                            className={styles.productImage}
                                        />
                                    </Col>
                                    <Col>
                                        <p className={styles.productName}>Flour</p>
                                    </Col>
                                    <Col className="text-end">
                                        <p>Rp24.000</p>
                                    </Col>
                                </Row>
                            </div>
                            <hr className={styles.divider} />
                            <div className={styles.price}>
                                <Row>
                                    <Col>
                                        <p>Subtotal</p>
                                    </Col>
                                    <Col className="text-end">
                                        <p>Rp89.000</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p>Ongkos Kirim</p>
                                    </Col>
                                    <Col className="text-end">
                                        <p>Rp10.000</p>
                                    </Col>
                                </Row>
                            </div>
                            <hr className={styles.divider} />
                            <div className={styles.totalPrice}>
                                <Row>
                                    <Col>
                                        <p>Total</p>
                                    </Col>
                                    <Col className="text-end">
                                        <p>Rp99.000</p>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.placeOrder}>
                                <button className={styles.button}>Place Order</button>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}