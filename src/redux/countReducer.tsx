import { INCREASE_COUNTER } from "../utils/reducerConstants";

//initializing state
const initialState = {
    counter: 0
 }
const countReducer = (state = initialState, action) => {

    switch (action.type) {
        case INCREASE_COUNTER: return {
            ...state,
            counter: action.count
        }
        
        default: return  state

    }
}

export default countReducer