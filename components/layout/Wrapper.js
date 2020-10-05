import { useSession } from "next-auth/client";
import Sidebar from "./Sidebar/Sidebar";

// Use this Wrapper component for all protected routes.
export default function Wrapper({children}) {
    const [ session, loading] = useSession();

    if (typeof window !== "undefined" && loading) return null;

    if (!session) return <p> Access denied. Please login first. </p>

    return(
        <main className="container main-container">
            <Sidebar/>
            {children}
        </main>
    )
}