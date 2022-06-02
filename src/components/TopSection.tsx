import React from "react";
import '../Styles/TopSection.css';
import TypingSentences from './TypingSentences';
import { animated, useSpring} from 'react-spring';
import {rightToLeftProps, topToBottomProps} from "./PropsOfAnimate";

const TopSection:React.FC = () => {
    const topToBottom = useSpring(topToBottomProps);
    const rightToLeft = useSpring(rightToLeftProps);
    return (
        <div id="topSection">
            <div className="container !pb-0">
                <div className="w-full md:w-6/12 text-center md:text-left">
                    <animated.div style={topToBottom}>
                        <h3 className="mt-16 mb-10 md:mb-5">You will successful</h3>
                        <h2 className="mb-10 md:mb-5"><TypingSentences text="We do your ideas" text2="We help to your startup" /></h2>
                        <p className="mb-10 md:mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien ut lorem convallis porttitor at quis nunc.</p>
                        <div className="my-16 md:my-3">
                            <button className="btn buttonPrimary viewOurCase">Start Consultation</button>
                        </div>
                    </animated.div>
                </div>
                <div className="w-full md:w-6/12 text-center">
                    <animated.div className="text-center inline-block" style={rightToLeft}>
                        <img className="img-responsive" src="/img/yourstartup.png" alt="top section"/>
                    </animated.div>
                </div>
            </div>
        </div>
    )
}

export default TopSection;
