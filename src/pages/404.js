import React from "react";
import Layout from "../components/Layout";

const ErrorPage = ({ location }) => {
    return (
        <Layout location={location} title="Page Not Found" description="404 page cannot be found">
            <div>
                <h1>404 Page Not Found!</h1>
            </div>
        </Layout>
    )
};

export default ErrorPage;