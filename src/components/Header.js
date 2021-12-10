import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import logo from "../images/logo.svg";

const Header = ({ location }) => {

    const data = useStaticQuery(graphql`
        query headerTitles {
            pageLinks:allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(\/pages)\/.*[.]md$/"}}) {
                nodes {
                    frontmatter {
                        slug
                        title
                    }
                }
            }
            siteInfo:site {
                siteMetadata {
                    siteName
                }
            }
        }
    `);

    const isHomeLocation = location.pathname.split('/')[1] === "";
    const nodes = data.pageLinks.nodes;
    const siteData = data.siteInfo.siteMetadata;

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="fixed top-0 z-50 w-full bg-white">
                <div className="container mx-auto">
                    <header className="px-2 py-4">
                        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <Link to="/">
                                        <span className="sr-only">{siteData.siteName}</span>
                                        <img className="h-8 w-auto sm:h-10" src={logo} alt="Site Logo" />
                                    </Link>
                                    <div className="-mr-2 flex items-center md:hidden pr-2">
                                        <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-purple-900 hover:text-pink-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                            <span className="sr-only">Open main menu</span>
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                <Link to="/" className={isHomeLocation? "hidden" : "font-medium text-gray-500 hover:text-gray-900"}>Home</Link>
                                <Link to="/blog/" className="font-medium text-gray-500 hover:text-gray-900">Blog</Link>
                                {nodes.map((node, i) => {
                                    const frontmatter = node.frontmatter;
                                    return (
                                        <Link to={frontmatter.slug} key={i} className="font-medium text-gray-500 hover:text-gray-900">{frontmatter.title}</Link>
                                    )
                                })}
                                <a href="/admin/" className="font-medium">Log in</a>
                            </div>
                        </nav>
                    </header>

                    <div className={menuOpen ? "absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" : "hidden absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"}>
                        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="px-5 pt-4 flex items-center justify-between">
                                <div>
                                    <img className="h-8 w-auto sm:h-10" src={logo} alt="Site Logo" />
                                </div>
                                <div className="-mr-2">
                                    <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-purple-900 hover:text-pink-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close main menu</span>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Link to="/" className={isHomeLocation? "hidden" : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"}>Home</Link>
                                <Link to="/blog/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Blog</Link>
                                {nodes.map((node, i) => {
                                    const frontmatter = node.frontmatter;
                                    return (
                                        <Link to={frontmatter.slug} key={i} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{frontmatter.title}</Link>
                                    )
                                })}
                            </div>
                            <a href="/admin/" className="block w-full px-5 py-3 text-center font-medium bg-gray-50 hover:bg-gray-100">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
};

export default Header;