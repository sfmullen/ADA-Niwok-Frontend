import React, { useState, useEffect } from "react";
import './ProductList.scss';
import Product from '../Product/Product';
import axios from 'axios';


const ProductList = () => {
    const [products, setProducts] = useState([]);

    /*  const getProducts = async () => {
         try {
             const res = await axios.get(`https://ada-niwok.herokuapp.com/pedidos/comunidad/3`);
             console.log(`que trae ${res.data, products}`)
             setProducts(res.data);
             console.log(`que trae ${res.data, products}`)
             return res.data;
 
         } catch (err) {
             alert(`Error getting products: ${err}`);
         }
     }; */

    useEffect(() => {
        axios.get(`https://ada-niwok.herokuapp.com/pedidos/comunidad/5`)
            .then(res => {
                setProducts(res.data.pedido);
            })
            .catch(err => alert(`Error! ${err}`));
    }, []);

    return (
        <React.Fragment>
            <section className="ProductList-Container">
                {
                    products.map(p => {
                        return (
                            <Product key={p.id} title={p.name} foto={p.media} cantidad={p.cantidad} />
                        )
                    })
                }
            </section>
        </React.Fragment>
    )
}

export default ProductList;
