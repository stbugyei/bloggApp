import React from "react";
import Home from "./images/home-solid.svg";
import Click from "./images/tap.svg";
import TimeInterval from './TimeInterval'
import Socialmedia from "./SocialMedia";
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="head">
            <div className="container">
        
                <div className='banner_wrapper'>
                <Socialmedia/>
                    <div className='banner_text'>
                        Articles & Blog Posts
                            </div>
                    <div className='banner_text'>
                        <TimeInterval />
                    </div>
                </div>
                <div className='banner_link'>
                    <Link className="headerLink" to="/Post">
                        <div className='buttons-wrapper'>
                            <button className='btnsub-left'>
                                <img
                                    className="home_img"
                                    src={Home}
                                    alt=" "
                                />
                            </button>
                            <button className='btnsub-right'>
                                HOME
                                        </button>
                        </div>
                    </Link>{" "}
                    {" "}
                    <Link className="headerLink" to="/About">
                        {" "}
                        <div className='buttons-wrapper'>
                            <button className='btnsub-left'>
                                <img
                                    className="home_img"
                                    src={Click}
                                    alt=" "
                                />
                            </button>
                            <button className='btnsub-right'>
                                ABOUT
                                        </button>
                        </div>
                        {" "}
                    </Link>   {" "}
                    <Link className="headerLink" to="/AddPost">
                        <div className='buttons-wrapper'>
                            <button className='btnsub-left'>
                                +
                                        </button>
                            <button className='btnsub-right'>
                                ADD POST
                                        </button>
                        </div>
                    </Link>{" "}
                </div>
            </div>
        </div>
    );
}

export default Header;
