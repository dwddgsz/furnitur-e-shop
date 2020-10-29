import {ADD_PRODUCT,REMOVE_PRODUCT,INCREASE,DECREASE} from '../actions/types';
import products from '../data/products'


const initialState = {
    products,
    totalAmount:0,
    totalValue:0,
}

const CartReducer = (state=initialState,action) => {
    switch (action.type){
        case ADD_PRODUCT: {
            return {...state,
                products: state.products.map((product)=>{
                    if(product.id === action.payload.id) {
                        return {...product,inCart:true,amount:1}
                    }
                    else {
                        return product;
                    }
                }),
                totalAmount:state.totalAmount + 1,
                totalValue:state.totalValue + action.payload.price,
            };
        }
        case INCREASE: {
            return {...state,
            products: state.products.map(product=>{
                if(product.id === action.payload.id) {
                    return {...product,amount:product.amount+1}
                }
                else return product
            }),
            totalValue: state.totalValue + action.payload.price,
            totalAmount: state.totalAmount + 1,
            }
        }
        case DECREASE: {
            return {
                ...state,
                products: state.products.map((product)=>{
                    if (product.id === action.payload.id){
                        if (product.amount === 1) {
                            return {...product,amount: 0,inCart:false}
                        }
                     return {...product,amount: product.amount-1}
                    }
                    else return product;
                }),
                totalValue: state.totalValue - action.payload.price,
                totalAmount: state.totalAmount - 1,
                 
            }
        }
        default: {
            return state;
        }
}
}

export default CartReducer;

