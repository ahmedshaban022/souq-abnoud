import React, { useState } from 'react'
import Loader from './loader/Loader';


const Carousal = () => {

    


  return (
    <div
  id="carouselExampleControls"
  className="carousel slide container mt-3"
  data-bs-ride="carousel"
>
  <div className="carousel-inner ">
    
       
      <div className={`carousel-item active `} >
      <img src={require("../images/a1.jpeg")} className="d-block w-100" alt="..." />
    </div>

     <div className={`carousel-item `} >
     <img src={require('../images/a2.jpeg')} className="d-block w-100" alt="..." />
   </div>

   <div className={`carousel-item `} >
     <img src={require('../images/a3.jpeg')} className="d-block w-100" alt="..." />
   </div>

   <div className={`carousel-item `} >
     <img src={require('../images/a4.jpeg')} className="d-block w-100" alt="..." />
   </div>
   <div className={`carousel-item `} >
     <img src={require('../images/a5.jpeg')} className="d-block w-100" alt="..." />
   </div>
        
    
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

  )
}

export default Carousal