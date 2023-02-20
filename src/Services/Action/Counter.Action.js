import { INC, DSC, RES } from "../Constants/ActionTypes";

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