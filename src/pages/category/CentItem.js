import React, { Component, Fragment } from 'react';

class CentItem extends Component {

    constructor() {
        super();
        this.state = {
          listData: null
        }
      }
    
    componentDidMount() {
      this.setState({
        listData: this.props.listData
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
        return this.props.listData && this.props.listData.map( item => {
            return <Item {...item} key = { item.api_id } >  </Item>
        })
    }

}

const Item = (props) => {
    return (
        <Fragment>
            <li className="cat-item">
                <a href = { "/menu/" + props.jump_url.slice(11) }>
                    <img src = { props.img } alt="" />
                    { props.name }
                </a>
            </li>
        </Fragment>
    )
}

export default CentItem;