import * as React from 'react'
import Header from '../components/header'

const layout = ({ children, pageContext }) => {
    return (
        <>
            <Header></Header>
            <div className="px-4 md:px-28 lg:px-44 mb-16">
                <h2 className="font-mono text-2xl font-bold mt-20 mb-6">
                    {pageContext.frontmatter.title}
                </h2>
                <div className="markdown">{children}</div>
            </div>
        </>
    )
}

export default layout
