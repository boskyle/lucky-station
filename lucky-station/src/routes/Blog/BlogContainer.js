import React from 'react';
import Blog from './Blog';


const BlogContainer = () => {
    return (
        <section id="section-1-blog" className="grid-blog">
            <Blog 
            date={'Saturday,October 9, 2021'}
            paragraph={'First entry. From the beginning of time I have fought against your innocence. I am puttng nonsense here bloop loop'}   
            />
        </section>
    )
}

export default BlogContainer;
