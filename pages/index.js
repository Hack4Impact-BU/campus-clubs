import {useSession } from 'next-auth/client'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [ session, loading ] = useSession()
  return (
    <div>
      <Head>
        <title>CampusClubs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        session ? <p> You are signed in </p> : <p> Please sign in </p>
      }
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
