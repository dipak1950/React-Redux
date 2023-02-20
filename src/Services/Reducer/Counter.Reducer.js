import { INC, DSC, RES } from "../Constants/ActionTypes";
const initialvalue = 0;
const IncDsc = (state = initialvalue, action) => {
    switch (action.type) {
        case INC: {
            return state + 1
            break;
        }
        case DSC: {
            if (state > 0) {
                return state - 1
            }
            break;
        }
        case RES: {
            return state = 0;
            break;
        }
        default: {
            return state
        }
    }
}

export default IncDsc;