import React from "react";
import '../Styles/Footer.css';

const Footer: React.FC = () => {
    return (
        <div id="footer">
            <div className="!block container">
                <div className="flex w-full mt-5">
                    <img className="logo" src="/img/logo.svg" alt="logo"/>
                </div>
                <div className="flex">
                    <div className="md:w-6/12 pt-5 w-full">
                        <div className="flex w-full">
                            <div className="w-full md:w-6/12">
                                <nav className="footerMenu">
                                    <ul>
                                        <li className="active">
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Alternate Homepage</a>
                                        </li>
                                        <li>
                                            <a href="#">Solutions</a>
                                        </li>
                                        <li>
                                            <a href="#">Tools</a>
                                        </li>
                                        <li>
                                            <a href="#">Blog</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact Us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="w-full md:w-6/12">
                                <nav className="footerMenu">
                                    <ul>
                                        <li>
                                            <a href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Start Consultation</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                    </ul>
                                </nav>

                                <p className="mt-7">info@yourdomain.com</p>
                                <p>(+1)2500-000-000</p>

                                <nav className="SocialMedia">
                                    <ul>
                                        <li>
                                            <a href="#"><i className="ico fontIcon icoFb"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="ico fontIcon icoTw"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="ico fontIcon icoLi"></i></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                    </div>
                    <div className="md:w-6/12 mt-5 md:block hidden">
                        <div className="newsletter w-full pb-2">
                            <div className="mb-6">
                                <h2>Subscribe To Our Newsletter</h2>
                            </div>
                            <div className="mb-6">
                                <p>Risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh</p>
                            </div>
                            <form>
                                <div className="mb-6">
                                    <input className="inputTxt" name="emailInput" placeholder="Email Adress:" type="text"/>
                                </div>
                                <div className="mb-6 text-left">
                                    <button className="btn buttonPrimary">SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="block relative copyright">
                    <p>© Copyright 2022 | Theme by <a className="font-bold" href="https://titan7web.com/">Titan7Web.com</a> Powered by ReactJs (TypeScript)</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
