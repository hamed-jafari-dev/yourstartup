import React from "react";
import '../Styles/SomeOfOur.css';
import { animated,  useSpring} from 'react-spring';
import {Props} from "./PropsOfAnimate";

const SomeOfOur:React.FC<{ visible: boolean }> = ({visible}) => {

    const bottomToTop = useSpring({...Props,from: { opacity: visible ? 0 : 1, transform: visible ? "translateY(20px)" :  "translateY(0)"}});
    const rightToLeft = useSpring({...Props,from: { opacity: visible ? 0 : 1, transform: visible ? "translateX(-20px)" :  "translateX(0)"}});
    const leftToRight = useSpring({...Props,from: { opacity: visible ? 0 : 1, transform: visible ? "translateX(20px)" :  "translateX(0)"}});


    return (
        <div id="someOfOur">
            <div className="!block container">
                <animated.div style={bottomToTop} className="pt-5 w-full text-center">
                    <h2>Some Of Our Clients</h2>
                    <h5>Tellus cras adipiscing enim eu</h5>
                </animated.div>
                <div className="w-full text-center md:text-left">
                    <div className="flex clients flex-wrap">
                        <animated.div style={rightToLeft} className="w-full md:w-1/3 mb-4">
                            <img src="/img/somofcase01.jpg" alt="some of case"/>
                            <h3 className="mt-5">Ultricies mi eget</h3>
                            <p>Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus</p>
                        </animated.div>
                        <animated.div style={bottomToTop} className="w-full md:w-1/3 mb-4">
                            <img src="/img/somofcase02.jpg" alt="some of case"/>
                            <h3 className="mt-5">In fermentum et</h3>
                            <p>Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus</p>
                        </animated.div>
                        <animated.div style={leftToRight} className="w-full md:w-1/3 mb-4">
                            <img src="/img/somofcase02.jpg" alt="some of case"/>
                            <h3 className="mt-5">Vitae suscipit tellus</h3>
                            <p>Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus</p>
                        </animated.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SomeOfOur;
