import * as type from './type';
import axios from 'axios';

const actionCreators = {
    getCategoryData () {
        return dispatch => {
            axios({
                url: '/shengqian/index.php',
                params: {
                    r: "class/category",
                    type: 1
                }
            })
            .then( res => {
                const action = {
                    type: type.GET_CATEGORY_DATA,
                    payload: res.data.data.data
                }
                dispatch( action );
            })
            .catch( error => {
                if(error) throw error;
            });
        }
    }
}

export default actionCreators;