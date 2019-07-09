import React, { Component, Fragment } from 'react';
import MainTitle from 'common/mainTitle';
import actionCreators from 'store/getGoods/actionCreators';
import Connect from 'utils/get_store';
const qs = require('querystring');

class Detail extends Component {

    componentDidMount() {
        let { location } = this.props;
        let query = qs.parse(location.search.slice(1));
        this.props.getGoodsData(query); // 后端返回整个页面
    }

    render() {
        return(
            <Fragment>
                <MainTitle></MainTitle>
            </Fragment>
        )
    }
}

export default Connect({
  UIComponent: Detail,
  actionCreators: actionCreators
});