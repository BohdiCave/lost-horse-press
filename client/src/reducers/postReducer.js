import {GET_POSTS, NEW_POST, DELETE_POST} from "../actions/types";

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                items: action.payload
            };
        // case NEW_POST:
        //     return {
        //         ...state,
        //         item: {action.payload}
        //     }
        case DELETE_POST:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}