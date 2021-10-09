import React from 'react';
import './Blog.scss';


const Blog = ({paragraph,date,images}) => {
    return (
        <div className="content-wrap-blog">

            <div className="blog-main-container">
            <small id="date-blog">{date}</small>
            <p id="main-content-blog">{paragraph}</p>
            </div>
        
            <div className="blog-images-container">
                <div>
                <img src={images[0]}></img>
                </div>
                <div>
                <img src={images[1]}></img>
                </div>
                <div>
                <img src={images[1]}></img>
                </div>
                <div>
                <img src={images[1]}></img>
                </div>
                <div>
                <img src={images[1]}></img>
                </div>
            </div>

        </div>
    )
}

export default Blog;
