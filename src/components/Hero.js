import React from 'react';
import styled from 'styled-components';
import heroBgc from '../images/hero-small.jpg'

const HeroWrapper = styled.header`
display:flex;
justify-content:center;
align-items:flex-end;
height: calc(100vh - 86px);
max-width:2000px;
margin:0 auto;
background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${heroBgc});
background-repeat:no-repeat;
background-position:center;
background-size:cover;
/* media */
@media screen and (min-width:700px) {
justify-content:flex-start;
align-items:center;
}

.hero-text-container {
    padding: 0 10px 30px;
    text-align:center;
    /* media */
    @media screen and (min-width:700px) {
    padding: 0 0 0 40px;
    text-align:left;    
    }
    @media screen and (min-width:1200px) {
    width:1200px;
    margin:0 auto;  
    }

    .hero-heading {
        font-size:3rem;
        font-family: 'Noto Serif', serif;
        letter-spacing:2px;
        color: var(--white);
        text-shadow: 2px 2px rgba(0,0,0,.3);
        /* media */
        @media screen and (min-width:700px) {
        font-size:2.5rem;
        }
        @media screen and (min-width:992px) {
        font-size:3.5rem;
        }
    }

    .hero-button {
        margin-top:10px;
        padding:8px 20px;
        background-color: var(--white);
        box-shadow:2px 2px rgba(0,0,0,.2);
        color: var(--dark);
        letter-spacing:1px;
        font-family: 'Montserrat', sans-serif;
        cursor:pointer;
        transition:.3s opacity;
        &:hover,&:focus {
            opacity:.6;
        }
    }
}
`

const Hero = () => {
    const scrollToProducts = () => {
        window.scroll({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
          });
}

    return (
        <HeroWrapper>
            <div className="hero-text-container">
                <h2 className="hero-heading">New winter collection</h2>
                <button onClick={scrollToProducts} className="hero-button">explore</button>
            </div>
        </HeroWrapper>
    )
}


export default Hero;
