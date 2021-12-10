module.exports = {
    siteMetadata: {
        title: "ModJS",
        defaultPageTitle: "Gatsby Starter Blog",
        description: "A Starter Blog developed with Gatsby",
        siteName: "ModJS",
        streetAddress: "999, Old St, London",
        telephone: "0121 123456",
        email: "hello@example.com",
        social: {
            twitter: "ModJS"
        }
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-content`,
                path: `${__dirname}/content`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gatsby ModJS Starter Blog`,
                short_name: `ModJS`,
                description: `A Gatsby Starter Blog by ModJS`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#4c1d95`,
                lang: `en`,
                display: `standalone`,
                icon: `src/images/icon.png`,
                cache_busting_mode: 'none',
                crossOrigin: `use-credentials`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        'gatsby-plugin-postcss',
        `gatsby-plugin-netlify-cms`,
    ],
}