import React from "react";
import '../Styles/WhatOurClientsSay.css';
import StarRating from "./StarRating";
import { animated, useSpring} from 'react-spring';
import {Props} from "./PropsOfAnimate";

const WhatOurClientsSay:React.FC<{ visible: boolean }> = ({visible}) => {


    const bottomToTop = useSpring({...Props,from: { opacity: visible ? 0 : 1, transform: visible ? "translateY(20px)" :  "translateY(0)"}});
    const rightToLeft = useSpring({...Props,from: { opacity: visible ? 0 : 1, transform: visible ? "translateX(-20px)" :  "translateX(0)"}});
    const leftToRight = useSpring({...Props,from: { opacity: visible ? 0 : 1, transform: visible ? "translateX(20px)" :  "translateX(0)"}});


    return (
        <div id="whatOurClientsSay">
            <div className="!block container">
                <animated.div style={bottomToTop} className="pt-5 w-full text-center">
                    <h2>What Our Clients Say</h2>
                    <h5>Some kind words from our respected clients</h5>
                </animated.div>
                <div className="w-full">
                    <div className="flex clients flex-wrap">
                        <animated.div style={rightToLeft} className="w-full md:w-1/3 mb-4">
                            <StarRating star={5} />
                            <h3>"Fantastic"</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus libero risus, at blandit quam iaculis ut. Morbi porttitor lorem id sollicitudin dictum. Vestibulum sed tortor sed lorem laoreet sollicitudin eu vel nisl. Morbi eu sagittis.</p>
                            <div className="profile">
                                <div className="avatar">
                                    <img src="/img/clients/01.png" alt="client"/>
                                </div>
                                <a href="#">Lorem ipsum</a>
                            </div>
                        </animated.div>
                        <animated.div style={bottomToTop} className="w-full md:w-1/3 mb-4">
                            <StarRating star={4} />
                            <h3>"Helpful"</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus libero risus, at blandit quam iaculis ut. Morbi porttitor lorem id sollicitudin dictum. Vestibulum sed tortor sed lorem laoreet sollicitudin eu vel nisl. Morbi eu sagittis.</p>
                            <div className="profile">
                                <div className="avatar">
                                    <img src="/img/clients/01.png" alt="client"/>
                                </div>
                                <a href="#">Lorem ipsum</a>
                            </div>
                        </animated.div>
                        <animated.div style={leftToRight} className="w-full md:w-1/3 mb-4">
                            <StarRating star={3} />
                            <h3>"Experts"</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus libero risus, at blandit quam iaculis ut. Morbi porttitor lorem id sollicitudin dictum. Vestibulum sed tortor sed lorem laoreet sollicitudin eu vel nisl. Morbi eu sagittis.</p>
                            <div className="profile">
                                <div className="avatar">
                                    <img src="/img/clients/01.png" alt="client"/>
                                </div>
                                <a href="#">Lorem ipsum</a>
                            </div>
                        </animated.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatOurClientsSay;
