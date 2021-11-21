import Head from 'next/head'
import Link from 'next/link'
import Info from '../../assets/images/Info.svg'
import Navbar from "../../components/NavigationBar";

import { Container, Row, Col } from 'react-bootstrap'

import styles from '../../styles/pages/Cart.module.css'

export default function Cart() {
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <Head>
                    <title>Your Cart</title>
                </Head>
                <h1 className={styles.title}>Your Cart</h1>
                <Container>
                    <Row className={`text-center ${styles.headerTable}`}>
                        <Col sm={5} md={5} lg={5} xl={5}>
                            <p>Product</p>
                        </Col>
                        <Col>
                            <p>Quantity</p>
                        </Col>
                        <Col>
                            <p>Total</p>
                        </Col>
                    </Row>
                    <hr className={styles.divider} />
                    <Row className="d-flex align-items-center justify-content-center text-center">
                        <Col sm={5} md={5} lg={5} xl={5}>
                            <div className={styles.product}>
                                <img
                                    src={'https://media.npr.org/assets/img/2019/09/27/nuts-1_custom-61cfca772f4f991e157977ffe42febcb8c23d7dc-s1100-c50.jpg'}
                                    alt={'Product 1'}
                                    width={150}
                                    height={150}
                                    className={styles.productImage}
                                />
                                <div className={styles.productDetail}>
                                    <h3>Almond</h3>
                                    <p>Rp65.000/kg</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <input type="number" min="1" value="1" />
                        </Col>
                        <Col>
                            <p className={styles.totalPriceProduct}>Rp65.000</p>
                        </Col>
                    </Row>
                    <hr className={styles.divider} />
                    <Row>
                        <Col>
                            <div>
                                <p>Subtotal</p>
                                <p>Rp89.000</p>
                            </div>
                            <div>
                                <img
                                    src={Info}
                                    alt={'Info'}
                                    width={25}
                                    height={25}
                                    className={styles.productImage}
                                />
                                <p>Shipping cost will be calculated at checkout</p>
                            </div>
                            <div>
                                <Link href="/">
                                    <button>Continue to shopping</button>
                                </Link>
                                <Link href="/checkout">
                                    <button>Checkout</button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}
