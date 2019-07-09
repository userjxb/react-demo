import React,{ Component,Fragment } from 'react'
import Head from '../common/Head'
import Foot from '../common/Foot'
import Home from '../../pages/Home'
import Category from 'pages/category'
import Menu from 'pages/menu'
import CrazyRank from 'pages/crazyRank'
import Collect from 'pages/collect'

import Test from 'pages/crazyRank/Test'

import './index.scss'
import {Redirect,Route,Switch,withRouter} from 'react-router-dom'
class LayOut extends Component {

    constructor () {
        super()
        this.state = {
            headFlag: true,
            footFlag: true
        }
    }

    componentDidMount () {
        this.head_foot_handler();
    }

    componentWillReceiveProps ( nextProps ) {
        let {  pathname } = nextProps.location
        this.head_foot_handler( pathname );
    }

    render () {
        let { headFlag,footFlag } = this.state;
        return (
            <Fragment>
                { headFlag && <Head></Head> }
                <div id="showRoute">
                    <Switch>
                        <Redirect from="/" to="/home" exact></Redirect>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/category" component={Category}></Route>
                        <Route path="/menu" component={Menu}></Route>
                        <Route path="/crazyRank" component={CrazyRank}></Route>
                        <Route path="/collect" component={Collect}></Route>

                        <Route path="/test" component={Test}></Route>
                    </Switch>
                </div>
                {  footFlag && <Foot></Foot> }
            </Fragment>
        )
    }

    // 是否显示头和尾
    head_foot_handler = ( pathname ) => {

        let path = pathname || this.props.location.pathname

        const headArr = [ '/crazyRank','/collect' ] 
        const FootArr = [ '/crazyRank' ] 
        let headFlag = true
        let footFlag = true
        headArr.forEach( item => {
            if( path === item ){
                headFlag = false
                return
            }
        })
        FootArr.forEach( item => {
            if( path === item ){
                footFlag = false
                return
            }
        })

        setTimeout ( () => {
            if( headFlag ){
                //没有匹配
                this.setState({
                    headFlag: true,
                })
            }else{
                // 匹配到
                this.setState({
                    headFlag: false
                })
            }

            if( footFlag ){
                //没有匹配
                this.setState({
                    footFlag: true,
                })
            }else{
                // 匹配到
                this.setState({
                    footFlag: false
                })
            }
        },0)

    }
}

export default withRouter(LayOut)