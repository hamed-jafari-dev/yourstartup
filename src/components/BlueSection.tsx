import React from "react";
import '../Styles/BlueSection.css';
import TypingSentences from "./TypingSentences";
import {animated, useSpring} from 'react-spring';
import {Props} from "./PropsOfAnimate";


const BlueSection:React.FC<{ visible: boolean }> = ({visible}) => {

    const bottomToTop = useSpring({...Props,from: { opacity: visible ? 0 : 1, transform: visible ? "translateY(20px)" :  "translateY(0)"}});
    const leftToRight = useSpring({...Props,from: { opacity: visible ? 0 : 1, transform: visible ? "translateX(-20px)" :  "translateX(0)"}});
    const rightToLeft = useSpring({...Props,from: { opacity: visible ? 0 : 1, transform: visible ? "translateX(20px)" :  "translateX(0)"}});
    const topToBottom = useSpring({...Props,from: { opacity: visible ? 0 : 1, transform: visible ? "translateY(-20px)" :  "translateY(0)"}});

    return (
        <div id="blueSection">
            <div className="features !block container">
                <div className="w-full">
                    <div className="flex clients flex-wrap">
                        <animated.div style={leftToRight} className="p-3 w-full md:w-1/3 mb-4">
                                <i className="fontIcon icoPhoneCanel"></i>
                                <h3>Phone Consultation</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta fermentum rutrum. Mauris non hendrerit mauris. Pharetra eu amet velit.</p>
                                <div className="learnMore">
                                    <a href="#">Learn More ...</a>
                                </div>
                        </animated.div>
                        <animated.div style={topToBottom} className="p-3 w-full md:w-1/3 mb-4">
                            <i className="fontIcon icoMarketing"></i>
                            <h3>Marketing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta fermentum rutrum. Mauris non hendrerit mauris. Pharetra eu amet velit.</p>
                            <div className="learnMore">
                                <a href="#">Learn More ...</a>
                            </div>
                        </animated.div>
                        <animated.div style={rightToLeft} className="p-3 w-full md:w-1/3 mb-4">
                            <i className="fontIcon icoTroubleshooting"></i>
                            <h3>Troubleshooting</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta fermentum rutrum. Mauris non hendrerit mauris. Pharetra eu amet velit.</p>
                            <div className="learnMore">
                                <a href="#">Learn More ...</a>
                            </div>
                        </animated.div>
                    </div>
                </div>
            </div>
            <div className="Offering !block container">
                <h2>Offering You A More</h2>
                <h3><TypingSentences text={"We do your ideas"} /></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien ut lorem convallis porttitor at quis nunc. </p>
                <animated.div style={bottomToTop} className="text-center">
                    <button className="btn buttonPrimary">Start consultation</button>
                </animated.div>
            </div>


            <div className="mobileApp !block container">
                <div className="flex flex-wrap">
                    <animated.div style={leftToRight} className="w-full md:w-1/2 mainImage">
                        <img src="/img/email_marketing.svg" alt="mobile app"/>
                    </animated.div>
                    <animated.div style={rightToLeft} className="w-full md:w-1/2">
                        <h2>We do your Mobile App</h2>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet fermentum augue. Nullam bibendum consectetur lacinia. Etiam sit amet lorem sodales.</p>
                        <div>
                            <nav className="mobileAppFeatures">
                                <ul>
                                    <li>Amet porttitor eget dolor</li>
                                    <li>Tortor posuere ac ut</li>
                                    <li>Interdum posuere lorem ipsum</li>
                                    <li>Eros in cursus turpis</li>
                                </ul>
                            </nav>
                            <div className="stores flex flex-wrap">
                                <div className="w-1/2 text-center">
                                    <a href="#">
                                        <img src="/img/googlePlay.svg" alt="google play"/>
                                    </a>
                                </div>
                                <div className="w-1/2 text-center">
                                    <a href="#">
                                        <img src="/img/appStore.svg" alt="app store"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </animated.div>
                </div>
            </div>
        </div>
    )
}

export default BlueSection;
