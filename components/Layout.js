import Head from "next/head"
import Link from "next/link"
import Image from "next/dist/client/image";
import Navbar from "./Navbar";

export default function Layout({ children, title = "HP by Nextjs" }) {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
            <Head>
                <title>{title}</title>
                <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
            </Head>
            <header>
                <Navbar/>
                {/* <nav className="bg-gray-800 w-screen">
                    <div className="flex items-center pl-8 h-14">
                        <div className="flex space-x-4">
                            <Link href="/">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    Home
                                </a>
                            </Link>
                            <Link href="/blog-page">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    Blog
                                </a>
                            </Link>
                            <Link href="/contact-page">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    Contact
                                </a>
                            </Link>
                            <Link href="/signin">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    Sign In
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav> */}
            </header>
            <main className="flex flex-1 justify-center items-center flex-col fs-wscreen bg-gray-50">
                {children}
            </main>
            <footer className="w-full h-12 flex justify-center items-center border-t">
                <a
                    className="flex items-center"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <span className="h-4 ml-2">
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
                </a>
            </footer>
        </div>
    );
}