import React from "react";
import "./Header.css"
import Songname from "./Songdetails";
const Header = function () {

    return (
        <div className="header">
            <div className="body">
                <a href="#" >Home</a>
                <a href="#">About</a>
                <a href="#">Music</a>
                
                <a href="#" id="">Merch</a>
                <a href="#" id="">Tour</a>
                <a href="#" id="">Contact </a>
            </div>
            {/* <div className="heading">
                    <button className="headingbtn">
                        <span>no knots</span><span> attached</span>
                    </button>
                    {/* <div className="dropdown">
                        <a href="#">Let's get on a ride
                        </a>
                    </div> }
                </div> */}
                <div className="para">
            <p className="artistname">
                Broken Ties
            </p>
        </div>

        </div>
    )
}
export default Header;