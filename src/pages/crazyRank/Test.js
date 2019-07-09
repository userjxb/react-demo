import React, { Component } from 'react';
import Connect from 'utils/get_store';
import actionCreators from 'store/getGoods/actionCreators';

class Test extends Component {

    constructor() {
        super();
        this.state = {
            query: {
                r: "realtime/wapajax",
                cid: "a",
                type: 1,
                page: 1
            },
            page: 1
        }
    }

    componentDidMount() {
        this.props.getGoodsData(this.state.query);
    }

    render() {
        return(
            <div style={{ margin: "44px 0 50px" }}>
                { this.renderItem() }
                <button onClick = { this.changePage }> next </button>
            </div>
        )
    }

    renderItem = () => {
        let { page } = this.state;
        return this.props.getGoods.goodsData && this.props.getGoods.goodsData.slice(0,page*10).map( item => {
            return <Item { ...item } key = { item.id } ></Item>
        })
    }

    changePage = () => {
        if(this.state.page<10) {
            this.setState({
                page: this.state.page + 1
            });
        }else {
            console.log("没有了");
        }
    }

}

const Item = (props) => {
    return <div> { props.d_title } </div>
}

export default Connect({
    UIComponent: Test,
    actionCreators: actionCreators
});