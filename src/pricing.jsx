import React from "react";
import "./pricing.scss"
import PricingPlans from "./pricing-plans-block";
import NewsLetter from "./newsletter";

export default function Pricing(){
    return(
        <div className="about-block">
            <div className="about-block-content">
                <div className="about-block-after-header">
                    <div className="about-block-after-header-content">
                        <h3 className="about-block-after-header-nav1">Home → Pricing </h3>
                        <h1  className="about-block-after-header-nav">PRICING PLANS</h1>
                    </div>
                </div>
                <PricingPlans />
                <NewsLetter />
            </div>
        </div>
    )
}