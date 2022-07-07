import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Globalstate } from '../../Globalstate';

const Product = ({prd}) => {

  const [isAdmin,setIsAdmin]=useState(false);
  const state=useContext(Globalstate);
   
  const [products,setProducts]=state.products;

  useEffect(()=>{
    if(localStorage.getItem("token")) {setIsAdmin(true)}
},[]);



const removeImage = async (prd) => {

  try {
    let res = await axios.post(
      "/api/image/destroy",
      { public_id: prd.img.public_id },
      { headers: { token: localStorage.getItem('token') } }
    );
  
  } catch (error) {
    toast.error(error.response.data.msg);
  }
};


  const deletProduct=async(prd)=>{
    if(!window.confirm("انت متأكد عاوز تمسح المنتج ده ياسطا ؟")) return false;
      if(!isAdmin) return false;
      try {
        await removeImage(prd);
        await axios.delete('/api/products/'+prd._id,{headers:{token:localStorage.getItem("token")}})
        toast.success("Product Deleted");
        setProducts(products.filter(prod=>prod._id!==prd._id));
      } catch (error) {
        toast.error('Error')
      }
  }
  return (
    <div className='col-md-6 col-lg-4 col-sm-12 my-3 '>

    <div className="card  m-auto bg-light " style={{ width: "18rem" }}>
    <img src={prd.img.url} className="card-img-top prd-img" style={{height:"300px"}} alt="..." />
    <div className = "card-body">
       
        <div  className = "card-text ">
       <div className='d-flex justify-content-between'>
       <p className='text-danger fw-bold'>{prd.title}</p>
        <p className='fw-bold text-secondary'> السعر : {prd.price} جنيه</p>   
       </div>
        <p >{prd.description}</p>   
        <p className='text-muted' >{prd.category}</p>   
            
        </div>
          {isAdmin&&<button className='btn btn-danger' onClickCapture={()=>deletProduct(prd)}>Remove</button>}
    </div>
    </div>
    </div>
  )
}

export default Product