

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Globalstate } from '../../Globalstate';
import Loader from '../loader/Loader';

const AdminDashBoard = () => {
  const state=useContext(Globalstate);
  useEffect(()=>{
    if(!state.products) navigate('/');
    
  },[state])
  const [categories,setCategories]=state.categories;
  const [products,setProducts]=state.products;
  const [callBack,setCallBack]=state.callBack;
  const [originalProducts,setOriginalProducts]=state.originalProducts;
  const [product,setProduct]=useState({});
  const [img,setImg]=useState();
  const[loading,setLoading]=useState(false)

  const navigate = useNavigate();
  const {id}=useParams();
  const getProduct=()=>{
        for(let i=0; i<products.length; i++){
          if(products[i]._id===id){
            setProduct({...products[i]});
            setImg(products[i].img)
          }
        }
      }
      useEffect(()=>{
       
        getProduct();
      },[])

useEffect(()=>{
  if(!products ){
    setCallBack(!callBack)
  }
},[])


const handlOnChange=({target})=>{

  setProduct({...product,[target.name]:target.value});

}

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!product.category || !product.title || !product.description || !img){
      toast.warning("All inputs are required");
      return false;
    }
    try {
    const {data} =await axios.patch('https://souq-abnod.herokuapp.com/api/products/'+product._id,{...product,img},{headers:{token:localStorage.getItem('token')}})
      
      toast.success("Product Edited");
      setCallBack(!callBack);
      navigate('/');
    } catch (error) {
      toast.error("Error !");
      return false
    }
  }


// img
const removeImage = async () => {
  setLoading(true);
  try {
    let res = await axios.post(
      "https://souq-abnod.herokuapp.com/api/image/destroy",
      { public_id: img.public_id },
      { headers: { token: localStorage.getItem('token') } }
    );
    if (res) {
      setLoading(false);
      setImg(false);
    }
  } catch (error) {
    toast.error(error.response.data.msg);
  }
};





const handleUploadImg = async (e) => {
  setLoading(true);
  const file = e.target.files[0];
  if (!file) return toast.error("File not exist");
  if (file.size > 1024 * 1024)
    return toast.error("File size is larger than 1 MB");
  if (file.type !== "image/jpeg" && file.type !== "image/png")
    return toast.error("File format is incorrect");
  try {
    let formData = new FormData();
    formData.append("file", file);
    let res = await axios.post("https://souq-abnod.herokuapp.com/api/image/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        token: localStorage.getItem('token') 
      },
    });
    setImg(res.data);
    setLoading(false);
  } catch (err) {
    setLoading(false);
    toast.error(err.response.data.msg);
  }
  setLoading(false);
};




// const handlAddCategory=async()=>{
//   if(!newCategory){toast.warning("Category Name is required"); return false;}
  
//   try {
//     const {data}= await axios.post("https://souq-abnod.herokuapp.com/api/categories",{categoryName:newCategory},{headers:{token:localStorage.getItem('token')}})
//     toast.success("Category Added"); 
//     setCategories([...categories,data.data])
//   } catch (error) {
//     toast.error("Error adding Category")
//   }
// }


// const handleDeleteCategory=async(cate)=>{
//   if(!window.confirm("انت متأكد عاوز تمسح الكاتيجوري ده ياسطا ؟")) return false;
//   try {
//     await axios.delete('https://souq-abnod.herokuapp.com/api/categories/'+cate._id,{headers:{token:localStorage.getItem('token')}});
//     toast.success("Category Deleted");
//     setCategories(categories.filter(c=>c._id!==cate._id));
    
//   } catch (error) {
//     toast.error("Error on deleteding category")
//   }
// }





  return (
    product.title &&
      <>
      <div className='container m-5'>
      <div className='d-flex justify-content-center mt-3'>
      <form onSubmit={handleSubmit} className="w-50">
  <div className="form-floating mb-3">
    <input
      type="text"
      className="form-control"
      id="floatingInput"
      placeholder="example"
      name='title'
      onChange={handlOnChange}
      value={product.title}
    />
    <label htmlFor="floatingInput">Product Title</label>
  </div>
  <div className="form-floating">
    <input
      type="text"
      className="form-control"
      id="floatingPassword"
      placeholder="Product Description"
      name='description'
      onChange={handlOnChange}
      value={product.description}
    />
    <label htmlFor="floatingPassword">Product Desription</label>
  </div>

  <div className="form-floating mt-3">
    <input
      type="number"
      min={1} max={1000000}
      className="form-control"
      id="floating-price"
      placeholder="Product Description"
      name='price'
      onChange={handlOnChange}
      value={product.price}
    />
    <label htmlFor="floating-price">Product Price</label>
  </div>
    <div className='mt-3'>
    <select onChange={handlOnChange} className="form-select" name='category' aria-label="Default select example">
        <option  value={0}>Select Category</option>
        {
          categories && categories.map((category,i)=>(
            <option key={i} selected={product.category===category.categoryName} value={category.categoryName}>{category.categoryName}</option>
          ))
        }
        </select>
    </div>

    <div className="my-3">
   
{loading ? (
            <div className=" row ">
              <div className="col-12 d-flex justify-content-center">
              <Loader />
              </div>
              </div>
              ) : (
            img && (
              <div className=" ">
                <div className='text-center'>
                  <button
                    className="btn btn-danger mb-2 rounded-circle "
                    onClick={removeImage}
                  >
                    &times;
                  </button>
                </div>
                <img
                  style={{ width: "400px", height: "400px" }}
                  className="   rounded-circle"
                  src={img.url}
                />
              </div>
            )
          )}
          <div>
            <label htmlFor="formFileLg" className="form-label">
             Product Photo
            </label>
            <input
              className="form-control form-control-lg"
              name="dish-image"
              onChange={handleUploadImg}
              id="formFileLg"
              type="file"
              accept="image/png, image/jpeg"
            />
          </div>

          


      </div>


  <div>
  <button type="submit" className="btn btn-primary w-100 mt-3">Save</button>
  </div>
</form>
</div>
      </div>
      
      </>
    
      )
}

export default AdminDashBoard

