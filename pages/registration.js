import Layout from "../components/Layout"
import Image from "next/image"
import { signIn, signOut, useSession,providers } from "next-auth/client";

export default function Registration({ Providers }) {
    const [session] = useSession()
    return (
        <Layout title="会員登録">
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name"/>
                </div>
            </form>
        </Layout>
    )
}

export async function getStaticProps(context) {
    const Providers = await providers(context);
    return {
      props: { Providers },
    }
  }