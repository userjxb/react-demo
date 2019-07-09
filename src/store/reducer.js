import { combineReducers } from 'redux';  // 用来集中管理reducer
import category from './category/reducer';
import getGoods from './getGoods/reducer';

const reducer = combineReducers({
    category,
    getGoods
})

export default reducer;