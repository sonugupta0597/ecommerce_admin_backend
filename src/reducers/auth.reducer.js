import { authConstants } from "../actions/constants";

const intialState = {
    "name": "sonu gupta",
    "email": "sonugupta0597@gmail.com"
}

export default (state = intialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            console.log(action.type);
            return {
                ...action.payload
            }
            break;

        default:
            break;
    }

    return state
}