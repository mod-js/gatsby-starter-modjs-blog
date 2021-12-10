import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Contact from "../components/Contact";
import BlogPosts from "../components/BlogPosts";

const PageTemplate = ({ data, location }) => {

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const image = getImage(frontmatter.coverImage);

  const isHomeLocation = location.pathname.split('/')[1] === "";
  const isContactLocation = location.pathname.split('/')[1] === "contact";

  return (
    <Layout location={location} title={frontmatter.title} description={frontmatter.description}>
      <div className="flex flex-col lg:flex-row items-start">
        <div className={!isHomeLocation ? "w-full lg:w-2/3" : "w-full"}>
          <GatsbyImage image={image} alt={frontmatter.coverImageAlt} />
          <div dangerouslySetInnerHTML={{ __html: html }} />
          {isContactLocation && (<Contact />)}
        </div>
        <div className={!isHomeLocation ? "w-full lg:w-1/3 lg:top-24 lg:sticky" : "hidden"}>
            <div className="text-2xl mt-16 text-center">More from the blog</div>
            <BlogPosts numPosts={2} />
          {/* </div> */}
        </div>
      </div>
    </Layout>
  )
};

export default PageTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }, fileAbsolutePath: {regex: "/^((?!\/settings\/).)*$/"}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
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
    }
  }
`;