import { style } from 'dom-helpers'
import Head from 'next/head'
import Link from 'next/link'
import TextField from '../../components/TextField'

import styles from '../../styles/Login.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Log In</title>
            </Head>
            <h1 className={styles.title}>Log In</h1>
            <div className={styles.formField}>
                <TextField
                    label={"Username"}
                    placeholder={"Type your username"}
                    required={true}
                />
                <TextField
                    label={"Password"}
                    placeholder={"Type your password"}
                    required={true}
                />
                <button className={styles.button}>Log in</button>
                <div className={styles.signup}>
                    <p className={styles.instruction}>Don't have an account yet?</p>
                    <Link href="/signup">
                        <a className={styles.signupButton}>Sign Up</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}