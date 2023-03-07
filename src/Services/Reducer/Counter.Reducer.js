import { INC, DSC, RES, LODDING } from "../Constants/ActionTypes";
const initialvalue = {
    count: 0,
    isLoading: true
};
const IncDsc = (state = initialvalue, action) => {
    switch (action.type) {
        case INC: {
            return {
                ...state,
                count: state.count + 1,
                isLoading: false
            }
            break;
        }
        case DSC: {
            return {
                ...state,
                count: state.count - 1,
                isLoading: false
            }
            break;
        }
        case RES: {
            return state = 0;
            break;
        }
        case LODDING: {
            return {
                ...state,
                isLoading: true
            }
        }
        default: {
            return state
        }
    }
}

export default IncDsc;