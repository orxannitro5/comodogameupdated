import React from "react";
import "./pricing-plans-block.css";
export default function PricingPlans() {
    const plans = [
        {
            name: "Silver Package",
            price: "69$",
            infofirst: "CS GO",
            infosecond: "Team Fortress",
            infothird: "ETS 2",

        },
        {
            name: "Gold Package",
            price: "99$",
            infofirst: "CS 2",
            infosecond: "PES 2019",
            infothird: "PUBG",

        },
        {
            name: "Platinum Package",
            price: "129$",
            infofirst: "FORTNITE",
            infosecond: "PES 2024",
            infothird: "FIFA 24",
        }
    ]
    
    return (
        <div className="pricing-block-main">
            <div className="pricing-block-title">
                <h1 className="pricing-block-low-opacity-title">Pricing Plans</h1>
                <h1 className="pricing-block-high-opacity-title">Pricing Plans</h1>
            </div>
            <div className="pricing-plans-container">
                
                    {plans.map((plan, index)=>(
                        <div key={index} className="pricing-plans-info">
                            <h3 className="pricing-plans-name">{plan.name}</h3>
                            <h1 className="pricing-plans-price">{plan.price}</h1>
                        <ul className="pricing-plans-infos">
                            <li className="pricing-plans-services">{plan.infofirst}</li>
                            <li className="pricing-plans-services">{plan.infosecond}</li>
                            <li className="pricing-plans-services">{plan.infothird}</li>
                        </ul>
                        <div className="pricing-plans-button">
                            <button className="pricing-plans-btn">ORDER NOW</button>
                        </div>
                        </div>
                    ))}
                    
                
            </div>
        </div>
    )
}