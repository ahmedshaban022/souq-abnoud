
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/pages/Home';
import { DataProvider } from './Globalstate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AdminLogin from './components/pages/AdminLogin';
import AdminDashBoard from './components/pages/AdminDashBoard';
function App() {
  return (
    <div className="App">
      
      <DataProvider>
    <BrowserRouter >
      <Header/>
      <Routes >

        <Route path='souq-abnoud/' exact element={<Home/>} />
        <Route path='souq-abnoud/admin'exact  element={<AdminLogin/>} />
        <Route path='souq-abnoud/admin-panel' exact element={<AdminDashBoard/>} />

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
    </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
