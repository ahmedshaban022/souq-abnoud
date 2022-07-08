import React from 'react'
import Carousal from '../Carousal'
import Gallerys from '../Categories'
import Eid from '../events/Eid'
import Products from '../products/Products'

const Home = () => {
  return (
    <div className='homePage'>
      <div>
        <Eid/>
      </div>
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