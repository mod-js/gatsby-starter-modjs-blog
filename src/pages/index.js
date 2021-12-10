import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import BlogPosts from "../components/BlogPosts";
import Features from "../components/Features";
import CallOut from "../components/CallOut";

const IndexPage = ({ location }) => {

  return (
    <Layout location={location} title="" description="">
      <Hero />
      <Features />
      <div className="flex justify-around py-6"><h2>Latest Blog Posts</h2></div>
      <BlogPosts numPosts={2} />
      <CallOut
        title="Build with a Gatsby Starter"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem delectus repudiandae accusantium odio minima eligendi beatae sed numquam nisi aliquam, maxime eum, est amet. Eveniet voluptatum commodi veniam cupiditate?"
        buttonText="Find Out Why?"
        link="/blog/"
      />
    </Layout>
  )
};

export default IndexPage;