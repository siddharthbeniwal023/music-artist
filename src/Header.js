import React from "react";
import "./Header.css"
const Header = function () {

    return (
        <div>
            <div className="body">
                <a href="#" id="ln">Home</a>
                <a href="#" id="ln">About</a>
                <a href="#" id="ln">Music</a>
                <div className="heading">
                    <button className="headingbtn">
                        <span>B</span><span>T</span>
                    </button>
                    {/* <div className="dropdown">
                        <a href="#">Let's get on a ride
                        </a>
                    </div> */}
                </div>
                <a href="#" id="ln">Merch</a>
                <a href="#" id="ln">Tour</a>
                <a href="#" id="ln">Contact </a>
            </div>
        </div>
    )
}
export default Header;