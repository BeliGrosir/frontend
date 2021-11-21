import Head from "next/head";
import Link from "next/link";
import useForm from "../../hooks/useForm";
import Navbar from '../../components/NavigationBar';
import TextField from "../../components/TextField";
import styles from "../../styles/Login.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/dist/client/router";

export default function Login() {
  const [username, setUsername] = useForm("");
  const [password, setPassword] = useForm("");
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    const error = false;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          throw new Error("Error");
        }
      })
      .catch((e) => {
        error = true;
        console.log(e);
      });
    if (!error) {
      let result = await res.json();
      Cookies.set("user", JSON.stringify(result));
      router.push("/");
    }
  };
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>Log In</title>
        </Head>
        <h1 className={styles.title}>Log In</h1>
        <form className={styles.formField} onSubmit={handleLogin}>
          <TextField
            defaultValue={username}
            onChange={setUsername}
            label={"Username"}
            placeholder={"Type your username"}
            required={true}
          />
          <TextField
            defaultValue={password}
            onChange={setPassword}
            type={"password"}
            label={"Password"}
            placeholder={"Type your password"}
            required={true}
          />
          <button className={styles.button}>
            Log in
          </button>
          <div className={styles.signup}>
            <p className={styles.instruction}>Don&apos;t have an account yet?</p>
            <Link href="/signup">
              <a className={styles.signupButton}>Sign Up</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
