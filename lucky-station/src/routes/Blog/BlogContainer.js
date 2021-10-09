import React from 'react';
import Blog from './Blog';
import luckyImg from '../../assets/images/Blog/2021-08-07/20210807_170135.jpg';
import luckyImg2 from '../../assets/images/Blog/2021-08-07/20210807_170132.jpg';



const BlogContainer = () => {
    return (
        <section id="section-1-blog" className="grid-blog">
            <Blog 
            date={'Saturday,August 7, 2021'}
            paragraph={'Me at Clayhill Park near where I live . My dad put me on the swing and at first I really enjoyed it but then we he started swinging me I started to get dizzy.'}   
            images={[luckyImg,luckyImg2]}
            />
        </section>
    )
}

export default BlogContainer;
