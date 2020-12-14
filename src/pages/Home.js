import React from "react";
import Social from "../components/Social";
const Home = () => {
    return (
        <section className="home-page">
            <h2>Hi! My Name Is</h2>
            <h1>
                Truong <span className="orange">Giang</span>
            </h1>
            <hr />
            <h3>Web Developer</h3>
            <h4>UIT</h4>
            <Social />
            <div>
                <p></p>
            </div>
        </section>
    );
};

export default Home;
