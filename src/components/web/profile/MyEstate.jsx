import axios from 'axios'
import React, { useContext,useState } from 'react'
import { UserContext } from '../context/User'
import { useQuery } from 'react-query';
import style from '../house/DispalyH.module.css';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

export default function MyEstate() {
    let {userToken,userId}=useContext(UserContext);
    
    const [isSold, setIsSold] = useState(false);

    const toggleButton =async () => {
      const {data}=await axios.put(`https://estatetest.onrender.com/api/estate/${userId}`,isSold,
      {headers:{token:userToken}});
        console.log(data);
        if(data.estate.activated)
        {
          setIsSold(!isSold);
        }
    };

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

    const deletEstate = async (EstateId)=>{
      // setLoading(true);
      const {data}=await axios.delete(`https://estatetest.onrender.com/api/estate/${EstateId}`,
      {headers:{token:userToken}});
      console.log(data);
      if(data.message=="success")
      {
        swal("Deleted Success!", "You clicked the button!", "success");
        
        setTimeout(()=>{
          window.location.reload();
        },3000)
      }
    }

    if(isLoading)
    {
     return <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>  
    }

  return (
    <div className='container my-5'>

      <div className="row">
        {data.estate.length? data.estate.map((estates)=>
          <div className="col-md-3" key={estates._id}>
            <div className={`mt-3 ${style.card}`}>
              <Link to={`/ditalState/${estates._id}`}>
              <img src={estates.imageUrl[0]} alt='Estate'/>
              </Link>
              <p className={`${style.price}`}>{estates.price} $</p>
              <p className={`${style.type}`}>{estates.typeEstates}</p>
              <p className={`${style.address}`}>{estates.address}</p>
              <p className={`${style.area}`}>{estates.area} m²</p>

              <div className={`${style.btnDelete}`}>
                <p className={`${style.chose}`}>{estates.typeEstateSR}</p>
                <button type="button" className="btn btn-danger" onClick={()=>deletEstate(estates._id)}>Delete</button>
              </div>
              
                  <div className="App">
                      <button onClick={toggleButton} className={`toggle-button ${isSold ? 'active' : ''}`}>
                        {isSold ? 'SOLD' : 'NOT SOLD'}
                      </button>
                  </div>
            </div>
          </div>
        ):<h1>State null</h1>}
      </div>
    </div>
  )
}
