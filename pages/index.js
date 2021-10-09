
import Image from 'next/image'
import Layout from '../components/Layout'
import { useSession } from "next-auth/client"
export default function Home() {
  const [session] = useSession()
  return (
    <Layout title="Home">
      { console.dir(session) }
        <p className="text-4xl">Welcome to Nextjs</p>
      </Layout>
  )
}
