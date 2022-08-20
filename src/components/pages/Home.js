import React, { useContext, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Globalstate } from '../../Globalstate'
import Carousal from '../Carousal'
import Gallerys from '../Categories'
import Eid from '../events/Eid'
import Products from '../products/Products'

const Home = () => {
  const state=useContext(Globalstate);
  const [theam]=state.theam
  return (
    <div className='homePage' style={{backgroundColor:theam==="dark"?"black":"white"}}>
    
      <div  className=''>

      <Carousal/>
      </div>

      <div className='mt-5'>

      <Gallerys/>
      </div>
      <Products  />

    </div>
  )
}

export default Home