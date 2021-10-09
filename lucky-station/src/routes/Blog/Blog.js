import React from 'react';
import './Blog.scss';
import luckyImg from '../../assets/images/Home/lucky_no_bg.png';

const Blog = ({paragraph,date}) => {
    return (
        <div className="content-wrap-blog">
            <small id="date-blog">{date}</small>
            <p id="main-content-blog">{paragraph}</p>
            <div className="blog-images-container border d-flex flex-column align-items-center">
            <img src={luckyImg} className="w-50"></img>
            </div>

        </div>
    )
}

export default Blog;
