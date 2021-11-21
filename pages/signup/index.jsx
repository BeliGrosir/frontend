import Head from 'next/head'
import Link from 'next/link'
import TextField from '../../components/TextField'

import styles from '../../styles/Signup.module.css'

export default function Signup() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create an Account</title>
            </Head>
            <h1 className={styles.title}>Create an Account</h1>
            <div className={styles.formField}>
                <TextField
                    label={"Name"}
                    placeholder={"Type your name"}
                    required={true}
                />
                <TextField
                    label={"Email"}
                    placeholder={"Type your email"}
                    required={true}
                />
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
                <TextField
                    label={"Phone Number"}
                    placeholder={"Type your phone number"}
                    required={true}
                />
                <TextField
                    label={"Address"}
                    placeholder={"Type your address"}
                    required={true}
                />
                <button className={styles.button}>Sign Up</button>
                <div className={styles.login}>
                    <p className={styles.instruction}>Already have an account yet?</p>
                    <Link href="/login">
                        <a className={styles.loginButton}>Log In</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}