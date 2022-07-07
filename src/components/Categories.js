import React, { useContext, useEffect, useState } from 'react'
import { Globalstate } from '../Globalstate'
import Loader from './loader/Loader';

const Categories = () => {

  const state=useContext(Globalstate);
     const [categories,setCategories]=state.categories;
     const [products,setProducts]=state.products;
     const [originalProducts,setOriginalProducts]=state.originalProducts;
     const [selectedCategory,setSelectedCategory]=useState("All")
     const [callBack,setCallBack]=state.callBack;

     useEffect(()=>{
       if( !categories){
         setCallBack(!callBack)
       }
       if(selectedCategory==="All"){
        setProducts([...originalProducts])
       }
       else{
        setProducts(originalProducts.filter(prd=>prd.category===selectedCategory))
       }
     },[callBack,selectedCategory]);


  return (
    <div className='container text-center  p-3  '>
        
            
            <div className='row gap-2 justify-content-center'>
             {

            }
                {
                  categories ? categories.map((category,index)=>(
                    <div className='fw-bold  rounded  text-white col-md-2 col-3 ' style={{backgroundColor:selectedCategory===category.categoryName ? "orange":"teal",cursor:"pointer"}}  key={index} onClick={()=>setSelectedCategory(category.categoryName)}> {category.categoryName} </div> 
                    )) :<div className='d-flex justify-content-center'> 
                    <Loader/>
                  </div>
                  }
                  

                   <div className='fw-bold  rounded   text-white col-md-2   col-3 px-1'  style={{backgroundColor:selectedCategory==="All"?"orange":"teal",cursor:"pointer"}} onClick={()=>setSelectedCategory("All")}> كل المنتجات </div> 
                  
            </div>
      


    </div>
  )
}

export default Categories