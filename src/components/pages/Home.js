import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import Carousal from '../Carousal'
import Gallerys from '../Categories'
import Eid from '../events/Eid'
import Products from '../products/Products'

const Home = () => {

  return (
    <div className='homePage'>
    
      <div  className=''>

      <Carousal/>
      </div>

      <div className='mt-5'>

      <Gallerys/>
      </div>
      <Products/>

    </div>
  )
}

export default Home