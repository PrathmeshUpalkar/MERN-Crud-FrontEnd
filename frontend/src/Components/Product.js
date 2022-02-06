import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {

    const [product, setProduct] = useState([]);

    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/get-product");
        result = await result.json();
        setProduct(result);

    }
    useEffect(() => {
        getProducts();
    }, []);

    const deleteProduct = async (id) => {
        console.log(id)
        let result = await fetch(`http://localhost:5000/delete-product/${id}`, {
            method: "Delete"

        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    }

    return (
        <>
            <h1 className='mt-5 text-2xl text-center font-bold'>Product-List</h1>

            <table className=" card mt-5 w-100 mx-auto md:max-w-2xl text-center  sm:text-center  table table-bordered table-striped text-center mt-5">
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Price</th>
                        <th scope="col">Option</th>

                    </tr>
                </thead>

                {
                    product.map((item, index) =>

                        <tbody>
                            <tr>
                                <td>{index + 1} </td>
                                <td>{item.name}</td>
                                <td>{item.brand}</td>
                                <td>{item.price}</td>
                                <td>

                                    <button className=' py-2 px-3 bg-blue-400 rounded-md hover:bg-blue-500 text-white border-slate-400'> <Link to={"/update/" + item._id} >Update </Link> </button>&nbsp;&nbsp;

                                    <button onClick={() => deleteProduct(item._id)} className='py-2 px-3 bg-red-500 rounded-md hover:bg-red-600 text-white border-slate-400'>Delete</button>
                                </td>
                            </tr>

                        </tbody>

                    )}
            </table>
        </>

    );
}

export default Product;


