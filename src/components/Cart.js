import React from 'react';
import styled from 'styled-components';
import photo from '../images/couch-with-pillows.jpg';
import {connect} from 'react-redux';
import {increase,decrease} from '../actions'


const CartWrapper = styled.article`
max-width:1200px;
margin:0 auto;
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
    width:350px;
    margin:0 auto 40px;;
    &:not(:last-child) {
        padding-bottom:20px;
        border-bottom:1px solid var(--dark);
    }
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
width:350px;
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
font-size:2.2rem;
margin-bottom:1rem;
}
.total-value {
padding: 0 5px;
}
.terms-form{

}
.terms-label {
    margin-left:1rem;
    font-size:2rem;
    a {
        color: blue;
        cursor:pointer;
    }
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
            <form className="terms-form">
                <input id="terms" type="checkbox"></input>
                <label className="terms-label" for="terms">Accept <a>policy terms</a></label>
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