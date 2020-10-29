import {ADD_PRODUCT,REMOVE_PRODUCT,INCREASE,DECREASE} from './types'


export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    }
}

export const removeProduct = (product) => {
    return {
        type: REMOVE_PRODUCT,
        payload: product,
    }
}
export const increase = (product) => {
    return {
        type:INCREASE,
        payload:product,
    }
}

export const decrease = (product) => {
    return {
        type:DECREASE,
        payload:product,
    }
} 