import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/action/projectActions";
import { useDispatch } from "react-redux";



const ProductListing =()=> { 
    const products =useSelector(state => state.allProducts.products);
    const dispatch = useDispatch()
    console.log('Products', products);
    


    const fetchProducts = async () => {
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log('Err', err);
        })
        dispatch(setProducts(response.data));
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    
    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    );
};

export default ProductListing;