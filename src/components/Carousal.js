import React, { useState } from 'react'
import Loader from './loader/Loader';

const Carousal = () => {

    const [carousalImgs,setCarousalImgs]=useState([
        "https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center-relaunch/en-us/general/brands/colgate-kids-regimen.png",
        "https://www.suave.com/sk-eu/content/dam/brands/suave/united_states_ofamerica/1232102-kids-sclp-originals-producthighlight-1440x1000-july2018.png.rendition.991.705.png",
        "https://img3.exportersindia.com/product_images/bc-full/dir_91/2706008/kids-products-1744146.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWuGsfT8GXRdsarX5vAMIclhfqVqfmq-CNXCa360CV5rRI7pieepyiBkVJCfvW_QOICFw&usqp=CAU",
    ]);


  return (
    <div
  id="carouselExampleControls"
  className="carousel slide container "
  data-bs-ride="carousel"
>
  <div className="carousel-inner ">
    {
        carousalImgs ? carousalImgs.map((img,index)=>(
            <div className={`carousel-item ${index===0?"active":""}`} key={index}>
      <img src={img} className="d-block w-100" alt="..." />
    </div>
        )):<div className='mt-3 p-3 d-flex justify-content-center'> 
        <Loader/>
      </div>
    }
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