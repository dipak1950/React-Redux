import { INC, DSC, RES, LODDING } from "../Constants/ActionTypes";

export const Increment = (data) => {
    return {
        type: INC,
        payload: data
    }
}

export const decrement = (data) => {
    return {
        type: DSC,
        payload: data
    }
}

export const RESET = (data) => {
    return {
        type: RES,
        payload: data
    }
}

export const IncrementAsync = () => {
    return dispatch => {
        dispatch(loading())
        setTimeout(() => {
            dispatch(Increment())
        }, 5000);
    }
}

export const decrementAsync = () => {
    return dispatch => {
        dispatch(loading())

        setTimeout(() => {
            dispatch(decrement())
        }, 2000);
    }
}

export const loading = () => {
    return {
        type: LODDING
    }
}