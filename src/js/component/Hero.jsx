import React from "react";
import propTypes from "prop-types";

const Hero = ({ mainTitle, secondaryTitle }) => {

    return (<>
        {/* <div className="hero bg-dark text-white my-5 text-center">
            <h1>{mainTitle}</h1>
            <h2>{secondaryTitle}</h2>
        </div> */}

        <div className="bg-dark text-secondary hero text-center">
            <div className="py-5">
                <h1 className="display-5 fw-bold text-white">{mainTitle}</h1>
                <h2>{secondaryTitle}</h2>
            </div>
        </div>
    </>
    );

};

Hero.propTypes = {
    mainTitle: propTypes.string,
    secondaryTitle: propTypes.string
}



export default Hero;