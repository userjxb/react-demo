import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class UserList extends Component {

    constructor() {
        super();
        this.state = {
            goodsList: [],
            isChecked: [],
        }
    }

    componentDidMount() {
        // 从本地存储中获取数据
        const goodsList = JSON.parse(localStorage.getItem('goods_data'));
        if(goodsList) {
            let isChecked = [];
            isChecked.length = goodsList.length;
            isChecked.fill(false);
            this.setState({
                goodsList,
                isChecked
            });
        }
    }

    render() {
        return(
            <Fragment>
                {/* <button onClick={ this.test }> +++ </button> */}
                { this.renderItem() }
            </Fragment>
        )
    }

    // test = () => {
    //     const List = [
    //         {
    //             id: "20612986",
    //             d_title: '【拍4件9.9元】抖音爆款九孔多功能衣架',
    //             jiage: 4.9,
    //             pic: '//img.alicdn.com/imgextra/i3/2076513163/O1CN01yiBIqP1ZEhIKDVqXN_!!2076513163.jpg',
    //             quan_jine: 3,
    //             quan_num: "61000",
    //             quan_over: "39000",
    //             sales_num: "123886",
    //             xiaoliang: "203816",
    //             yuanjia: 7.9
    //         },
    //         {
    //             id: "20585208",
    //             d_title: "【史！低6.9元】懒人甩脂抖抖机减肥机",
    //             istmall: "1",
    //             jiage: 6.9,
    //             jump_url: "/index.php?r=p/d&id=20585208&source=fvj",
    //             pic: "https://img.alicdn.com/imgextra/i3/2091601449/O1CN016ydSdC1MZgQFjGFKc_!!2091601449.jpg",
    //             quan_jine: 65,
    //             quan_num: "33000",
    //             quan_over: "67000",
    //             sales_num: "17737",
    //             xiaoliang: "40544",
    //             yuanjia: 71.9
    //         },
    //         {
    //             id: "3333",
    //             d_title: '【拍4件9.9元】抖音爆款九孔多功能衣架3333',
    //             jiage: 4.9,
    //             pic: '//img.alicdn.com/imgextra/i3/2076513163/O1CN01yiBIqP1ZEhIKDVqXN_!!2076513163.jpg',
    //             quan_jine: 3,
    //             quan_num: "61000",
    //             quan_over: "39000",
    //             sales_num: "123886",
    //             xiaoliang: "203816",
    //             yuanjia: 7.9
    //         },
    //         {
    //             id: "4444",
    //             d_title: "【史！低6.9元】懒人甩脂抖抖机减肥机4444",
    //             istmall: "1",
    //             jiage: 6.9,
    //             jump_url: "/index.php?r=p/d&id=20585208&source=fvj",
    //             pic: "https://img.alicdn.com/imgextra/i3/2091601449/O1CN016ydSdC1MZgQFjGFKc_!!2091601449.jpg",
    //             quan_jine: 65,
    //             quan_num: "33000",
    //             quan_over: "67000",
    //             sales_num: "17737",
    //             xiaoliang: "40544",
    //             yuanjia: 71.9
    //         }
    //     ]
    //     localStorage.setItem('goods_data',JSON.stringify(List));
    // }

    renderItem = () => {
        return this.state.goodsList && this.state.goodsList.map( (item,index) => {
            return <Item
                        props = { item }
                        key = { item.id }
                        index = { index }
                        edit = { this.props.edit }
                        isChecked = { this.state.isChecked }
                        handleInputChange = { this.handleInputChange }
                    ></Item>
        });
    }

    // checkbox事件
    handleInputChange = (index) => {
        let list = this.state.isChecked;
        list[index] = !list[index];
        this.setState({
            isChecked: list
        });
        // 子组件控制全选按钮
        this.props.childControlAllSelect(list);
    }

    // 全选控制
    allSelected = (flag) => {
        this.setState({
            isChecked: this.state.isChecked.fill(flag)
        });
    }

    // 删除收藏
    delCollect = () => {
        let { isChecked,goodsList } = this.state;
        
        let checkArr = isChecked.filter( (item,index) => {
            return !isChecked[index];
        })

        let GoodsArr = goodsList.filter( (item,index) => {
            return !isChecked[index];
        })
        
        this.setState({
            isChecked: checkArr,
            goodsList: GoodsArr
        })

        // 重新存localStorage
        if(!GoodsArr.length) {
            localStorage.removeItem('goods_data');
            this.props.afterDelAllGoods();  // 删完收藏后的操作
        }else {
            localStorage.setItem('goods_data',JSON.stringify(GoodsArr));
        }

    }

}

const Item = (props) => {
    const data = props.props;
    return(
        <li className="row">
            <div className="label" style={ { transform: props.edit && "translateX(.42rem)" } }>
                <label>
                    <input type="checkbox"
                        onChange={ () => { props.handleInputChange(props.index) } }
                        checked={ props.isChecked[props.index] }
                    />
                    <i className="fa fa-circle-o"></i>
                </label>
                <Link 
                    to={
                        {
                            pathname: '/detail',
                            state: data
                        }
                    }
                    className = "cent"
                >
                    <div className="pic">
                        <img src={ data.pic } alt="" />
                    </div>
                    <div className="msg">
                        <h3> { data.d_title } </h3>
                        <div className="num"><span>天猫价 ¥{ data.yuanjia }</span><span className="fr">已售 { (data.xiaoliang/10000).toFixed(1) } 万件</span></div>
                        <div className="money">
                            <span>券后价 ¥<i>{ data.jiage }</i></span>
                            <span className="quan"><i>{ data.quan_jine }元券</i></span>
                        </div>
                    </div>
                </Link>
            </div>
            {/* <button className="btn btn-remove">删除</button> */}
        </li>
    )
}

export default UserList;