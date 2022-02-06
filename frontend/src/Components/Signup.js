import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {

  const [name ,setName] = useState();
     const [city ,setCity] = useState();
     const [email ,setEmail] = useState();
     const [password ,setPassword] = useState();
     
     const Navigate = useNavigate()
           
      
// Fetching Api from Backend ....
// Post Api Used in Backend 
      const Register =  async()=>{
         console.log(name,city,email,password)

         let result = await fetch("http://localhost:5000/register",{
             method:'post',
             body:JSON.stringify({name,city,email,password}),
             headers:{
                 'Content-Type':'application/json'
             }
         });
         result = await result.json();
         console.log(result);
         localStorage.setItem('users',JSON.stringify(result))
         if(result)
         {
             alert(`${name} Successfully Registerd...`)
         }
         Navigate('/login')
     }



  return(
      <>
          
      <div className='card mt-5 w-75 mx-auto md:max-w-xl text-center  sm:text-center'>
        <div className='card-body'>
 
        <div className='mt-3 w-64 mx-auto md:max-w-xl text-center  sm:text-center'>

          <h1 className='text-2xl text-center font-bold'>SignUp</h1>
          <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter Name" />
          <input type="text" name="city" value={city} onChange={(e)=>setCity(e.target.value)}  class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter City" />
          <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter EmailId" />
          <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter Password" />
          <button onClick={Register} className=' mt-3 py-2 px-5 bg-blue-400 rounded-md hover:bg-blue-500 text-white border-slate-400'>Register</button>


        </div>

      </div>
    </div>

      </>
  )
};

export default Signup;
