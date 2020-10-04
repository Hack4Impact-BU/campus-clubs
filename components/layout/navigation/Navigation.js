import { useSession } from "next-auth/client";
import LoggedInNav from "./LoggedInNav/LoggedInNav";
import LoggedOutNav from "./LoggedOutNav/LoggedOutNav";

export default function Navigation() {
    const [session, useLoading] = useSession();
    return(
        <nav className="navbar navigation" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <img src="logo.png" width="112" height="28"></img>
                    </a>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="MainNavbar">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                {
                    session ? LoggedInNav() : LoggedOutNav()
                }
            </div>
        </nav>
    )
}