
import Image from 'next/image'
import Layout from '../components/Layout'
import { signIn, signOut, useSession } from 'next-auth/client'
export default function Home() {
  const [ session, loading ] = useSession()
  return (
      <Layout title="Home">
      <p className="text-4xl">Welcome to Nextjs</p>
      { console.dir(session) }
      </Layout>
  )
}
