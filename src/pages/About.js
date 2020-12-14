import React from "react";
import Social from "../components/Social";

const About = () => {
    return (
        <section className="about">
            <h1>About</h1>
            <div className="info-container">
                <div className="info-center">
                    <h2>2018 - 2020</h2>
                    <p className="action">Study in UIT</p>
                    <p className="note">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi deserunt reprehenderit
                        quisquam id amet ipsam .
                    </p>
                </div>
                <div className="info-center">
                    <h2>October 2020 - Current</h2>
                    <p className="action">Learn Web Dgit pevelopment</p>
                    <p className="note">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi deserunt reprehenderit
                        quisquam id amet ipsam .
                    </p>
                </div>
            </div>
            <Social />
        </section>
    );
};

export default About;
