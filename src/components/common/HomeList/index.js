import React,{Component,Fragment} from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
class HomeList extends Component{
    render(){
        return(
            <Fragment>
                <div id="home_list">
                   <div className="home_list_title">
                        <div className="home_list_title_left">
                            <em></em>
                            领券直播
                        </div>
                        <div className="home_list_title_right">
                            今日已为用户省钱<span>99,442,514</span>元
                        </div>
                   </div>
                   <ul className="home_list_goods">
                        <li>
                            <Link to="">
                                <div className="home_list_goods_img">
                                    <img alt="" src="https://img.alicdn.com/bao/uploaded/TB1QYtGkcbpK1RjSZFyXXX_qFXa.png_310x310.jpg_.webp"/>
                                </div>
                                <div className="home_list_goods_info">
                                    <p className="goods_title">清风卷纸原木金装4层160g24卷</p>
                                    <p className="goods_price">
                                        <span>天猫价 ¥56.9</span>
                                        <span>已售<em>11.8万</em>件</span>
                                    </p>
                                    <p className="goods_money">
                                        <span>券后价 <em>¥<i>46.9</i></em></span>
                                        <span className="quan">
                                            <em className="em_quan_left"></em>
                                            <i className="quan_left"></i>
                                            10元券
                                            <i className="quan_right"></i>
                                            <em className="em_quan_right"></em>
                                        </span>
                                    </p>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link to="">
                                <div className="home_list_goods_img">
                                    <img alt="" src="https://img.alicdn.com/imgextra/i1/2090433542/O1CN01muNmzi1c2HOmZVG7u_!!2090433542.jpg_310x310.jpg_.webp"/>
                                </div>
                                <div className="home_list_goods_info">
                                    <p className="goods_title">【新券】抹茶水果蛋糕两箱1000g</p>
                                    <p className="goods_price">
                                        <span>天猫价 ¥26.9</span>
                                        <span>已售<em>8万</em>件</span>
                                    </p>
                                    <p className="goods_money">
                                        <span>券后价 <em>¥<i>16.9</i></em></span>
                                        <span className="quan">
                                            <em className="em_quan_left"></em>
                                            <i className="quan_left"></i>
                                            10元券
                                            <i className="quan_right"></i>
                                            <em className="em_quan_right"></em>
                                        </span>
                                    </p>
                                </div>
                            </Link>
                        </li>
                   </ul>
                </div>
            </Fragment>
        )
    }
}

export default HomeList