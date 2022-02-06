import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Update = () => {


    const [name, setName] = useState();
    const [brand, setBrand] = useState();
    const [price, setPrice] = useState();
    const Navigate = useNavigate();
    const param = useParams();

    useEffect(() => {
        getDetails();
    }, [])

    const getDetails = async () => {

        let result = await fetch(`http://localhost:5000/get-product/${param.id}`);
        result = await result.json();
        setName(result.name);
        setBrand(result.brand);
        setPrice(result.price);

    }

    const updateData = async () => {

        console.log(param.id)
        let result = await fetch(`http://localhost:5000/update/${param.id}`, {
            method: 'put',
            body: JSON.stringify({ name, brand, price }),
            headers: {
                'Content-Type': 'application/json'
            }

        });
        result = await result.json();
        if (result) {
            Navigate('/product');
        }

    }

    return (
        <>
            <div className='card mt-5 w-75 mx-auto md:max-w-xl text-center  sm:text-center'>
                <div className='card-body'>

                    <div className='mt-3 w-64 mx-auto md:max-w-xl text-center  sm:text-center'>

                        <h1 className='text-2xl text-center font-bold'>Update Product</h1>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter Product Name" />
                        <input type="text" name="brand" value={brand} onChange={(e) => setBrand(e.target.value)} class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter Product Brand" />
                        <input type="email" name="price" value={price} onChange={(e) => setPrice(e.target.value)} class="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter Product Price" />
                        <button onClick={updateData} className=' mt-3 py-2 px-5 bg-blue-400 rounded-md hover:bg-blue-500 text-white border-slate-400'>Update</button>


                    </div>

                </div>
            </div>

        </>
    )
};

export default Update;
