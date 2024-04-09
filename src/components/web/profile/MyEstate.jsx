import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/User'
import { useQuery } from 'react-query';
import style from '../displayEstate/DisplayEst.module.css';

export default function MyEstate() {
    let {userToken}=useContext(UserContext);
    // let [loading,setLoading] = useState(true);
    const [userId, setUserId] = useState(() => {
        // Initialize userId from local storage or null if not present
        return localStorage.getItem('userId') || null;
    });

    useEffect(() => {
        if (userId) {
            // Store userId in local storage
            localStorage.setItem('userId', userId);
        }
    }, [userId]);

    
    const myEstate=async ()=>{
        try
        {   
            const {data}=await axios.get(`https://estatetest.onrender.com/api/estate/owner/${userId}`,
            {headers:{token:userToken}});
            return data;
            
            }
        
        catch(error)
        {
            console.log(error);
        }
    }
    const {data,isLoading}=useQuery("myEstate",myEstate);
    console.log(data);

    if(isLoading)
    {
        return <h1>Loading...</h1>
    }

  return (
    <div className='container my-5'>

      <div className="row">
        {data.estate.length? data.estate.map((estates)=>
          <div className="col-md-3" key={estates._id}>
            <div className={`${style.card}`}>
              <img src={estates.imageUrl} alt='Estate'/>
              <p className={`${style.price}`}>{estates.price} $</p>
              <p className={`${style.type}`}>{estates.typeEstates}</p>
              <p className={`${style.address}`}>{estates.address}</p>
              <p className={`${style.area}`}>{estates.area} m²</p>
              <p className={`${style.chose}`}>{estates.typeEstateSR}</p>
            </div>
          </div>
        ):<h1>State null</h1>}
      </div>
    </div>
  )
}
