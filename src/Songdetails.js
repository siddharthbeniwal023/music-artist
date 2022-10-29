import React from "react";
import "./Songdetails.css"
const Songname = function () {
    return (
        <div className="songdetails">
            <span className="songname">
                Alive Again
            </span>
            <p className="text">
                A song written when life looked boring, dull or, as we would express it <br/>"lifeless," in order to restore
                joy and happiness.<br/> Hope this song brings you the same happiness which we felt whilst making it.
            </p>
            <div className="videos">
            <iframe width="854" height="480" src="https://www.youtube.com/embed/DH7S9MKHYz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="youtube"></iframe>
            </div>
        </div>
    )
}
export default Songname;