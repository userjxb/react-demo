import React, { Component } from 'react';
import './index.scss';
import actionCreators from 'store/category/actionCreators';
import Connect from 'utils/get_store';
import CentTitle from './CentTitle';  // 右边二级分类标题
import { Switch,Redirect,Route,NavLink } from 'react-router-dom';
import DocumentTitle  from 'react-document-title';  // 动态修改Title

const Item = (props) => {
  return <NavLink to= {
    {
      pathname: '/category/' + props.cid
    }
  }
  activeClassName="active"> { props.name } </NavLink>
}

class NavTop extends Component {

  componentDidMount() {
    this.props.getCategoryData();  // 获取数据 
  }

  render() {

    return (
      <DocumentTitle title = "全部分类_省钱">
        {/* <MainTitle></MainTitle> */}
        <div className="category">
          <div className="left-nav">
            <div className="empty" style={ { height: 46 } }></div>
            { this.renderItem() }
            <div className="empty" style={ { height: 50 } }> </div>
          </div>
          
          <div className="cent">
            <div className="empty" style={ { height: 46 } }></div>
            <ul className="clearfix">
              <Switch>
                <Redirect from = "/category" to = "/category/25" exact />
                <Route path = "/category/:id" component = { CentTitle } ></Route>
              </Switch>
            </ul>
            <div className="empty" style={ { height: 50 } }></div>
          </div>
        </div>
      </DocumentTitle>
    );
  
  }

  // 左边分类导航渲染
  renderItem = () => {
    return this.props.category.data && this.props.category.data.map( item => {
      return <Item { ...item } key = { item.cid } >  </Item>
    })
  }
}

export default Connect({
  UIComponent: NavTop,
  actionCreators: actionCreators
});