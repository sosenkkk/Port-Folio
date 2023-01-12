import "./FrontPageAnimation.css"
import React, {useState} from "react";
const FrontPageAnimation = () => {
    const target = document;
    const [subBio, setsubBio] = useState(0);
    const arraySub=["WEB DEVELOPER","JAVA ENTHUSIAST"]
    setInterval(()=>{
        setsubBio((prev)=>prev+1);      
    }, 4500);


    function factorfinder() {
        var w = window.innerWidth;
        var factor;
        if (w <= 500) {
            factor = 0.15;
        }
        else if (w <= 780 && w > 500) {
            factor = 0.13;
        }
        else {
            factor = 0.11;
        }
        return factor;
    }

    target.addEventListener("scroll", function () {
        var h = window.screen.height;
        var factor = factorfinder();
        if (window.pageYOffset < factor * h) {
            document.getElementById("animation_start-scene").classList.add("deanimate");
            document.getElementById("animation_start-scene").classList.remove("animate");
        }
        else if (window.pageYOffset > factor * h) {
            document.getElementById("animation_start-scene").classList.add("animate");
            document.getElementById("animation_start-scene").classList.remove("deanimate");
        }
    })



    return (
        <div style={{ backgroundColor: "black", overflow: "hidden" }} id="Home"  >
            <div className={`animation_start elementToFadeInAndOut`} id="animation_start-scene">
                <section className="move">
                    <div className="animation_container">
                        <section className="animation_gif_sec">
                            <div className="start_bio">
                                <h2 className="small_intro_hello"  >HELLO,
                                </h2>
                                <h1 className="small_intro" >
                                    I AM SHASHANK.
                                </h1>
                                <div className="div-holder">
                                    <div className="typewriter">
                                        <h4>{arraySub[subBio%2]}</h4>
                                    </div>                                    
                                </div>
                                
                            </div>
                            <img
                                src="https://i.imgur.com/lISiYme.gif"
                                alt="new"
                                id="GIF_used"
                            />
                        </section>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default FrontPageAnimation;