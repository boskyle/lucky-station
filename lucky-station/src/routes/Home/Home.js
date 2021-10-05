import React from 'react';
import './Home.scss';
import luckyImg from '../../assets/images/Home/lucky_no_bg.png';


const Home = () => {
    return (
        // fragment
        <>
        <header id="introduction" className="grid">
            <div className="content-wrap">
            <p>     My name is <span>Lucky</span>. My fur is as white as this paragraph. 
                    Welcome to my website station,
                    this is where my owner will post pictures of myself and my friends, 
                    aswell as caption them.
            </p>
            </div>
            <img src={luckyImg} id="lucky-img-one"></img>
        </header>
        
        {/* <main id="main">

            <section id="section-a" className="grid">
                <div className="content-wrap">
                    <h2 className="content-title">My favorite things.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur.Lorem Lorem Lorem. longerTimeoutBrowsers. Lorem
                        Lorem ipsum dolor sit amet, consectetur.Lorem Lorem Lorem. longerTimeoutBrowsers. Lorem
                        Lorem ipsum dolor sit amet, consectetur.Lorem Lorem Lorem. longerTimeoutBrowsers. Lorem
                        Lorem ipsum dolor sit amet, consectetur.Lorem Lorem Lorem. longerTimeoutBrowsers. Lorem
                        Lorem ipsum dolor sit amet, consectetur.Lorem Lorem Lorem. longerTimeoutBrowsers. Lorem
                    </p>
                </div>
            </section>
        
        </main> */}

        {/* <footer id="main-footer" className="grid">
            <div>Boswell Orendain</div>
            <div>Project By boskyle</div>
        </footer> */}
        </>


    );
}

export default Home;



