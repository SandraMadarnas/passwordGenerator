import React from "react";
import propTypes from "prop-types";

const Hero = ({ mainTitle, secondaryTitle }) => {

    return (
        <div className="hero bg-dark text-white my-5 text-center">
            <h1>{mainTitle}</h1>
            <h2>{secondaryTitle}</h2>
        </div>
    );

};

Hero.propTypes = {
    mainTitle: propTypes.string,
    secondaryTitle: propTypes.string
}



export default Hero;