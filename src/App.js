
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/pages/Home';
import { DataProvider } from './Globalstate';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom'
import AdminLogin from './components/pages/AdminLogin';
import AdminDashBoard from './components/pages/AdminDashBoard';
import { useEffect } from 'react';
import EditProduct from './components/products/EditProduct';
function App() {
  useEffect(()=>{
    toast.success("أهلاً بكم في سوق أبنود")
            
  },[])
  return (
    <div className="App">
      
      <DataProvider>
    <HashRouter >
      <Header/>
      <Routes >

        <Route path='/' exact element={<Home/>} />
        <Route path='/admin'exact  element={<AdminLogin/>} />
        <Route path='/admin-panel' exact element={<AdminDashBoard/>} />
        <Route path='/edit/:id' exact element={<EditProduct/>} />

      </Routes>
      <Footer/>

      <ToastContainer
          position="top-left"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
    </HashRouter>
      </DataProvider>
    </div>
  );
}

export default App;
