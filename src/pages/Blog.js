import React from 'react';

const Blog = props => {
    let blogPost = props.posts.map((p,i) => {
        return (
            <div>
                <h2 key={i}>{p.title}</h2>
                <p>{p.content}</p>
            </div>
        )
    })
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {blogPost}
            </ul>
        </div>
    )
}

export default Blog