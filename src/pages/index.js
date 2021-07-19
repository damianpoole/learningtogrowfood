import * as React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Header from '../components/header'

// markup
const IndexPage = ({ data }) => {
    return (
        <main>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Header></Header>

            <div className="px-32 py-10">
                <h2 className="text-lg font-semibold font-mono uppercase text-yellow-900">
                    Latest Posts
                </h2>

                {data.allMdx.nodes.map((post, idx) => {
                    return (
                        <article key={idx} className="mt-6">
                            <a href={post.slug}>
                                <header>
                                    <h3 className="text-xl font-bold font-sans">
                                        {post.frontmatter.title}
                                    </h3>
                                </header>

                                <p className="my-4">{post.excerpt}</p>

                                <div className="font-bold">Read more</div>
                            </a>
                        </article>
                    )
                })}
            </div>
        </main>
    )
}

export const query = graphql`
    query HomePageQuery {
        allMdx(limit: 5, sort: { fields: frontmatter___date }) {
            nodes {
                frontmatter {
                    title
                }
                excerpt
                slug
            }
        }
    }
`

export default IndexPage
