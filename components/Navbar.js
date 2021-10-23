import Head from "next/head"
import Link from "next/link"
import Image from "next/dist/client/image";

export default function Navbar({ children }) {
    return (
            <div className="fs-header">
                <div className="fs-hamburger">
                    <input type="checkbox" name="navToggle" id="navToggle" className="fs-nav-toggle fs-nav-leftin black50" />
                    <label for="navToggle" className="fs-btn-burger">
                        <span className="fs-hamburger-icon"></span>
                    </label>
                
                    <div className="fs-navi fs-grid bg-ghostwhite m-grid-col-2">
                        <div></div>
                        <div className="fs-grid m-grid-col-4 fs-nav-menu r-gap ac-center jc-end">
                            <div className="text-black fs-center">
                                <Link href="/">
                                        <a  className="fs-d-block fs-tlink-center">Home</a>
                                </Link>
                            </div>
                            <div className="text-black fs-center">
                                <Link href="/blog-page">
                                        <a  className="fs-d-block fs-tlink-center">Blog</a>
                                </Link>
                            </div>
                            <div className="text-black fs-center">
                                <Link href="/contact-page">
                                        <a  className="fs-d-block fs-tlink-center">Contact</a>
                                </Link>
                            </div>
                            <div className="text-black fs-center">
                                <Link href="/signin">
                                        <a  className="fs-d-block fs-tlink-center">Sign In</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
}