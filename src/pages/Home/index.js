import React,{Component,Fragment} from 'react'
import './index.scss'
import HomeList from '../../components/common/HomeList'
import HomeBanner from '../../components/common/HomeBanner'
class Home extends Component{
    render(){
        return(
            <Fragment>
                <div id="home">
                    <HomeBanner></HomeBanner>
                    <HomeList></HomeList>
                </div>
            </Fragment>
        )
    }
}

export default Home