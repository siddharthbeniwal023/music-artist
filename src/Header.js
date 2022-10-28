import React from "react";
import "./Header.css"
const Header = function () {

    return (
        <div>
            <div className="body">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Music</a>
                <div className="heading">
                    <button className="headingbtn">
                        <span>B</span><span>T</span>
                        </button>
                    {/* <div className="dropdown">
                        <a href="#">Let's get on a ride
                        </a>
                    </div> */}
                </div>
                <a href="#" id="spotify">Merch</a>
                <a href="#">Tour</a>
                <a href="#">Contact </a>
            </div>
        </div>
    )
}
export default Header;