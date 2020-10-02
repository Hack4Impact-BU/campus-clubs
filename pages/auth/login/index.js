import { signIn } from "next-auth/client"
import Head from "next/head"
import Logo from "../../../components/Logo"
import styles from "./login.module.scss"

export default function LoginView() {
    return (
        <>
        <Head>
            <title> Login | CampusClubs </title>
        </Head>
        <div className={styles.customContainer}>
            <div className={styles.loginForm}>
                <Logo/>
                <p> Login with your username and password </p>
                <div style={{marginTop: "1rem"}}>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="email" placeholder="Email/Username"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="password" placeholder="Password"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <button onClick={() => signIn('credentials', {username: "md", password: "password"})} className="button is-success is-fullwidth"> Sign In </button>
            </div>
        </div>
        </div>
        </>
    )
}