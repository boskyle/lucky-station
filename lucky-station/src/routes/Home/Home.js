import React from 'react';
import './Home.scss';
import luckyImg from '../../assets/images/Home/lucky_no_bg.png';

var introduction =   <p>My name is Lucky. My fur is as white as this paragraph. 
                        Welcome to my website station,
                        this is where my owner will post pictures of myself and my friends, 
                        aswell as caption them :D.
                        </p>;
const Home = () => {
    return (
        <>

        <div className="home-item">
            {introduction}
            <img src={luckyImg}></img>
        </div>

        </>


    );
}

export default Home;



