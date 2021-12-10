import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPosts = ({ numPosts = 20 }) => {

    const data = useStaticQuery(graphql`
        query BlogPosts {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(\/blog)\/.*[.]md$/"}}
            sort: {fields: frontmatter___date, order: DESC}
            limit: 20
            ) {
                nodes {
                    frontmatter {
                        slug
                        title
                        date(formatString: "DD MMMM, YYYY")
                        coverImage {
                            childImageSharp {
                                gatsbyImageData(
                                breakpoints: [750, 1080, 1366, 1536]
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                        coverImageAlt
                    }
                    excerpt
                }
            }
        }
    `);

    return (
        <div className="flex flex-row flex-wrap justify-center">
            {data.allMarkdownRemark.nodes.slice(0, numPosts).map((node, i) => {
                const frontmatter = node.frontmatter;
                const image = getImage(frontmatter.coverImage)
                return (
                    <div className="overflow-hidden bg-white rounded-lg shadow-md max-w-md m-4 xl:max-w-prose" key={i}>
                        <GatsbyImage className="w-full" image={image} alt={frontmatter.coverImageAlt} />
                        <div className="p-6" key={i}>
                            <div>
                                <Link to={frontmatter.slug} className="block mt-2 text-2xl font-semibold">{frontmatter.title}</Link>
                                <p className="mt-2">{node.excerpt}</p>
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center">
                                    <span className="mx-1 text-xs">{frontmatter.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default BlogPosts;
