import { Link } from "react-router-dom";
import "./PricingCardStyles.css";
import React from "react";

const PricingCard = () => {
    return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$ 30</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design</p>
                <Link to="./contact" className="btn">PURCHASE NOW</Link>
            </div>

            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$ 50</p>
                <p>- 6 Days -</p>
                <p>- 8 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design</p>
                <Link to="./contact" className="btn">PURCHASE NOW</Link>
            </div>

            <div className="card">
                <h3>- Business -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 12 Days -</p>
                <p>- 15 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design</p>
                <Link to="./contact" className="btn">PURCHASE NOW</Link>
            </div>
        </div>
    </div>
    );
};
export default PricingCard;