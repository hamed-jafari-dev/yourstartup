import React from "react";
import '../Styles/BottomBanner.css';
import {animated, useSpring} from 'react-spring';
import {Props} from "./PropsOfAnimate";



const BottomBanner:React.FC<{ visible: boolean }> = ({visible}) => {

    const bottomToTop = useSpring({...Props,from: { opacity: visible ? 0 : 1, transform: visible ? "translateY(20px)" :  "translateY(0)"}});

    return (
        <div id="bottomBanner">
            <div className="!block container">
                <div className="flex flex-wrap text-center md:text-left">

                    <animated.div style={bottomToTop} className="w-full md:w-2/12 w-full text-center">
                        <img className="p-5 max-h-[200px] inline-block" src="/img/white-logo-glyph.png"
                             alt="white logo glyph"/>
                    </animated.div>

                    <animated.div style={bottomToTop} className="w-full md:w-6/12 pt-5 w-full">
                        <h2>We’re Waiting</h2>
                        <p>Metus vulputate eu scelerisque felis imperdiet proin fermentum</p>
                    </animated.div>

                    <animated.div style={bottomToTop} className="w-full md:w-4/12 text-center md:text-right">
                       <button className={`btn buttonWhite my-16 md:my-16`}>Start Consultation</button>
                    </animated.div>
                </div>
            </div>
        </div>
    )
}

export default BottomBanner;
