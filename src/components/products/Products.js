import React, { useContext, useEffect, useState } from 'react';
import { Globalstate } from '../../Globalstate';
import Loader from '../loader/Loader';
import Product from './Product';

const Products = () => {
    const state=useContext(Globalstate);
    const [searchQuerry,setSearchQuerry]=useState("")
    const [products,setProducts]=state.products;
    const [originalProducts,setOriginalProducts]=state.originalProducts;
    const [callBack,setCallBack]=state.callBack; 
    const [productsCopy,setProductsCopy]=[...products]


      useEffect(()=>{
        if(!products  ){
          
          setCallBack(!callBack);
          
        }
      },[callBack,products]);



      const handleSearch=()=>{    
        if(searchQuerry) {
          setProducts(originalProducts.filter((prd)=>{        
            return prd.title.toLowerCase().includes( searchQuerry.toLowerCase())
          }));
      }
      else{
        setProducts([...originalProducts])
      }
    }
      
  return (
    <div className='container bg-light  py-3'>


      <div className="input-group mb-3 w-50 m-auto ">
        <span className="input-group-text" id="basic-addon1" style={{cursor:"pointer"}} onClick={handleSearch}>بحث</span>
        <input type="text" className="form-control" onChange={(e)=>setSearchQuerry(state=>e.target.value)} placeholder="اسم المنتج" aria-label="Username" aria-describedby="basic-addon1" />
      </div>


        <div className='container row   text-center'>
        {
            products.length>0 ? products.map((prd,i)=>(
            
                <Product key={i} prd={prd}/>
               
                )):<div className='d-flex justify-content-center'> 
                  <Loader/>
                </div>
        }
        </div>

    </div>
  )
}

export default Products