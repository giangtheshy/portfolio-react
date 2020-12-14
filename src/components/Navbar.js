import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaMailBulk } from "react-icons/fa";
import { MdApps } from "react-icons/md";
import avatar from "../images/avatar.jpg";
const Navbar = () => {
    const [deg, setDeg] = useState(0);
    const homePage = useRef(null);
    const aboutPage = useRef(null);
    const projectsPage = useRef(null);
    const contactPage = useRef(null);

    const setPosition = () => {
        [homePage, aboutPage, projectsPage, contactPage].forEach((page) => {
            setColorDefault(page);
        });
        if (deg % 360 === 180) {
            setColor(projectsPage);
        }
        if (deg % 360 === 90) {
            setColor(aboutPage);
        }
        if (deg % 360 === 0) {
            setColor(homePage);
        }
        if (deg % 360 === 270) {
            setColor(contactPage);
        }
        homePage.current.style.transform = `rotate(${deg + 180}deg)`;
        aboutPage.current.style.transform = `rotate(${deg + 90}deg)`;
        projectsPage.current.style.transform = `rotate(${deg + 0}deg)`;
        contactPage.current.style.transform = `rotate(${deg + 270}deg)`;
    };
    const setColor = (element) => {
        const ele = element.current.children[0].style;
        ele.color = `#ff652f`;
        ele.backgroundColor = `#fff`;
        ele.transform = `scale(1.5)`;
    };
    const setColorDefault = (element) => {
        const ele = element.current.children[0].style;
        ele.color = `#fff`;
        ele.backgroundColor = `#ff652f`;
        ele.transform = `scale(.8)`;
    };
    const handleClick = (type) => {
        const modDeg = deg % 360;
        let newDeg = deg;
        if (type === "about") {
            if (modDeg < 90) {
                newDeg += 90;
            } else if (modDeg > 90) {
                newDeg += 270;
            }
        }
        if (type === "projects") {
            if (modDeg < 180) {
                modDeg === 0 ? (newDeg += 180) : (newDeg += 90);
            } else if (modDeg > 180) {
                newDeg += 270;
            }
        }
        if (type === "home") {
            if (modDeg <= 180 && modDeg > 0) {
                modDeg === 90 ? (newDeg += 270) : (newDeg += 180);
            } else if (modDeg > 180) {
                newDeg += 90;
            }
        }
        if (type === "contact") {
            if (modDeg <= 90) {
                modDeg === 0 ? (newDeg += 270) : (newDeg += 180);
            } else if (modDeg > 90) {
                newDeg += 90;
            }
        }
        setDeg(newDeg);
    };

    useEffect(() => {
        setPosition();
    }, [deg]);

    useEffect(() => {
        if (window.location.pathname === "/") {
            setDeg(0);
        }
        if (window.location.pathname === "/about") {
            setDeg(90);
        }
        if (window.location.pathname === "/projects") {
            setDeg(180);
        }
        if (window.location.pathname === "/contact") {
            setDeg(270);
        }
    }, []);
    return (
        <nav className="navbar">
            <div className="nav-center">
                <img src={avatar} alt="Avatar" />
                <div className="home" ref={homePage}>
                    <Link className="icon" to="/" onClick={() => handleClick("home")}>
                        <FaHome />
                    </Link>
                </div>
                <div className="about" ref={aboutPage}>
                    <Link className="icon" to="/about" onClick={() => handleClick("about")}>
                        <FaInfoCircle />
                    </Link>
                </div>
                <div className="projects" ref={projectsPage}>
                    <Link className="icon" to="/projects" onClick={() => handleClick("projects")}>
                        <MdApps />
                    </Link>
                </div>
                <div className="contact" ref={contactPage}>
                    <Link className="icon" to="/contact" onClick={() => handleClick("contact")}>
                        <FaMailBulk />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
