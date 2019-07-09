/* 
    隐藏的菜单导航
        点击头部三个点，出现，点击其他地方，隐藏
*/
import './index.scss'
import React,{ Component,Fragment } from 'react'
import { NavLink } from 'react-router-dom'


class HideMenu extends Component {

    constructor () {
        super () 
        this.state = {
            hideMenuFlag:false, //控制隐藏的菜单的显示与隐藏
        }
    }
    //修改控制隐藏的菜单的显示与隐藏的flag（点击三个点）
    changeHideMenuFlag = () => {
        let flag = this.state.hideMenuFlag
        flag = !flag
        this.setState({
            hideMenuFlag:flag
        })
    }
    //修改控制隐藏的菜单的显示与隐藏的flag（点击头部其他地方）
    changeHideMenuFlagFalse = () => {
        let flag = this.state.hideMenuFlag
        flag = false
        this.setState ({
            hideMenuFlag:flag
        })
    }

    render () {
        return (
            <Fragment>
                <div className = { `hide-menu ${ this.state.hideMenuFlag && 'show'}  ` } >
                    <div className = "top-arrow"></div>
                    <div className = "menu-nav">
                        <ul>
                            <li>
                                <NavLink to="">
                                    <i className = "fa fa-home"></i>
                                    <span> 首页 </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    <i className="fa fa-search" aria-hidden="true"></i> 
                                    <span> 搜索 </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    <i className="fa fa-female" aria-hidden="true"></i>
                                    
                                    <span> 客服 </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    <i className="fa fa-file-text-o" aria-hidden="true"></i>
                                    <span> 反馈 </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                                    <span> 我的 </span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default HideMenu