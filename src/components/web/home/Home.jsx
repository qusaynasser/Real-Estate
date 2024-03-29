import React, { useState } from 'react'
import style from '../home/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
    const [activeButton, setActiveButton] = useState("");

    const isActive = (btn) => {
        setActiveButton(btn);
    }
    return (
        <div className='container'>
            <div className={`${style.bacImg}`}>
                <div className={`${style.p1}`}>
                    <p>Easy way to find a perfect property</p>
                </div>

                <div className={`${style.p2}`}>
                    <p>We provide a complete service for the sale, purchase or rental of real estate.</p>
                </div>

                <div className={`${style.rectangle}`}>
                    <ul className="nav nav-pills gap-5">
                        <li className={`${style.navitem}`}>
                            <a className={`nav-link ${activeButton === "rent" ? "active" : ""}`}
                                onClick={() => isActive("rent")} >RENT</a>
                        </li>
                        <li className={`${style.navitem}`}>
                            <a className={`nav-link ${activeButton === "buy" ? "active" : ""}`}
                                onClick={() => isActive("buy")} >BUY</a>
                        </li>
                        <li className={`${style.navitem}`}>
                            <a className={`nav-link ${activeButton === "sell" ? "active" : ""}`}
                                onClick={() => isActive("sell")} >SELL</a>
                        </li>
                    </ul>

                    <div className="row">
                        <div className="col-md-4">
                            <div className={`${style.location}`}>
                                <p>Location</p>

                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Select Your City</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>

                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className={`${style.property}`}>
                                <p>Property Type</p>

                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Choose Property Type</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className={`${style.price}`}>
                                <p>Price Range</p>

                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Select Your City</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-1">
                            <div className={`${style.search}`}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={`${style.icon}`}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
