import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import Social from "../components/Social";

const Contact = () => {
    return (
        <section className="contact">
            <h1>Contact Me</h1>
            <div className="info">
                <div className="email">
                    <h2>
                        <AiOutlineMail /> Email
                    </h2>
                    <p>nhockrong98@gmail.com</p>
                </div>
                <div className="phone">
                    <h2>
                        <MdPhoneIphone /> Phone
                    </h2>
                    <p>+1 (555) 555-5555</p>
                </div>
                <div className="email">
                    <h2>
                        <FaRegAddressCard /> Address
                    </h2>
                    <p>Thu Duc ,Ho Chi Minh city</p>
                </div>
            </div>
            <Social />
        </section>
    );
};

export default Contact;
