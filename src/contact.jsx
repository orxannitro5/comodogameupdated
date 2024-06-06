import React from "react";
import Map from "./map";
import "./contact.css"
export default function Contact() {
    return (
        <>

            <div className="about-block-after-header">
                <div className="about-block-after-header-content">
                    <h3 className="about-block-after-header-nav1">Home → Contact </h3>
                    <h1 className="about-block-after-header-nav">CONTACT US</h1>
                </div>
            </div>
            <div className="contact-block">
                <div className="contact-block-container">
                    <div className="google-map">
                        <Map />
                    </div>
                    <div className="contact-form">
                        <div className="contact-form-first-part">
                            <div className="contact-form-first-part-content">
                                <p className="contact-form-first-part-emoji">🏠</p>
                                <div className="contact-form-first-part-content-desc">
                                    <h6 className="contact-form-first-part-content-title">California,United States</h6>
                                    <p className="contact-form-first-part-content-text">Santa Monica bullevard</p>
                                </div>
                            </div>
                            <div className="contact-form-first-part-content">
                                <p className="contact-form-first-part-emoji">📞</p>
                                <div className="contact-form-first-part-content-desc">
                                    <h6 className="contact-form-first-part-content-title">00 (440) 9865 562</h6>
                                    <p className="contact-form-first-part-content-text">Mon to Fri 9am to 6 pm</p>
                                </div>
                            </div>
                            <div className="contact-form-first-part-content">
                                <p className="contact-form-first-part-emoji">💌</p>
                                <div className="contact-form-first-part-content-desc">
                                    <h6 className="contact-form-first-part-content-title">support@colorlib.com</h6>
                                    <p className="contact-form-first-part-content-text">Send us your query anytime!</p>
                                </div>
                            </div>

                        </div>
                        <div className="contact-form-second-part">
                            <div className="contact-form-secont-part-inputs">
                            <input className="contact-form-secont-part-input" type="text" placeholder="Enter your name" />
                            <input  className="contact-form-secont-part-input" type="mail" placeholder="Enter your address"/>
                            <input  className="contact-form-secont-part-input" type="text" placeholder="Enter subject"/>
                            </div>
                        </div>
                        <div className="contact-form-third-part">
                            <textarea name="" className="contact-form-third-part-textarea" placeholder="Message" id="">

                            </textarea>
                            <div className="contact-form-third-part-button">
                                <button className="contact-form-third-part-btn">
                                    SEND MESSAGE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}