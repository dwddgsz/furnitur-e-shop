import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const ProductWrapper = styled.li`
width:260px;
margin:0 20px 40px;
text-align:center;
.product-img-container {
    width:100%;
    overflow:hidden;
    cursor:pointer;
    &:hover .product-img {
        transform: scale(1.1);
    }
    .product-img {
        height:180px;
        display:block;
        width:100%;
        filter: brightness(80%);
        transition: transform .4s;
    }
}
.product-title {
    padding-top:15px;
    font-size:2rem;
    text-transform:capitalize;
}
p {
    padding-top: 10px;
}

.product-button {
    margin-top:10px;
    padding: 8px 15px;
    background-color: var(--dark);
    color: var(--white);
    transition: .3s opacity;
    cursor:pointer;
    &:hover,&:focus {
        opacity:.6;
    }
}

`
export const Product = ({product}) => {
    const {id,name,price,img,inCart} = product;
    const inCartRender = () => {
        if(inCart === true) {
            return <button className="product-button" disabled>In cart</button>
        }
        else {
            return <button className="product-button">Add to cart</button>
        }
    }
    return (
        <ProductWrapper>
        <div className="product-img-container">
        <Link to={`/product/${id}`}>
            <img className="product-img" src={img} alt={`product-${img}`}></img>
        </Link>
            </div>
        <h4 className="product-title">{name}</h4>
        <p><span className="product-value">{price}</span>$</p>
        {inCartRender()}
    </ProductWrapper>
    )
}


export default Product;