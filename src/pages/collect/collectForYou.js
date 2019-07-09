import React, { Component } from 'react';
import actionCreators from 'store/getGoods/actionCreators';
import Connect from 'utils/get_store';
import { Link } from 'react-router-dom';

class CollectForYou extends Component {

    componentDidMount() {
        this.props.getListLoveData("e8c943847ccf423624ddece36a28c438");  // post方式，传入token
    }

    render() {
        return(
            <div className="coll-for-you">
                <div className="title">
                    <span>
                        <em></em>
                        <i className="fa fa-gratipay" aria-hidden="true"></i>
                        为您精选
                        <em className="r"></em>
                    </span>
                </div>
                <ul className="listlove clearfix">
                    { this.renderItem() }
                </ul>
            </div>
        )
    }

    renderItem = () => {
        return this.props.getGoods.listLove && this.props.getGoods.listLove.map( item =>  {
            return <Item props = { item } key = { item.id } ></Item>
        })
    }

}

const Item = (data) => {
    const props = data.props;

    const xiaoliang = function() {
        return props.xiaoliang>10000 ?  ( ( props.xiaoliang/10000).toFixed(1) ) + '万' : (props.xiaoliang);
    }

    return (
        <li>
            <Link to={
                {
                    pathname: '/crazyRank',
                    state: props
                }
            }>
                <div className="cent">
                    <div className="pic"><img  src={ props.pic } alt="" /></div>
                    <div className="mar">
                        <h3 className={  parseInt(props.istmall)? 'bt tianmao':'bt taobao' }> { props.d_title } </h3>
                        <div className="row num">
                            <div className="col">天猫价 ¥{ props.yuanjia }</div>
                            <div className="col text-right">已售<span className="col-red"> { xiaoliang() } </span></div>
                        </div>
                        <div className="row but">
                            <div className="col money"><span>券后价&nbsp;¥</span> { props.jiage } </div>
                            <div className="col"><span className="quan"><i>{ props.quan_jine }元券</i></span></div>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default Connect({
  UIComponent: CollectForYou,
  actionCreators: actionCreators
});