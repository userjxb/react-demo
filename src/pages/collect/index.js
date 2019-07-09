import React, { Component, Fragment } from 'react';
import MainTitle from 'common/mainTitle';
import DefaultMsg from './DefaultMsg';
import UserList from './userList';
import CollectForYou from './collectForYou';
import { DelMask } from './DelMask';
import './index.scss';
import DocumentTitle  from 'react-document-title';  // 动态修改Title

class Collect extends Component {

    constructor() {
        super();
        this.state = {
            showDefaultMsg: true,   // 收藏列表为空
            edit: false,   // 编辑
            allSelect: false, // 全选
            showMask: false, // 删除模态框
            showMaskFlag: false // 显示模态框开关
        }
    }

    componentDidMount() {
        const goods = JSON.parse(localStorage.getItem('goods_data'));
        if(goods) {
            this.setState({
                showDefaultMsg: false
            });
        }
    }

    render() {
        return(
            <DocumentTitle title="收藏列表_省钱">
                <Fragment>
                    <MainTitle title="我的收藏" edit={ this.changeEditState } editState={ this.state.edit }></MainTitle>
                    <div className="collect">
                        <ul className="user-list">
                            {
                                this.state.showDefaultMsg?
                                <DefaultMsg></DefaultMsg>
                                :
                                <UserList
                                    edit={ this.state.edit }
                                    childControlAllSelect = { this.childControlAllSelect }
                                    afterDelAllGoods = { this.afterDelAllGoods }
                                    ref = { el => this.userList = el }
                                ></UserList>
                            }
                        </ul>
                        {/* 为您精选 */}
                        <CollectForYou></CollectForYou>
                    </div>
                    <div className="edit-foot" style={{ bottom: this.state.edit && 0 }}>
                        <div className="label">
                            <label className="check">
                                <input type="checkbox" onChange={ this.allSelect } checked={ this.state.allSelect } />
                                <i className="fa fa-circle-o"></i>
                                <span>全选 0</span>
                            </label>
                        </div>
                        <div className="del-btn" onClick = { this.showDelMask }>删除</div>
                    </div>
                    {/* 删除mask -- start -- */}
                    {
                        <DelMask style = {{ display: !this.state.showMask && 'none' }}>
                            <div className="del-box">
                                <div className="title">信息</div>
                                <span className="close" onClick = { this.hideDelMask }><i className="fa fa-times"></i></span>
                                <p className="tip"> 是否要删除收藏？ </p>
                                <div className="btns">
                                    <button className="btn cancle" onClick={ this.hideDelMask }> 否 </button>
                                    <button className="btn del" onClick={ this.delCollect }> 是 </button>
                                </div>
                            </div>
                        </DelMask>
                    }
                    {/* 删除mask -- end -- */}
                </Fragment>
            </DocumentTitle>
        )
    }

    // 编辑/完成切换
    changeEditState = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    // 全选事件
    allSelect = () => {
        if(this.state.showDefaultMsg) {   // 没有收藏品时无法操作
            this.setState({
                allSelect: !this.state.allSelect,
                showMaskFlag: false
            });
        }else {
            // 控制 全选状态 和 删除模态框开关
            this.setState({
                allSelect: !this.state.allSelect,
                showMaskFlag: !this.state.allSelect
            });
            // 控制子组件全选状态
            this.userList.allSelected(!this.state.allSelect);
        }
    }

    // 子组件控制 全选 和 删除模态框开关
    childControlAllSelect = (arr) => {
        // 控制全选
        if(arr.every(item => item)) {
            this.setState({
                allSelect: true
            });
        }else {
            this.setState({
                allSelect: false
            });
        }
        // 控制删除模态框开关
        if(arr.some(item => item)) {
            this.setState({
                showMaskFlag: true
            });
        }else {
            this.setState({
                showMaskFlag: false
            });
        }
    }

    // 显示删除收藏mask
    showDelMask = () => {
        if(this.state.showMaskFlag) {
            this.setState({
                showMask: true
            });
        }
    }

    // 隐藏删除收藏mask
    hideDelMask = () => {
        this.setState({
            showMask: false
        });
    }

    // 删除收藏(调用子组件方法)
    delCollect = () => {
        this.userList.delCollect();
        // 删除隐藏模态框
        this.setState({
            showMask: false
        });
    }

    // 收藏删完后执行的方法
    afterDelAllGoods = () => {
        this.setState({
            showDefaultMsg: true,
            edit: false,
            showMaskFlag: false
        })
    }
}

export default Collect;