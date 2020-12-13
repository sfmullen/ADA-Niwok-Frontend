import React, { useEffect, useState } from "react";
import './DescriptionProductView.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import HeadProduct from '../HeadProduct/HeadProduct';
import DescriptionProduct from '../DescriptionProduct/DescriptionProduct';
import DowloadProduct from '../DowloadProduct/DowloadProduct';
import axios from 'axios';
/* import { useParams } from "react-router"; */

const DescriptionProductView = () => {
    const [product, setProduct] = useState({});
    /*  const { value } = useParams(); */

    useEffect(() => {
        axios.get(`https://ada-niwok.herokuapp.com/pedidos/5fd50eb57b39fa280841b87a`)
            .then(res => {
                setProduct(res.data.pedido);
                console.log(`que trae ${res.data.pedido.name}`)
            })
            .catch(err => alert(`Error! ${err}`));
    }, []);

    return (
        <React.Fragment>
            <HeadProduct imagen={product.media} cantidad={product.cantidad} />
            <section className="container-product">
                <DescriptionProduct name={product.name} descripcion={product.descripcion} imagen={product.media} especificaciones={product.especificaciones} />
                <DowloadProduct />
            </section>
            <button type="button" className="btn-back">
                <FontAwesomeIcon icon={faSearch} />
                Volver a Productos
            </button>
        </React.Fragment>
    )
};

export default DescriptionProductView;



