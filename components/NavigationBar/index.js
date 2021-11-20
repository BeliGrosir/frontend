import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Image from 'next/image'
import styles from './NavigationBar.module.css';
import Logo from '../../assets/images/Logo.svg';
import Cart from '../../assets/images/Cart.svg';
import Link from 'next/link'

export default function NavigationBar() {
    return (
        <div className={styles}>
            <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
                <Container>
                    <Navbar.Brand href="#home">
                        <Image
                            src={Logo}
                            alt="BeliGrosir"
                            width={500}>
                        </Image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Link href="/">
                                <a className={`${styles.button} ${styles.signUpButton}`}>
                                    Sign Up
                                </a>
                            </Link>
                            <Link href="/">
                                <a className={`${styles.button} ${styles.loginButton}`}>
                                    Login
                                </a>
                            </Link>
                            <Link href="/">
                                <a className={styles.cart}>
                                    <Image
                                        src={Cart}
                                        alt="Cart"
                                        height={35}>
                                    </Image>
                                </a>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div >
    )
}