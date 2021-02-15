import {ARTICLES_LOADING, GET_ARTICLES, ADD_ARTICLE, GET_ARTICLE, UPDATE_ARTICLE, DELETE_ARTICLE} from "../actions/types"; 

const initialState = {
    items: [],
    item: {},
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                items: action.payload
            };
        case GET_ARTICLE:
            return {
                ...state,
                item: action.payload
            }
        case ADD_ARTICLE:
            return {
                ...state,
                item: action.payload
            }
        case UPDATE_ARTICLE:
            return {
                ...state,
                item: action.payload
            }
        case DELETE_ARTICLE:
            return {
                ...state,
                item: action.payload
            };
        case ARTICLES_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}