import React from 'react';
import  './About.scss';
import {GiDogBowl,GiMagnifyingGlass} from 'react-icons/gi';
import {FaDog} from 'react-icons/fa';


const About = () => {
    return (     
        <>
            <section id="section-1-about" className="grid-about">
               <div className="content-wrap-about">
                    <span><FaDog/></span>
                    <p> I luv to go on walks on a breezy fall day where the sun is shining. I also wuv playing fetch w/ my dad, he is kinda sl0w so I run a bit slowly to make him catch up.
                        </p>
               </div>
               <div className="content-wrap-about">
                    <span><GiDogBowl/></span>
                    <p>My favorite snacks are liver bites and anything my dad eats..haha!. I am not a picky eater so I just eat anything if i'm being honest with you.</p>
                </div>
               <div className="content-wrap-about">
                    <span><GiMagnifyingGlass/></span>
                    <p>I love to go on adventures and explore places like... parks, malls, etc whatever it is... I want to explore it :D</p>
                </div> 
            </section>
       </>
    )
}

export default About;
