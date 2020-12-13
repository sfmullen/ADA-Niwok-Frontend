import React from "react";
import './ProductList.scss';
import Product from '../Product/Product';
/* import axios from 'axios';

const App = () => {
    const [products, setProducts] = useState([]);
   

const getProducts = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
    } catch (err) {
        alert(`Error getting users: ${err}`);
    }
};

useEffect(() => {
    getProducts();
}, [products]);

useEffect(() => {
    axios.get( "https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            setPosts(res.data);

        })
        .catch(err => alert(`Error! ${err}`));
}, []);*/

const ProductList = () => {
    return (
        <React.Fragment>
            <section className="ProductList-Container">
                {/* {
                    products.map(post => {
                        const user = users.find(user => post.userId === user.id) || { name: "Unknown" };
                        return (
                            <Product key={post.id} title={post.title} user={user}>
                                {post.body}
                                <button>Hola soy un boton</button>
                            </Product>
                        )
                    })
                } */}
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </section>
        </React.Fragment>
    )
};

export default ProductList;
