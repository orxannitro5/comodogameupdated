import React from "react";
import "./footer.css";
import facebook from "./assets/facebook-squared.svg";
import instagram from "./assets/instagram.svg";
import linkedin from "./assets/linkedin-square.svg";
import twitter from "./assets/twitter.svg"
export default function Footer() {
    return (
        <div className="footer-main-block">
            <div className="footer-content">
                <div className="footer-content-colomns">
                    <div className="footer-content-colomn">
                        <h4 className="footer-colomn-title">About Farfly</h4>
                        <ul className="footer-colomn-ul">
                            <li className="footer-colomn-list">For Business</li>
                            <li className="footer-colomn-list">Premium Plans</li>
                            <li className="footer-colomn-list">Reviews</li>
                            <li className="footer-colomn-list">How It Works</li>
                            <li className="footer-colomn-list">Farfly Blog</li>
                        </ul>
                    </div>
                    <div className="footer-content-colomn">
                        <h4 className="footer-colomn-title">Company</h4>
                        <ul className="footer-colomn-ul">
                            <li className="footer-colomn-list">Product Tour</li>
                            <li className="footer-colomn-list">Pricing</li>
                            <li className="footer-colomn-list">Founding Members</li>
                            <li className="footer-colomn-list">Case Studies</li>
                            <li className="footer-colomn-list">Product Updates</li>
                        </ul>
                    </div>
                    <div className="footer-content-colomn">
                        <h4 className="footer-colomn-title">Support</h4>
                        <ul className="footer-colomn-ul">
                            <li className="footer-colomn-list">Documentation</li>
                            <li className="footer-colomn-list">Data Securiry</li>
                            <li className="footer-colomn-list">Site Performance</li>
                            <li className="footer-colomn-list">Action Plan</li>
                            <li className="footer-colomn-list">Resources</li>
                        </ul>
                    </div>
                    <div className="footer-content-colomn">
                        <h4 className="footer-colomn-title">Legal</h4>
                    <ul  className="footer-colomn-ul">
                        <li className="footer-colomn-list">Terms and conditions</li>
                        <li className="footer-colomn-list">Privacy Policy</li>
                        <li className="footer-colomn-list">Cookie Information</li>
                        <li className="footer-colomn-list">Opt - Out</li>
                        <li className="footer-colomn-list">Farfly Blog</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-social-media-block">
                    <img className="social-media-logo" src={facebook} alt="" />
                    <img className="social-media-logo" src={instagram} alt="" />
                    <img className="social-media-logo" src={linkedin} alt="" />
                    <img className="social-media-logo" src={twitter} alt="" />
                </div>

            </div>
        </div>
    )
}