import Layout from "../components/Layout"
import Image from "next/image"
import { signIn, signOut, useSession,providers } from "next-auth/client";

export default function Registration({ Providers }) {
    const [session] = useSession()
    return (
        <Layout title="会員登録">
            <div className="flex">
                <div className="flex-auto px-5">
                    <div className="bg-white text-center shadow-xl p-8 w-96 rounded border">
                        <div className="mb-4">
                            {!session && <>
                                Not signed in <br />
                                <button onClick={() => signIn("github")} className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Sign in with GitHub
                                </button>
                                <button onClick={() => signIn("google")} className="bg-gray-50 rounded border hover:bg-gray-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Sign in with Google
                                </button>
                                <button onClick={() => signIn("twitter")} className="bg-blue-400 rounded border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Sign in with Twitter
                                </button>
                                {/*Object.values(Providers).map((provider) => (
                                    <div key={provider.name}>
                                        {(() => {
                                        if (provider.name.toLowerCase() == "github") {
                                            return (<button onClick={() => signIn(provider.id)} className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                                Sign in with {provider.name}
                                            </button>)
                                        }
                                        else if (provider.name.toLowerCase() == "google") {
                                            return (<button onClick={() => signIn(provider.id)} className="bg-gray-50 rounded border hover:bg-gray-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                                Sign in with {provider.name}
                                            </button>)
                                        }
                                            
                                        else if (provider.name.toLowerCase() == "twitter") {
                                            return (<button onClick={() => signIn(provider.id)} className="bg-blue-400 rounded border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                                Sign in with {provider.name}
                                            </button>)
                                        }
                                        else {
                                            return <span>Hello</span>
                                        }
                                        })()}
                                    </div>
                                    ))*/}
                            </>}
                            {session && <>
                                Signed in as {session.user.name} <br />
                                { console.dir(session) }
                            <button onClick={signOut}>Sign out</button>
                            </>}
                        </div>
                        <p className="text-center text-gray-500 text-xs">
                            {/*&copy;2020 Acme Corp. All rights reserved.*/}
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps(context) {
    const Providers = await providers(context);
    return {
      props: { Providers },
    }
  }