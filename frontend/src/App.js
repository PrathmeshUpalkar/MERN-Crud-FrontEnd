import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProducts from './Components/AddProducts'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Product from './Components/Product';
import Update from './Components/Update';
import Navbar from './Components/navbar';

const App = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/addproduct' element={<AddProducts />}></Route>
          {/* <Route path='/about' element={<AddProducts/>}></Route> */}
          <Route index path='/' element={<Login />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/product' element={<Product />}></Route>


        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
