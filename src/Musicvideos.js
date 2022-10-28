import React from "react";
import "./Musicvideos.css"
const Musicvideos = function () {
    return (
        <div className="videos">
            <iframe width="854" height="480" src="https://www.youtube.com/embed/DH7S9MKHYz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="youtube"></iframe>
            {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5hI5OXs5kH4qi0PqIjzqR5?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
        </div>
    )
}
export default Musicvideos