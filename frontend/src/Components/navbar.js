import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {

  const auth = localStorage.getItem('user');
  const Navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
      Navigate('/')
  }
  return (
    <>

      <div className='nav container-fluid bg-blue-400'>

        {
          auth ?

            <ul className='flex  ml-5 text-white'>
              <li className='text-lg'><Link to={'/product'}> Product</Link></li>&nbsp;&nbsp;
              <li className='text-lg' ><Link to={'/addproduct'}>AddProducts</Link></li>&nbsp;&nbsp;
              <li> <Link onClick={logout} to="/">Logout ({JSON.parse(auth).name})</Link></li>

            </ul>
            : <ul className='flex  ml-5 text-white'>

              <li className='text-lg'><Link to={'/'}>Login</Link></li>
              <li className='text-lg'><Link to={'/signup'}>SignUp</Link></li>


            </ul>}
      </div>

    </>
  )

};

export default Navbar;
