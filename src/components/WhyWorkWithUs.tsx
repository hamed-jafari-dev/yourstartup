import React from "react";
import '../Styles/WhyWorkWithUs.css';
import { animated, useSpring} from 'react-spring';
import {Props} from "./PropsOfAnimate";

const WhyWorkWithUs:React.FC<{ visible: boolean }> = ({visible}) => {

    const rightToLeft = useSpring({...Props,from: { opacity: visible ? 0 : 1, transform: visible ? "translateX(20px)" :  "translateX(0)"}});
    const leftToRight = useSpring({...Props,from: { opacity: visible ? 0 : 1, transform: visible ? "translateX(-20px)" :  "translateX(0)"}});

    return (
        <div id="whyWorkWithUs">
            <div className="!block container">
                <div className="grid lg:grid-cols-2 text-center md:text-left">
                    <animated.div style={leftToRight} className="pt-5 w-full">
                        <h2>Why Work With Us?</h2>
                        <h5>Lorem donec massa sapien faucibus et molestie ac</h5>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus libero risus, at blandit quam iaculis ut. Morbi porttitor lorem id sollicitudin dictum. Vestibulum sed tortor sed lorem laoreet sollicitudin eu vel nisl. Morbi eu sagittis.</p>
                    </animated.div>
                    <animated.div style={rightToLeft} className="w-full">
                        <div className="md:text-right mb-6">
                            <button className="btn buttonPrimary">Start Consultation</button>
                        </div>
                        <div className="grid lg:grid-cols-3 grid-cols-2 w-full brands mb-4">
                            <div className="item">
                                <a href="#">
                                    <span>Next</span>
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <span>Next</span>
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <span>Next</span>
                                </a>
                            </div>

                            <div className="item">
                                <a href="#">
                                    <span>Next</span>
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <span>Next</span>
                                </a>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <span>Next</span>
                                </a>
                            </div>
                        </div>
                    </animated.div>
                </div>
            </div>
        </div>
    )
}

export default WhyWorkWithUs;
