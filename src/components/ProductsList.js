import React from 'react';
import styled from 'styled-components';
import products from '../data/products';
import Product from './Product';

const ProductsListWrapper = styled.article`
max-width:1200px;
margin:0 auto;
.products-list-title {
    padding:50px 0;
    font-size:2.6rem;
    text-align:center;
}
.products-list {
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
}
`


export const ProductsList = () => {
    const renderProducts = () => {
        return products.map((product)=> {
            return <Product key={product.id} product={product} />
        })
    }    
    return (
        <ProductsListWrapper>
            <h3 className="products-list-title">Our products</h3>
            <ul className="products-list">
                {renderProducts()}
            </ul>
        </ProductsListWrapper>
    )
}

export default ProductsList;