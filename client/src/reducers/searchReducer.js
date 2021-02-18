import {DO_SEARCH} from "../actions/types";

const initialState = {
    items: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case DO_SEARCH:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}