import React,{Component,Fragment} from 'react'
import './index.scss'
import Swiper from 'swiper'
class HomeBanner extends Component{
    componentDidMount(){
        new Swiper('.swiper-container', {
            scrollbar: {
              el: '.swiper-scrollbar',
              hide: true,
            },
          });
    }
    render(){
        return(
            <Fragment>
                <div id="home_banner">
                {/* <!-- Swiper --> */}
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                        <div className="swiper-slide"><img alt="" src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01J0NbLS2JJhxA6KHhT_!!2053469401.png"/></div>
                        <div className="swiper-slide"><img alt="" src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01hCcFa82JJhx7I5wBt_!!2053469401.png"/></div>
                        <div className="swiper-slide"><img alt="" src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01FJsRuM2JJhx8ruYjn_!!2053469401.png"/></div>
                        <div className="swiper-slide"><img alt="" src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01Xi0Qx12JJhx3atWN1_!!2053469401.jpg"/></div>
                        <div className="swiper-slide"><img alt="" src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01WNiloK2JJhx8SLFTS_!!2053469401.jpg"/></div>
                        </div>
                        {/* <!-- Add Scrollbar --> */}
                        <div className="swiper-scrollbar"></div>
                    </div>
                  </div>
            </Fragment>
        )
    }
}
export default HomeBanner