import Layout from "../components/Layout"
import Image from "next/image"
import { signIn, signOut, useSession,providers } from "next-auth/client";

export default function Signin({ Providers }) {
    const [session, loading] = useSession()
    return (
        <Layout title="サインイン">
            <div className="flex">
                <div className="flex-auto px-5">
                    <form className="bg-white text-center shadow-xl p-8 w-96 rounded border">
                        <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            ユーザー名
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="ユーザー名" />
                        </div>
                        <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            メールアドレス
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="email" />
                        </div>
                        <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            パスワード
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic hidden">Please choose a password.</p>
                        </div>
                        <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                        </div>
                        <p className="text-center text-gray-500 text-xs">
                            {/*&copy;2020 Acme Corp. All rights reserved.*/}
                        </p>
                    </form>
                </div>
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
                                <button
                                onClick={() =>
                                    signOut({
                                    callbackUrl: `${window.location.origin}`
                                    })
                                }
                                >Sign out</button>
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