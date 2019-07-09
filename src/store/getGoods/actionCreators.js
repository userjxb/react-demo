import * as type from './type';
import axios from 'axios';

const actionCreators = {
    // 疯抢排行数据
    getGoodsData(query) {
        return dispatch => {
            axios({
                url: '/shengqian/index.php',
                params: query
            })
            .then(res => {
                const action = {
                    type: type.GET_GOODS_DATA,
                    payload: res.data.data
                }
                dispatch( action );
            })
            .catch(error => {
                if(error) throw error;
            })
        }
    },
    // 为你精选数据
    getListLoveData(query) {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        const params = new URLSearchParams();
        params.append('token',query);
        return dispatch => {
            axios({
                method: 'post',
                url: '/shengqian/index.php?r=user/listajax',
                data: params
            })
            .then(res => {
                console.log(res.data.data.like);
                const action = {
                    type: type.GET_LISTLOVE_DATA,
                    payload: res.data.data.like
                }
                dispatch( action );
            })
            .catch(error => {
                if(error) throw error;
            })
        }
    }
}

export default actionCreators;