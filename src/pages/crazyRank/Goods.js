import React, { Component, Fragment } from 'react';
// import actionCreators from 'store/getGoods/actionCreators';
// import Connect from 'utils/get_store';
import BScroll from "better-scroll";
import { withRouter,Link } from 'react-router-dom';
// import LazyLoad from 'react-lazyload';  // 懒加载

class Goods extends Component {

    constructor() {
        super();
        this.state = {
            page: 1,
            goodsOver: false
        }
    }

    componentDidMount() {
        setTimeout( () => {
            this.scroll = new BScroll( this.scrollBox,{
                pullUpLoad: {
                    threshold: 50 //开启上拉事件
                },
                click: true,
                mouseWheel: true
            });
            // 上拉加载更多数据
            this.scroll.on('pullingUp', () => {
                if(this.state.page<10) {
                    this.setState({
                        page: this.state.page + 1
                    });
                    this.scroll.finishPullUp();
                }else {
                    this.setState({
                        goodsOver: true
                    });
                }
            })
        },0)
    }

    componentWillReceiveProps(nextProps) {
        /* tab切换时 */
        // 重置page
        this.setState({
            page: nextProps.page
        });
        // 回到顶部
        this.scroll && this.scroll.scrollTo(0,0);
    }

    render() {
        return(
            <Fragment>
                <div className="rank-ul" ref = { el => this.scrollBox = el }>
                    <ul>
                        { this.renderItem() }
                        { this.state.goodsOver && <li className="pullup-goods">商品已加载完！</li> }
                    </ul>
                </div>
            </Fragment>
        )
    }

    renderItem = () => {
        let { page } = this.state;
        return this.props.query && this.props.query.slice(0,page*10).map( (item,index) => {
            return <Item props = { item } key = { item.id } index = { index } toDetail = { this.toDetail }></Item>
        })
    }

    // 跳转到详情页
    toDetail = () => {
        this.props.history.push("/detail");
    }
}

const Item = (data) => {
    let props  = data.props
    return (
        <Fragment>
            <li>
                <Link to = {
                    {
                        pathname: '/detail',
                        state: props
                    }
                }>
                    <span className={ "lv lv" + (data.index + 1) } >NO.{ data.index + 1 }</span>
                    <div className="img">
                        <img src={ props.pic } alt="" />
                    </div>
                    <div className="text">
                        <div><h3>{ props.d_title }</h3></div>
                        <div>
                            <p className="nr" style={{ lineHeight: '.26rem', marginBottom:0, paddingTop:'.05rem' }}>
                                近2小时疯抢<span> { props.sales_num } </span>件
                                <br />
                                <font style={{ fontSize: '12px', color: '#aaa' }}>天猫价: { props.yuanjia }</font>
                            </p>
                        </div>
                        <div className="button">
                            <span className="money" style={{ margin:0 }}><i>券后价 ¥ </i>{ parseInt(props.jiage) }<i>.{ parseInt((props.jiage - parseInt(props.jiage))*100) }</i></span>
                            <button onClick={ props.toDetail }>立即抢</button>
                        </div>
                    </div>
                </Link>
            </li>
        </Fragment>
    )
}

// export default Connect({
//   UIComponent: Goods,
//   actionCreators: actionCreators
// });

export default withRouter(Goods);