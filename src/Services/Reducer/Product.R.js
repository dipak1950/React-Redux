import { PD, LODDINGG } from "../Constants/ActionTypes";
const initialvalue = {
    // img: "./images/G-1.jpg",
    // title: 'Shoes',
    detail: ' Some quick example text to build on the card title and make up thebulk of the cardzs content',
    isLoading: true
};
const ProR = (state = initialvalue, action) => {
    switch (action.type) {
        case PD: {
            return {
                ...state,
                // img: state.img,
                // title: state.title,
                detail: state.detail,
                isLoading: false
            }
            break;
        }
        case LODDINGG: {
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

export default ProR;