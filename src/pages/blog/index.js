import React from "react";
import BlogPosts from "../../components/BlogPosts";
import Layout from "../../components/Layout";

const BlogPage = ({ location }) => {

    return (
        <Layout location={location} title="Blog" description="Blog Posts">
            <div>
                <h1 className="text-center">Latest Blog Posts</h1>
                <p className="py-9 px-0 md:px-9 lg:px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium totam voluptatum saepe culpa dolor enim voluptatem assumenda. Consequuntur vitae maxime eligendi ut. Itaque numquam, necessitatibus eum a rem officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium totam voluptatum saepe culpa dolor enim voluptatem assumenda. Consequuntur vitae maxime eligendi ut. Itaque numquam, necessitatibus eum a rem officia?</p>
            </div>
            <BlogPosts />
        </Layout>
    )
};

export default BlogPage;