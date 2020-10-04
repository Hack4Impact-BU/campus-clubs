import { useSession } from 'next-auth/client'
import Dashboard from '../components/home/dashboard';
import Landing from '../components/home/landing';
import Layout from '../components/layout/Layout'

export default function Home(props) {
  const [session, isLoading] = useSession();

    return (
      <Layout>
        {
          !session ? <Landing/> : <Dashboard/>
        }
      </Layout>
    )
}