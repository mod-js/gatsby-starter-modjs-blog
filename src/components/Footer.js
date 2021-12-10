import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Subscribe from "./Subscribe";

const Footer = () => {

    const data = useStaticQuery(graphql`
        query footerTitles {
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

    const nodes = data.pageLinks.nodes;
    const siteData = data.siteInfo.siteMetadata;

    return (
        <footer className="flex justify-center px-4 text-gray-800 bg-gray-100 mt-6">
            <div className="container py-6">
                <Subscribe />
                <hr />
                <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
                    <div className="text-xl font-bold">
                        &#169; {siteData.siteName} {(new Date().getFullYear())}
                    </div>
                    <div className="flex mt-4 md:m-0">
                        <div className="-mx-4">
                            <Link to="/" className="px-4 text-sm font-medium text-gray-800 hover:text-gray-700">Home</Link>
                            <Link to="/blog/" className="px-4 text-sm font-medium text-gray-800 hover:text-gray-700">Blog</Link>
                            {nodes.map((node, i) => {
                                const frontmatter = node.frontmatter;
                                return (
                                    <Link to={frontmatter.slug} key={i} className="px-4 text-sm font-medium text-gray-800 hover:text-gray-700">{frontmatter.title}</Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;