module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'Learning to grow food',
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                extensions: ['.mdx', '.md'],
                defaultLayouts: {
                    default: require.resolve('./src/components/blog-layout.js'),
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: ['G-3FNCVME9JX'],
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages/`,
            },
            __key: 'pages',
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/posts`,
                name: `blog`,
            },
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/posts`,
            },
        },

        'gatsby-plugin-postcss',
    ],
}
