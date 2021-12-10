import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {

    return (
        <div className="bg-white">
            <div className="container px-6 py-16 mx-auto">
                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="font-semibold leading-tight">
                                Gatsby Starter Blog ModJS
                            </h1>
                            <p className="mt-2 text-base md:text-lg lg:text-xl">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <StaticImage src="../images/code-testing.jpg" alt="Gatsby Starter Blog" quality={100} className="w-full lg:max-w-2xl" />
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Hero;