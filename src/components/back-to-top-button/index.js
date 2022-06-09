import React from "react";
import { useEffect, useState } from "react";
import "./index.css";


function BackToTopButton() {
    const [BackToTopButton, setBackToTopButton] = useState(false);
    
    useEffect(()=> {
        window.addEventListener("scroll", () => {
            if (window.scrolly > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
}   , [])

    const scrollup = () => {
        document.body.scrollTo({
            top: 0,
            behaviour: "smooth"
        })
    }

    return <div className="back-to-top">
    {BackToTopButton}
    <button className="button" style = {{
        position: "fixed",
        bottom: "50px",
        right: "50px",
        height: "50px",
        width: "50px",
        fontSize: "50px",
    }}
    onClick={scrollup}
    >^</button>
</div>
}

export default BackToTopButton;