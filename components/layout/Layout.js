import Header from "./Header";

export default function Layout({children}) {
    return (
        <>
            <Header/>
            <main className="container main-container">
                {children}
            </main>
        </>
    )
}