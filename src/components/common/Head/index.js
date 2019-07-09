import React,{Component,Fragment} from 'react'
import './index.scss'
class Head extends Component{
    render(){
        return(
            <Fragment>
                <div id="header">
                    <header>
                        <div className="search">
                            <i className="fa fa-search" aria-hidden="true"></i>
                            <input type="text" placeholder="输入商品名或粘贴宝贝标题搜索"/>
                        </div>
                        <div className="download_app">
                            <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
                        </div>
                    </header>
                </div>
            </Fragment>
        )
    }
}

export default Head