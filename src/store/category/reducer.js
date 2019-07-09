import * as type from './type';
import state from './state';

const reducer = ( prevState = state, action ) => {

    const newState = { 
        ...prevState
    }

    switch( action.type ) {
        case type.GET_CATEGORY_DATA:
            // console.log(action.payload)
            newState.data = action.payload;
            return newState;
        default:
            return newState;
    }
}

export default reducer;