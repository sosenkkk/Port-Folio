import "./FrontPageAnimation.css"
import React from "react";
const FrontPageAnimation = () => {
    const target = document;


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
        <div>
            <section className="animation_start" id="animation_start-scene">
                <section className="move">
                    <div className="animation_container">
                        <section className="animation_gif_sec">
                            <div className="start_bio">
                                <h1 className="small_intro">HELLO,
                                    <br />
                                    I AM SHASHANK.
                                </h1>
                                <p className="small_sub_intro">Web Developer</p>
                            </div>
                            <img
                                src="https://i.imgur.com/lISiYme.gif"
                                alt="new"
                                id="GIF_used"
                            />
                        </section>
                    </div>
                </section>
            </section>
        </div>
    )
};

export default FrontPageAnimation;