import Link from "next/link";

export default function Navigation() {
    return(
        <nav className="navbar navigation" role="navigation" aria-label="main navigation">
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
            <div id="MainNavbar" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link href="/auth/signup">
                                <a class="button is-primary">
                                    <strong> Sign Up </strong>
                                </a>
                            </Link>
                            <Link href="/auth/login">
                                <a class="button is-light">
                                    Log In
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}