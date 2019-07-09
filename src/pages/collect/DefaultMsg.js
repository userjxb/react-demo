import React, { Component } from 'react';

class DefaultMsg extends Component {

    render() {
        return(
            <div className="default-msg">
                <i className="iconfont icon-shoppingbag"></i>
                暂无收藏
                <p className="btn-p"><a href="/home">去首页逛逛吧</a></p>
            </div>
        )
    }

}

export default DefaultMsg;