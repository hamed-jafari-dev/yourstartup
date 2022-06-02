import React from "react";
import '../Styles/Header.css';
import MenuMobile from "./MenuMobile";
import {useDispatch, useSelector,TypedUseSelectorHook } from "react-redux";
import menuAction from "../Redux/actions/menuAction";
import {animated, useSpring} from 'react-spring';
import {leftToRightProps, rightToLeftProps} from "./PropsOfAnimate";

const Header:React.FC = () => {

    const leftToRight = useSpring(leftToRightProps);
    const rightToLeft = useSpring(rightToLeftProps);

    interface RootState {
        showMenu: boolean
    }

    const showMenu = useSelector<RootState, boolean>((state) => state.showMenu);
    const dispatch = useDispatch();

    const handleMobileMenu = () => {
        dispatch(menuAction(!showMenu));
    }

    return (
        <div id="header">
            <div className="container">
                <div className="lg:w-5/12 pt-5 w-8/12">
                    <animated.div style={leftToRight}>
                        <img className="logo" src="/img/logo.svg" alt="logo"/>
                    </animated.div>
                </div>
                <div className="lg:w-7/12 lg:block hidden">
                    <animated.div style={rightToLeft}>
                        <div className="w-full flex pb-2">
                            <div className="w-6/12 text-left">
                                <span>info@yourdomain.com / (+1)2500-000-000</span>
                            </div>
                            <div className="w-6/12 text-right">
                                <button className="buttonPrimary btnBook">Consultation</button>
                            </div>
                        </div>
                        <nav className="mainMenu mt-3">
                            <ul>
                                <li className="active">
                                    <a href="#">
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li>
                                     <a href="#">
                                        <span>Solutions</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Tools</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>About Us</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Blog</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Contact Us</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </animated.div>
                </div>
                <div className="w-4/12 block lg:hidden">
                    <span className={`collapsed-nav-icon ${showMenu ? 'active' : ''}`}>
                        <span onClick={() => handleMobileMenu()} className="fontIcon collapsed-nav-icon-open"></span>
                        <span onClick={() => handleMobileMenu()} className="fontIcon collapsed-nav-icon-close"></span>
                    </span>
                </div>
            </div>

             <MenuMobile />
        </div>
    )
}

export default Header;
