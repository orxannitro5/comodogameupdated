import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pricing-plans-block.scss";
export default function PricingPlans() {
    const [planList, setPlanList] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/plans")
            .then(response => {
                setPlanList(response.data)
            })
            .catch(error => error)
    }, [])

    return (
        <div className="pricing-block-main">
            <div className="pricing-block-title">
                <h1 className="pricing-block-low-opacity-title">Pricing Plans</h1>
                <h1 className="pricing-block-high-opacity-title">Pricing Plans</h1>
            </div>
            <div className="pricing-plans-container">

                {planList.map((plan) => (
                    <div key={plan.id} className="pricing-plans-info">
                        <h3 className="pricing-plans-name">{plan.name}</h3>
                        <h1 className="pricing-plans-price">{plan.price}</h1>
                        <ul className="pricing-plans-infos">
                            <li className="pricing-plans-services">{plan.game1}</li>
                            <li className="pricing-plans-services">{plan.game2}</li>
                            <li className="pricing-plans-services">{plan.game3}</li>
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