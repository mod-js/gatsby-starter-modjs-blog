import React from "react";
import Button from "./Button";
import { useStaticQuery, graphql } from "gatsby";

const Contact = () => {

    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        streetAddress
                        telephone
                        email
                    }
                }
            }
        `
    );

    const regex = /^[^a-zA-Z0-9]*|[^a-zA-Z0-9\d\s\-_]|[^a-zA-Z0-9\d_]*$/g;
    const addressUri = "https://www.google.com/maps/search/?api=1&query=" + site.siteMetadata.streetAddress.replace(regex, '').trim();
    const addressEncode = encodeURI(addressUri);

    return (
        
        <section className="w-full px-6 py-4 my-6 mx-auto bg-white rounded-md shadow-lg">
            <h2 className="text-3xl font-semibold text-center">Get in touch</h2>
            <p className="mt-3 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
                <a href={addressEncode} target="_blank" rel="noreferrer" className="flex flex-col items-center px-4 py-3 rounded-md hover:bg-gray-200">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="mt-2">{site.siteMetadata.streetAddress}</span>
                </a>
                <a href={"mailto:" + site.siteMetadata.telephone} className="flex flex-col items-center px-4 py-3  rounded-md  hover:bg-gray-200">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>

                    <span className="mt-2">{site.siteMetadata.telephone}</span>
                </a>
                <a href={"mailto:" + site.siteMetadata.email} className="flex flex-col items-center px-4 py-3 rounded-md hover:bg-gray-200">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="mt-2">{site.siteMetadata.email}</span>
                </a>
            </div>

            <form name="contact" method="post" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div className="mt-6 ">
                    <div className="items-center -mx-2 md:flex">
                        <div className="w-full mx-2">
                            <label className="block mb-2 text-sm font-medium">
                                Name
                                <input name="name" id="name" type="text" required className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:border-purple-400 focus:outline-none focus:ring" type="text" />
                            </label>
                        </div>
                        <div className="w-full mx-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm font-medium">
                                E-mail
                                <input name="email" id="email" type="email" required className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:border-purple-400 focus:outline-none focus:ring" type="email" />
                            </label>
                        </div>
                    </div>
                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm font-medium">
                            Message
                            <textarea name="message" id="message" required className="block w-full h-40 px-4 py-2 bg-white border border-gray-300 rounded-md focus:border-purple-400 focus:outline-none focus:ring"></textarea>
                        </label>
                    </div>

                    <div className="flex justify-center mt-6">
                        <Button type="submit">Send Message</Button>
                    </div>
                </div>
            </form>
        </section>
        
    )
};

export default Contact;
