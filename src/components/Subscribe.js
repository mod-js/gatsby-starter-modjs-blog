import React from "react";
import Button from "./Button";

const Subscribe = () => {
    return (
        <div>
            <h1 className="text-lg font-bold text-center lg:text-2xl">
                Sign up to our newsletter and never miss <br /> out on new tips, tutorials, and more.
            </h1>
            <div className="flex justify-center my-6">
                <div className="bg-white border rounded-md focus-within:ring focus-within:border-blue-500">
                    <div className="flex flex-wrap justify-between md:flex-row">
                        <form name="subscribe" method="post" data-netlify="true">
                            <input type="hidden" name="form-name" value="subscribe" />
                            <input name="email" id="email" type="email" required className="p-2 m-1 text-sm text-gray-700 appearance-none focus:outline-none focus:placeholder-transparent" placeholder="Enter your email" aria-label="Enter your email" />
                            <Button type="submit">Subscribe</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Subscribe;
