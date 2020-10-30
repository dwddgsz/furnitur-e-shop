import React from 'react'
import styled from 'styled-components';

const FooterWrapper = styled.footer`
background-color: var(--dark);
padding:30px 0;
color: (--white);
.footer-content {
    max-width:1200px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media screen and (min-width:900px){
        flex-direction:row;
        justify-content:space-around;
    }
    @media screen and (min-width:1200px){
        justify-content:space-between;
    }
    ul {
        text-align:center;
        color: var(--white);
        text-transform:uppercase;
        padding-bottom:30px;
        @media screen and (min-width:900px){
        text-align:left;
    }
        .list-title {
            font-size:1.7rem;
            cursor:auto;
            &:hover {
                opacity:1;
            }
        }
        li {
            padding:5px 0;
            cursor:pointer;
            transition: .3s opacity;
            &:hover {
                opacity:.6;
            }
        }
    }
    .newletter {
        h3 {
            color:var(--white);
            text-align:center;
            font-size:2.4rem;
            letter-spacing:1px;
            text-transform:uppercase;
            padding-bottom:40px;
        }
        input {
            background-color:transparent;
            border:none;
            border-bottom:1px solid var(--white);
            color: var(--white);
            &:focus {
                outline:none;
                background-color: rgba(255,255,255,.3);
            }
        }
            button {
                margin-left:10px;
                padding:8px 20px;
                background-color: var(--white);
                -shadow:2px 2px rgba(0,0,0,.2);
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
}
`

export const Footer = () => {
    return (
        <FooterWrapper>
            <div className="footer-content">
                <ul>
                    <li className="list-title">client</li>
                    <li>contact</li>
                    <li>FAQ</li>
                    <li>shipping and delivery</li>
                    <li>returns</li>
                </ul>

                <ul>
                    <li className="list-title">social media</li>
                    <li>facebook</li>
                    <li>instagram</li>
                    <li>twitter</li>
                    <li>pinterest</li>
                </ul>
                
                <section className="newletter">
                    <form>
                        <h3>newsletter</h3>
                        <input></input>
                        <button onClick={(e)=>e.preventDefault()}>sign up</button>
                    </form>
                </section>

            </div>

        </FooterWrapper>    
)
}

export default Footer;