import { LODDINGG, PD } from "../Constants/ActionTypes"

export const ProductData = (data) => {
    return {
        type: PD,
        payload: data
    }
}

export const ProductDataAsync = () => {
    return dispatch => {
        dispatch(loading())
        setTimeout(() => {
            dispatch(ProductData())
        }, 5000);
    }
}

export const loading = () => {
    return {
        type: LODDINGG
    }
}