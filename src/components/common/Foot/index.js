import React,{Component,Fragment} from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'

class Foot extends Component{
    constructor(){
        super()
        this.state={
            footRenderData:[
                {
                    id:1,
                    src:'https://img.alicdn.com/imgextra/i1/2053469401/TB2GCzpnVkoBKNjSZFkXXb4tFXa-2053469401.png',
                    activeSrc:'https://img.alicdn.com/imgextra/i4/2053469401/TB24KbjnZj_B1NjSZFHXXaDWpXa-2053469401.png',
                    content:'首页',
                    toPath:"/home",
                    flag:false,
                    newFlag:false,
                },{
                    id:2,
                    src:'https://img.alicdn.com/imgextra/i4/2053469401/TB23GLTn77mBKNjSZFyXXbydFXa-2053469401.png',
                    activeSrc:'https://img.alicdn.com/imgextra/i4/2053469401/TB2kBbrn_qWBKNjSZFAXXanSpXa-2053469401.png',
                    content:'9.9包邮',
                    toPath:"",
                    flag:false,
                    newFlag:false,
                },{
                    id:3,
                    src:'https://img.alicdn.com/imgextra/i2/2053469401/TB2nLTXn7omBKNjSZFqXXXtqVXa-2053469401.png',
                    activeSrc:'https://img.alicdn.com/imgextra/i1/2053469401/TB2y4_qnVkoBKNjSZFkXXb4tFXa-2053469401.png',
                    content:'分类',
                    toPath:"/category",
                    flag:false,
                    newFlag:false,
                },{
                    id:4,
                    src:'https://img.alicdn.com/imgextra/i1/2053469401/TB26bEfnQZmBKNjSZPiXXXFNVXa-2053469401.png',
                    activeSrc:'https://img.alicdn.com/imgextra/i2/2053469401/TB2b3cKnL6TBKNjSZJiXXbKVFXa-2053469401.png',
                    content:'收藏',
                    toPath:"/collect",
                    flag:false,
                    newFlag:false,
                },{
                    id:5,
                    src:'https://img.alicdn.com/imgextra/i3/2053469401/TB2WXrhqFkoBKNjSZFkXXb4tFXa-2053469401.png',
                    activeSrc:'https://img.alicdn.com/imgextra/i2/2053469401/TB21aHkqRsmBKNjSZFFXXcT9VXa-2053469401.png',
                    content:'我的',
                    toPath:"",
                    flag:false,
                    newFlag:false,
                }
            ]
        }
    }
    
    itemRender=()=>{
        return this.state.footRenderData.map((item,index)=>{
            return (
                <li key={item.id}>
                    <NavLink to={item.toPath} onClick={()=>{this.changeFlag(index)}} className={item.flag?"foot_active":''}>
                    <img src={item.flag?item.activeSrc:item.src} alt=""/>
                    <span>{item.content}</span>
                    {item.newFlag?<em>NEW</em>:''}
                    </NavLink>
                </li>
            )
        })
    }
    changeFlag=(index)=>{
       let newFootRenderData=this.state.footRenderData
       for(let i=0;i<newFootRenderData.length;i++){
            newFootRenderData[i].flag=false
        }
        newFootRenderData[index].flag=!newFootRenderData[index].flag
        this.setState({
            footRenderData:newFootRenderData
        })
    }
    render(){
        return(
            <Fragment>
                <div id="foot">
                    <footer>
                        <ul>
                            {this.itemRender()}
                        </ul>
                    </footer>
                </div>
            </Fragment>
        )
    }
}

export default Foot