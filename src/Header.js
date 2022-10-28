import React from "react";
import "./Header.css"
const Header = function () {

    return (
        <div>
            <div className="body">
                <a href="#" >Home</a>
                <a href="#" >About</a>
                <a href="#" id="">Music</a>
                <div className="heading">
                    <button className="headingbtn">
                        <span>Broken</span><span>Ties</span>
                    </button>
                    {/* <div className="dropdown">
                        <a href="#">Let's get on a ride
                        </a>
                    </div> */}
                </div>
                <a href="#" id="">Merch</a>
                <a href="#" id="">Tour</a>
                <a href="#" id="">Contact </a>
            </div>
        </div>
    )
}
export default Header;