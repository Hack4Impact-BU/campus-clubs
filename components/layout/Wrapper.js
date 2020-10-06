import { useSession } from "next-auth/client";
import Sidebar from "./Sidebar/Sidebar";
import PropTypes from 'prop-types';
import Header from "./Header";

// Use this Wrapper component for all protected routes.
export default function Wrapper({component, children}) {
    const [ session, loading] = useSession();

    if (typeof window !== "undefined" && loading) return null;

    if (!session) return <p> Access denied. Please login first. </p>

    return(
        <>
        <Header/>
        <div className="container-fluid" style={{display:"flex"}}>
        <Sidebar component={component}/>
        <main className="container main-container" style={{paddingLeft: "1rem"}}>
            {children}
        </main>
        </div>
        </>
    )
}


//this doesnt seem to work
Wrapper.propTypes = {
    component: PropTypes.string.isRequired
}