import React, { useState } from 'react'
import style from '../home/Home.module.css'
export default function Home() {
    const [activeButton,setActiveButton]=useState("");

    const isActive=(btn)=>{
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
                            <a className={`nav-link ${activeButton==="rent"? "active":"" }`}
                            onClick={()=> isActive("rent")} >RENT</a>
                        </li>
                        <li className={`${style.navitem}`}>
                        <a className={`nav-link ${activeButton==="buy"? "active":"" }`}
                            onClick={()=> isActive("buy")} >BUY</a>
                        </li>
                        <li className={`${style.navitem}`}>
                        <a className={`nav-link ${activeButton==="sell"? "active":"" }`}
                            onClick={()=> isActive("sell")} >SELL</a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
