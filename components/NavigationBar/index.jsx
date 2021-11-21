import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Image from "next/image";
import styles from "./NavigationBar.module.css";
import Logo from "../../assets/images/Logo.svg";
import Cart from "../../assets/images/Cart.svg";
import Link from "next/link";
import useUser from "../../hooks/useUser";
import Cookies from "js-cookie";
import { useRouter } from "next/dist/client/router";

export default function NavigationBar() {
  const user = useUser();
  const router = useRouter();
  const handleLogout = () => {
    Cookies.remove("user");
    router.push("/");
  };
  return (
    <Navbar collapseOnSelect expand="md" className={styles.navbar}>
      <Container>
        <Link href="/">
          <Navbar.Brand href="/">
            <Image src={Logo} alt="BeliGrosir" height={35}></Image>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-center">
            {!user ? (
              <>
                <Link href="/signup">
                  <a className={`${styles.button} ${styles.signUpButton}`}>
                    Sign Up
                  </a>
                </Link>
                <Link href="/login">
                  <a className={`${styles.button} ${styles.loginButton}`}>
                    Login
                  </a>
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className={`${styles.button} ${styles.loginButton}`}
              >
                Logout
              </button>
            )}
            <Link href="/cart">
              <a className={styles.cart}>
                <Image src={Cart} alt="Cart" height={35}></Image>
              </a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
