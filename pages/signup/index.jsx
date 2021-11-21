import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/NavigationBar";
import TextField from "../../components/TextField";
import styles from "../../styles/Signup.module.css";
import useForm from "../../hooks/useForm";
import { useRouter } from "next/dist/client/router";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useForm("");
  const [email, setEmail] = useForm("");
  const [username, setUsername] = useForm("");
  const [password, setPassword] = useForm("");
  const [phone, setPhone] = useForm("");
  const [address, setAddress] = useForm("");
  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      name: name,
      email: email,
      password: password,
      address: address,
      phone_no: phone,
    };
    const error = false;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}register`, {
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
      router.push("/");
    }
  };
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>Create an Account</title>
        </Head>
        <h1 className={styles.title}>Create an Account</h1>
        <form className={styles.formField} onSubmit={handleRegister}>
          <TextField
            defaultValue={name}
            onChange={setName}
            label={"Name"}
            placeholder={"Type your name"}
            required={true}
          />
          <TextField
            defaultValue={email}
            onChange={setEmail}
            label={"Email"}
            placeholder={"Type your email"}
            required={true}
          />
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
            label={"Password"}
            placeholder={"Type your password"}
            required={true}
            type={"password"}
          />
          <TextField
            defaultValue={phone}
            onChange={setPhone}
            label={"Phone Number"}
            placeholder={"Type your phone number"}
            required={true}
          />
          <TextField
            defaultValue={address}
            onChange={setAddress}
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
        </form>
      </div>
    </div>
  );
}
