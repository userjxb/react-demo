/* 
    点击精选路由导航进去页面的头部组件
*/
import './index.scss'
import React,{ Component,Fragment } from 'react'
import { NavLink } from 'react-router-dom'

// 引入隐藏的导航菜单
import HideMenu from '../hideMenu'

class MainTitle extends Component {
    //修改控制隐藏的菜单的显示与隐藏的flag（点击三个点）
    changeHideMenuFlag = (e) => {
       this.HideMenu.changeHideMenuFlag ()
       //取消冒泡
       e.stopPropagation()
    }
    //修改控制隐藏的菜单的显示与隐藏的flag（点击头部其他地方）
    changeHideMenuFlagFalse = () => {
        this.HideMenu.changeHideMenuFlagFalse ()
    }

    render () {
        //console.log(this)
        return (
            <Fragment>
                <div className = "main-title" onClick = { this.changeHideMenuFlagFalse }>
                    {/* 头部返回首页路由图标--start */}
                    <NavLink to = "">
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </NavLink>
                    {/* 头部返回首页路由图标--end */}
                    {/* 头部标题--start */}
                    <div className = "title">
                        {/* <img src="https://cmsstatic.dataoke.com//web/nine_special/images/nine_title.svg?v=201906201943" alt="" /> */}
                        { this.props.title || <img src={ this.props.src } alt="" /> }
                    </div>
                    {/* 头部标题--end */}
                    {/* 隐藏的菜单导航--start */}
                    {/* 右边(...按钮/编辑按钮) */}
                    {
                        this.props.edit?
                        <div style={{ fontSize: "14px" }} onClick={ this.props.edit }> { this.props.editState?'完成':'编辑' } </div>
                        :
                        <div onClick = { this.changeHideMenuFlag }>
                            <i className ="fa fa-ellipsis-v"></i>
                        </div>
                    }
                    {/* 隐藏的菜单导航--end */}
                </div>
                <HideMenu ref = { el => this.HideMenu = el }></HideMenu>
            </Fragment>
        )
    }
}

export default MainTitle