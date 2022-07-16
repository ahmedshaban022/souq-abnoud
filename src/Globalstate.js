import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";


export const Globalstate = createContext();


export const DataProvider =({children})=>{
    const [categories,setCategories]=useState([]);
    const [products,setProducts]=useState([]);
    const [originalProducts,setOriginalProducts]=useState([]);
    const [callBack,setCallBack]=useState(false);

    useEffect(() => {
        const fetchData=async()=>{
            const cateResult = await axios.get("https://souq-abnod.herokuapp.com/api/categories");
            const {data} = await axios.get("https://souq-abnod.herokuapp.com/api/products");
            
            setCategories(cateResult.data.data);
            setProducts(data.data);
            setOriginalProducts(data.data);
            toast.success("أهلاً بكم في سوق أبنود")
            
        
        }
        fetchData();
    },[callBack])

    const state={
        categories: [categories,setCategories],
        products: [products,setProducts],
        originalProducts:[originalProducts,setOriginalProducts],
        callBack:[callBack,setCallBack]
    }


    return (
        <Globalstate.Provider value={state} >
            {children}
        </Globalstate.Provider>
    )

}