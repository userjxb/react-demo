import React, { Component, Fragment } from 'react';
import actionCreators from 'store/category/actionCreators';
import Connect from 'utils/get_store';
import CentItem from './CentItem';

class CentTitle extends Component {

    constructor() {
        super();
        this.state = {
          index: 0
        }
      }
    
    componentDidMount() {
      this.props.getCategoryData();
    }

    // 监听路由变化
    componentWillReceiveProps(nextProps) {
      let { match } = nextProps;
      this.setState({
        index: match.params.id - 25
      })
    }

    render() {
        return(
            <Fragment>
                { this.renderItem() }
            </Fragment>
        )
    }

    renderItem = () => {
        let { index } = this.state;
        return this.props.category.data && this.props.category.data[index].floors.map( item => {
            return <Item {...item} key = { item.name } >  </Item>
        })
    }

}

const Item = (props) => {
    return (
      <Fragment>
          <div className="second-cat clearfix">
            <li className="title"> { props.name } </li>
            <CentItem listData={ props.list }></CentItem>
          </div>
      </Fragment>
    )
}

export default Connect({
  UIComponent: CentTitle,
  actionCreators: actionCreators
});