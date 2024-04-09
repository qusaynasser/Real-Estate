import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import style from './DisplayEst.module.css';
import './DetalisEstate.css';
import 'swiper/css';
import { Navigation,Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper,SwiperSlide} from 'swiper/react';

export default function DetalisEstate() {

    let [loading,setLoading]=useState(true);
    const {EstateId}=useParams();
    

    const stateDetails =async ()=>{
            // setLoading(true);
            const {data}=await axios.get(`https://estatetest.onrender.com/api/estate/all/${EstateId}`);
            console.log(data);
            setLoading(false);
            return data.estate;
    }
    const {data,isLoading} = useQuery("DetalisEstate",stateDetails);

    console.log(data);
    
    if(isLoading) {
        return <h1>Loading....</h1>
    }
    if(loading) {
        return <h1>Loading....</h1>
    }
  return (
    <div className='container mt-4 mb-5'>
        <div className="dd my-3 d-flex justify-content-between">
        <h1>{data.address}</h1>
        <h2>{data.price}$</h2>
        </div>
    <Swiper
    modules={[Navigation,Autoplay,Pagination]}
    spaceBetween={70}
    slidesPerView={2.2}
    navigation
    loop={false}
    // autoplay={{
    //     delay:2000
    // }}
    pagination={{
        clickable: true,
        el:'.swiper-custom-pagination',
    }}
    >
    <div className={`${style.disImg}`}>
    {data.imageUrl.map((imgs) => (
        <SwiperSlide className={`${style.imageItem}`} key={imgs}>
        <img src={imgs}  />
        </SwiperSlide>
    ))}
    </div>
    </Swiper>

    

    </div>
    
)
}
