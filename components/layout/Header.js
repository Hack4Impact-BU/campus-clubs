import Head from "next/head";
import Navigation from "./navigation/Navigation";

export default function Header() {
    return (
        <>
        <Head>
          <title>CampusClubs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation/>
        </>
    )
}