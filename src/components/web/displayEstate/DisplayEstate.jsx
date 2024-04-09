import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import style from './DisplayEst.module.css';
import { Link } from 'react-router-dom';

export default function DisplayEstate() {
  const state="House";
  const displayEstatee = async () => {
    const { data } = await axios.get(`https://estatetest.onrender.com/api/estate/house?typeEatateS=Land&pageNumber=1 `);
    return data;
}
const { data, isLoading } = useQuery("displayEstate", displayEstatee);
console.log(data);
if (isLoading) {
    return <h1>Loading...</h1>
}
  return (
    <div className='container my-5'>

      <div className="row">
        {data.estates1.length? data.estates1.map((estate)=>
        
          <div className="col-md-3" key={estate._id}>
            <div className={`${style.card}`}>
            <Link to={`/ditalState/${estate._id}`}>
              <img src={estate.imageUrl} alt='Estate'/>
              <p className={`${style.price}`}>{estate.price} $</p>
              <p className={`${style.type}`}>{estate.typeEstates}</p>
              <p className={`${style.address}`}>{estate.address}</p>
              <p className={`${style.area}`}>{estate.area} m²</p>
              <p className={`${style.chose}`}>{estate.typeEstateSR}</p>
              </Link>
            </div>
          </div>
          
        ):<h1>State null</h1>}
      </div>
    </div>
  )
}
