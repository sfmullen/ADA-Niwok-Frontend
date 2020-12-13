import React, { useState, useEffect } from "react";
import './ProductList.scss';
import Product from '../Product/Product';
import axios from 'axios';
import { useParams } from "react-router";
import {
    Link
} from 'react-router-dom';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { value } = useParams();

    useEffect(() => {
        axios.get(`https://ada-niwok.herokuapp.com/pedidos/comunidad/${value}`)
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
                            <div>
                                <Link to={`/DescripcionProducto/${p._id}`}>
                                    <Product key={p._id} title={p.name} foto={p.media} cantidad={p.cantidad} />
                                </Link>
                            </div>
                        )
                    })
                }
            </section>
        </React.Fragment>
    )
}

export default ProductList;
