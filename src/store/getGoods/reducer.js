import * as type from './type';
import state from './state';

const reducer = ( prevState = state, action ) => {

    const newState = {
        ...prevState
    }

    switch(action.type) {
        case type.GET_GOODS_DATA:
            newState.goodsData = action.payload;
            return newState;
        case type.GET_LISTLOVE_DATA:
            newState.listLove = action.payload;
            return newState;
        default:
            return newState;
    }
}

export default reducer;