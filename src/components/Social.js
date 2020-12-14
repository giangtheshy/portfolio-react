import React, { useEffect, useRef } from "react";
import { FaTwitter, FaFacebook, FaInstagramSquare, FaGithub } from "react-icons/fa";
const Social = () => {
    const social = useRef(null);
    useEffect(() => {
        social.current.classList.add("show");
    }, []);
    return (
        <aside className="social-container">
            <ul ref={social}>
                <li className="social-link">
                    <a href="https://www.facebook.com/ntg.uit">
                        <FaFacebook />
                    </a>
                </li>
                <li className="social-link">
                    <a href="https://twitter.com/Giang17536747">
                        <FaTwitter />
                    </a>
                </li>
                <li className="social-link">
                    <a href="https://www.instagram.com/nhockrong98/">
                        <FaInstagramSquare />
                    </a>
                </li>
                <li className="social-link">
                    <a href="https://github.com/giangtheshy">
                        <FaGithub />
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default Social;
