import Header from "../../components/layout/Header";
import styles from "./landing.module.scss";

export default function Landing() {
    return (
        <>
        <Header/>
        <main className="container main-container">
            <div className={styles.container}>
                <h1> All-in-One Community Engagement Platform</h1>
                <p> CampusClubs gives you what CampusGroups never could </p>
            </div>
        </main>
        </>
    )
}