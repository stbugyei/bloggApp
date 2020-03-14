import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia"

function Header() {
    return (
        <div className="head">
            <div className="container">
                <div className='banner_wrapper'>

                    <header className="banner">
                        <div className='banner_text'> Articles & Blog Posts</div>
                        <div className='banner_link'>
                            <Link className="headerLink" to="/Post">
                                Home
                             </Link>{" "}
                            |{" "}
                            <Link className="headerLink" to="/About">
                                {" "}
                                About {" "}
                             </Link>   |{" "} 
                            <Link className="headerLink" to="/AddPost">
                                 
                             Add Post
                                </Link>{" "}
                          
                        </div>
                        <SocialMedia />
                    </header>

                </div>
            </div>
        </div>
    );
}

export default Header;
