import React from 'react'
import style from './DispalyH.module.css';
import { Link } from 'react-router-dom';

export default function DisplayHouse({ sHouse, loadingH }) {

    if (loadingH) {
        return <h1>جار التحميل...</h1>
    }
    return (
        <div className='container my-5' dir='rtl'>
            <div className="d-flex justify-content-between">
                <p className={`${style.titleState}`}>حالة المنزل</p>
                <Link to={"/ara/allHouseArabic"} className={`${style.btnSeeAll}`}>عرض الكل</Link>
            </div>
            <div className="row">
                {sHouse.estates ? sHouse.estates.map((estate) =>

                    <div className="col-md-3 " key={estate._id}>
                        <div className={`${style.card}`}>
                            <Link to={`/ara/ditalStateArabic/${estate._id}`} className='text-decoration-none'>
                                <img src={estate.imageUrl[0]} alt='عقار' />
                                <p className={`${style.price}`}>{estate.price} دولار</p>
                                <p className={`${style.type}`}>{estate.typeEstates}</p>
                                <p className={`${style.address}`}>{estate.address}</p>
                                <p className={`${style.area}`}>{estate.area} م²</p>
                                <p className={`${style.chose}`}>{estate.typeEstateSR}</p>
                            </Link>
                        </div>
                    </div>

                ) : <h1>الحالة فارغة</h1>}
            </div>
        </div>
    )
}
