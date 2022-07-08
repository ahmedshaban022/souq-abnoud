import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import "./login.css"
const AdminLogin = () => {



    useEffect(()=>{
        if(localStorage.getItem("token")) return window.location.replace('/');
    },[])


    const [admin,setAdmin]=useState({});


    const handlOnChange=({target})=>{

        setAdmin({...admin,[target.name]:target.value})
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        
       if(!admin.userName || !admin.password) {
            toast.warning("UserName And Password Are Required")
            return false
       }else{
        try {
            
            const {data} = await axios.post('https://souq-abnod.herokuapp.com/api/admin',{...admin});
           localStorage.setItem('token',data.token)
            toast.success("Welcom Admin");
            window.location.replace("/");
        } catch (error) {
            toast.error("UserName or Password is wrong")
        }
       }
    }

  return (
    <div className='loginPage'>
        <div className='container d-flex justify-content-center mt-5 pt-5'>

        <form onSubmit={handleSubmit} className="w-50">
  <div className="form-floating mb-3">
    <input
      type="text"
      className="form-control"
      id="floatingInput"
      placeholder="example"
      name='userName'
      onChange={handlOnChange}
    />
    <label htmlFor="floatingInput">User Name</label>
  </div>
  <div className="form-floating">
    <input
      type="password"
      className="form-control"
      id="floatingPassword"
      placeholder="Password"
      name='password'
      onChange={handlOnChange}
    />
    <label htmlFor="floatingPassword">Password</label>
  </div>
  <div>
  <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
  </div>
</form>
        </div>
    </div>
  )
}

export default AdminLogin