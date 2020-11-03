import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';

const NavigationWrapper = styled.nav`
background-color: var(--white);
.nav-container {
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:1200px;
    margin:0 auto;
    padding: 20px;
    .nav-cart-button {
        position:relative;
        padding: 8px;
        background-color:transparent;
        cursor:pointer;
        .nav-cart-icon {
            font-size:3rem;
        }
        .nav-cart-amount {
            position:absolute;
            top:0;
            right:0;
            width:16px;
            height:16px;
            border-radius:50%;
            font-size:14px;
            color:var(--white);
            background-color:var(--dark);
        }
    }
}
h1 {
    padding: 8px 20px;
    font-size:2rem;
    font-weight:400;
        background-color: var(--dark);
    color: var(--white);
    transition: .3s opacity;
    cursor:pointer;
    &:hover,&:focus {
        opacity:0.8;
    }

}       
`

const Navbar = ({totalAmount}) => {
    return (
            <NavigationWrapper>
                <div className="nav-container">
                <Link to="/"><h1>furnitur-e-shop</h1></Link>
                <Link to="/cart">
                    <button className="nav-cart-button">
                        <span className="fas fa-shopping-bag nav-cart-icon"></span>
                            <span className="nav-cart-amount">{totalAmount}</span>
                        </button>
                </Link>
                </div>
            </NavigationWrapper>
    )
}


const mapStateToProps = (state) => {
    return {
        totalAmount: state.cart.totalAmount
    }
}

export default connect(mapStateToProps)(Navbar);
