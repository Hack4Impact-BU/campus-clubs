import Head from "next/head"
import Logo from "../../../components/Logo"
import { useRouter } from "next/router";
import { csrfToken } from "next-auth/client"
import styles from "./signup.module.scss"
import Header from '../../../components/Layout/Header';



export default function SignupView({csrfToken}) {
    const router = useRouter();
    return (
        <>
        <Header />
        <Head>
            <title> Signup | CampusClubs </title>
        </Head>
        <form method="post" action="/api/auth/callback/credentials" className={styles.customContainer}>
            <div className={styles.signupForm}>
                <a href="/"><Logo/></a>
                <p> Signup with your username and password </p>
                {router.query.error && <p style={{color: "red"}}> {router.query.error} </p>}
                <div style={{marginTop: "1rem"}}>
                    <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
                <div className="field">
                    <p className="control has-icons-left">
                        <input 
                        className="input" 
                        type="text" 
                        placeholder="Username"
                        name="username"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input 
                        className="input" 
                        type="email" 
                        placeholder="Email" 
                        name="email"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>                
                <div className="field">
                    <p className="control has-icons-left">
                        <input 
                        className="input" 
                        type="password" 
                        placeholder="Password" 
                        name="password"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>                
                <div className="field">
                    <p className="control has-icons-left">
                        <input 
                        className="input" 
                        type="password" 
                        placeholder="Confirm Password" 
                        name="confirmPassword"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <button type="submit"> Sign Up </button>
            </div>
        </div>
        </form>
        </>
    )
}

SignupView.getInitialProps = async (context) => {
    return {
        csrfToken: await csrfToken(context)
    }
} 