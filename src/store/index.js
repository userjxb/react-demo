import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';  // 总的reducer
import thunk from 'redux-thunk';  // 异步处理工具(需要安装)

const store = createStore( reducer, applyMiddleware( thunk ) );

export default store;