import React, { Component } from 'react';
import MainTitle from 'common/mainTitle';
import Swiper from 'swiper';
import './index.scss';
import actionCreators from 'store/getGoods/actionCreators';
import Connect from 'utils/get_store';
import RankTime from './rankTime';
import Goods from './Goods';
import DocumentTitle  from 'react-document-title';  // 动态修改Title
// import Test from './Test';
// import { Link,Route } from 'react-router-dom';

class CrazyRank extends Component {

    constructor() {
        super();
        this.state = {
            navTitle: [
                {
                    id: 1,
                    name: '实时榜',
                    query: {
                        r: "realtime/wapajax",
                        cid: "a",
                        type: 1,
                        page: 1
                    }
                },
                {
                    id: 2,
                    name: '全天榜',
                    query: {
                        r: "realtime/wapajax",
                        cid: "b",
                        type: 1,
                        page: 1
                    }
                },
                {
                    id: 3,
                    name: '居家日用',
                    query: {
                        r: "realtime/wapajax",
                        cid: 4,
                        page: 1
                    }
                },
                {
                    id: 4,
                    name: '美食',
                    query: {
                        r: "realtime/wapajax",
                        cid: 6,
                        page: 1
                    }
                },
                {
                    id: 5,
                    name: '母婴',
                    query: {
                        r: "realtime/wapajax",
                        cid: 2,
                        page: 1
                    }
                },
                {
                    id: 6,
                    name: '美妆',
                    query: {
                        r: "realtime/wapajax",
                        cid: 3,
                        page: 1
                    }
                },
                {
                    id: 7,
                    name: '女装',
                    query: {
                        r: "realtime/wapajax",
                        cid: 1,
                        page: 1
                    }
                },
                {
                    id: 8,
                    name: '数码家电',
                    query: {
                        r: "realtime/wapajax",
                        cid: 8,
                        page: 1
                    }
                },
                {
                    id: 9,
                    name: '文娱车品',
                    query: {
                        r: "realtime/wapajax",
                        cid: 7,
                        page: 1
                    }
                },
                {
                    id: 10,
                    name: '内衣',
                    query: {
                        r: "realtime/wapajax",
                        cid: 10,
                        page: 1
                    }
                },
                {
                    id: 11,
                    name: '家装家纺',
                    query: {
                        r: "realtime/wapajax",
                        cid: 14,
                        page: 1
                    }
                },
                {
                    id: 12,
                    name: '鞋品',
                    query: {
                        r: "realtime/wapajax",
                        cid: 5,
                        page: 1
                    }
                },
                {
                    id: 13,
                    name: '男装',
                    query: {
                        r: "realtime/wapajax",
                        cid: 9,
                        page: 1
                    }
                },
                {
                    id: 14,
                    name: '配饰',
                    query: {
                        r: "realtime/wapajax",
                        cid: 12,
                        page: 1
                    }
                },
                {
                    id: 15,
                    name: '户外运动',
                    query: {
                        r: "realtime/wapajax",
                        cid: 13,
                        page: 1
                    }
                },
                {
                    id: 16,
                    name: '箱包',
                    query: {
                        r: "realtime/wapajax",
                        cid: 11,
                        page: 1
                    }
                }
            ],
            query: {
                r: "realtime/wapajax",
                cid: "a",
                type: 1,
                page: 1
            },
            activeId: 0,
            title: '实时疯抢榜'
        }
    }

    componentDidMount() {
        this.props.getGoodsData(this.state.query);
    }
    
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps.match.params)
    // }

    componentDidUpdate () {
        if( this.swiper ) return false;
        this.swiper = new Swiper( this.navTitle,{
            slidesPerView:"auto",
            spaceBetween: 16
        })
    }

    render() {
        return(
            <DocumentTitle title={ this.state.title + '_省钱' }>
                <div className="crazy-rank">
                    <MainTitle src="https://cmsstatic.dataoke.com//web/ranking/images/title.svg?v=201906201943"></MainTitle>
                    <div className="rank-nav">
                        <div className="swiper-container" ref={ el => this.navTitle = el }>
                            <div className="swiper-wrapper">
                                { this.renderItem() }
                            </div>
                        </div>
                    </div>

                    {/* 倒计时 start */}
                    <RankTime></RankTime>
                    {/* 倒计时 end */}

                    {/* 商品列表 start */}
                    <Goods query={ this.props.getGoods.goodsData } page = { this.state.query.page }></Goods>
                    {/* 商品列表 end */}

                </div>
            </DocumentTitle>
        )
    }

    renderItem = () => {
        return this.state.navTitle.map( (item,index) => {
            return <Slide
                        { ...item }
                        key = { item.id }
                        index = { index }
                        changeQuery = { this.changeQuery }
                        activeId = { this.state.activeId }
                    ></Slide>
        })
    }
    
    changeQuery = (query,index,title) => {
        this.props.getGoodsData(query); // 重新请求数据
        this.setState({
            activeId: index,
            title
        })
    }

}

const Slide = (props) => {
    return <div
                className="swiper-slide"
            >   
                <div
                    onClick={ () => { props.changeQuery(props.query,props.index,props.name) } }
                    className = { props.activeId === props.index?'tab active':'tab' }
                > { props.name } </div>
            </div>
}

export default Connect({
  UIComponent: CrazyRank,
  actionCreators: actionCreators
});