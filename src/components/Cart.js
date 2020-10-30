import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {increase,decrease} from '../actions';
import PayPalButton from './PayPalButton';


const CartWrapper = styled.article`
max-width:1200px;
margin:0 auto;
padding-bottom:40px;
.cart-heading {
    padding:50px 0;
    font-size:2.6rem;
    text-align:center;
    text-transform:capitalize;
}
.cart-content {
    text-align:center;
}
.empty-cart {
    padding:40px 0;
    font-size:2rem;
    letter-spacing:1px;
    text-transform:uppercase;
    text-align:center;
    list-style:none;
}
.cart-product {
    width:300px;
    margin:0 auto 40px;
    padding:20px 0;
    border-bottom:1px solid var(--dark);


    @media screen and (min-width:992px){
        width:900px;
        display:flex;
        justify-content: space-between;
        align-items:center;
        }
        @media screen and (min-width:1200px){
        width:1200px;
        }

}
.cart-img-container {
margin:0 auto;
width:280px;
@media screen and (min-width:992px){
        margin:0;
}
}
.cart-img {
    width:100%;
}
.cart-title {
font-size:2rem;
padding-top:15px;
}
.cart-value-container {
font-size:1.5rem;
padding-top:15px;
}
.cart-value {
margin-right:1px;
}
.cart-amount-container {
    display:flex;
    justify-content: space-between;
    width:100px;
    margin:0 auto;
    padding-top:10px;
    align-items:center;
    @media screen and (min-width:992px){
        margin:0;
    }
    button {
        padding:10px;
        background-color: var(--dark);
        color: var(--white);
        transition: .3s opacity;
        cursor:pointer;
        &:hover,&:focus {
            opacity:.6;
        }
    }
}
.cart-amount {
font-size:2rem;
}
.cart-payment {
text-align:center;
}
.total-value-container {
font-size:2.6rem;
margin-bottom:1rem;
}
.total-value {
padding: 0 5px;
}

.form {
    width:260px;
    margin:0 auto;
    display:flex;
    flex-direction: column;
}
.terms-container {
    margin:25px 0 35px;
}
.terms-label {
    margin: 20px 5px;
    font-size:2rem;
}

a {
    font-size:1.8rem;
}
`
const Cart = ({products,totalValue,increase,decrease}) => {

    const inCartProducts = products.filter((product)=>{
        if (product.inCart) {
            return product;
        }
    })

    const renderContent = () => {
        if (inCartProducts.length ===0) {
            return <li className="empty-cart">your cart is empty</li>
        } else {
            return (
                <React.Fragment>
            <ul class="cart-content">
            {renderCartProducts()}
        </ul>
        <div className="cart-payment">
        <p className="total-value-container">Total:<span className="total-value">{totalValue}</span>$</p>
            <form className="form">
                <div className="terms-container">
                <input id="terms" type="checkbox"></input>
                <label className="terms-label" htmlFor="terms">Accept</label><a href="#">policy terms</a>
                </div>
                <PayPalButton/>
            </form>
        </div>
         </React.Fragment>
        )
        }
    }

    const renderCartProducts = () => {
        return inCartProducts.map((product)=>{
            if (product.amount === 0) {
                return null;
            }
            return (
                <li className="cart-product">
                    <div className="cart-img-container">
                        <img className="cart-img" src={product.img} alt="ds"></img>
                    </div>
                    <h4 className="cart-title">{product.name}</h4>
                    <p className="cart-value-container"><span className="cart-value">{product.price}</span>$</p>
                    <div className="cart-amount-container">
                        <button onClick={()=>{decrease(product)}}><span className="fas fa-minus"></span></button>
            <span className="cart-amount">{product.amount}</span>
                        <button onClick={()=>{increase(product)}}><span className="fas fa-plus"></span></button>
                    </div>
                </li>
            )
        })
    }

    return (

        <CartWrapper>
            <h2 className="cart-heading">Cart</h2>
            {renderContent()}
        </CartWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.cart.products,
        totalValue: state.cart.totalValue,
    }
}


export default connect(mapStateToProps,{increase,decrease})(Cart);