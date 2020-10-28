import React from 'react';
import styled from 'styled-components';
import products from '../data/products';
import {Link} from 'react-router-dom';


const DetailsWrapper = styled.article`
max-width:1200px;
margin:0 auto;

h2 {
    padding:50px 0;
    font-size:2.6rem;
    text-align:center;
    text-transform:capitalize;
}
.details {
    margin:0 15px;
    @media screen and (min-width:992px) {
        display:flex;
        align-items:center;
    }
    .details-img-container {
        max-width:350px;
        margin:0 auto;
        .details-img {
            width:100%;
        }
    }
    .details-content-container {
        text-align:center;
        @media screen and (min-width:992px) {
        padding:0 30px;
        }
        .details-heading {
            font-size:2.2rem;
            padding:15px 0;
        }
        .details-description {
            font-size:1.4rem;
        }
        .details-value-container {
            padding:10px 0;
            font-size:2.4rem;
        }
        .details-value {
            margin-right:2px;
        }
        .details-buttons-container {
            display:flex;
            justify-content:space-between;
            width:240px;
            margin:0 auto;
            .details-button-add {
                padding:8px 0;
                width:100px;
                background-color: var(--dark);
                color: var(--white);
                transition: .3s color,.3s background-color;
                cursor:pointer;
                &:hover,&:focus {
                    background-color: var(--white);
                    color: var(--dark);
                    border:1px solid var(--dark);
                }
                }
            .details-button-back {
                padding:8px 0;
                width:100px;
                background-color:transparent;
                border:1px solid var(--dark);
                transition:.3s background-color;
                cursor:pointer;
                a {
                    color: var(--dark);
                }
                &:hover,&:focus {
                    background-color: var(--dark);
                    a {
                        color: var(--white);
                    }
                }
                
                
            }
        }

    
    }
}

`

const ProductDetails = (props) => {
    const {name,price,img,inCart} = products[props.match.params.id - 1];
    const renderButton = () => {
        if (inCart === false) {
            return <button className="details-button-add">Add to cart</button>
        }
        else {
            return <button className="details-button-add" disabled>Add to cart</button>
        }
    }
    return (
        <DetailsWrapper>
            <h2>product details</h2>
            <div className="details">
                <div className="details-img-container">
                    <img className="details-img" src={img} alt={`product-${name}`}></img>
                </div>

                <div className="details-content-container">
                    <h4 className="details-heading">{name}</h4>
                    <p className="details-description">Lorem lorem reomsad faovmsd xzjidsad Lorem lorem reomsad faovmsd xzjidsad Lorem lorem reomsad faovmsd xzjidsad Lorem lorem reomsad faovmsd xzjidsad</p>
                    <p className="details-value-container"><span className="details-value">{price}</span>$</p>
                    <div className="details-buttons-container">
                    {renderButton()}
                    <button className="details-button-back">
                        <Link to="/">
                        Back to home
                        </Link>
                        </button>
                    </div>
                </div>

            </div>

        </DetailsWrapper>
    )
}

export default ProductDetails;