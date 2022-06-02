import React from "react";
import '../Styles/MenuMobile.css';
import {useSelector} from "react-redux";


const MenuMobile: React.FC = () => {

    interface RootState {
        showMenu: boolean
    }

    const showMenu = useSelector<RootState, boolean>((state) => state.showMenu);

    return (
        <nav className={`menuMobile ${showMenu ? 'active' : ''}`}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Solutions</a>
                </li>
                <li>
                    <a href="#">Case Studies</a>
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Articles</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}

export default MenuMobile;
