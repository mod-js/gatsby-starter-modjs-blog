import React from "react";
import Footer from "./Footer";
import Seo from "./Seo";
import Header from "./Header";

const Layout = ({ children, location, title, description }) => {
    return (
        <>
            <Seo title={title} description={description} />
            <Header location={location} />
            <div className="container mx-auto mt-24 mb-16">
                <div className="px-2">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Layout;