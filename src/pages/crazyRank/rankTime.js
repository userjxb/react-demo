import React, { Component } from 'react';

class rankTime extends Component {
    
    constructor() {
        super();
        this.state = {
            min: 19,
            sec: 59
        }
    }

    componentDidMount() {
        this.count();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return(
            <div className="ranking-time">
                距离下次排名更新还有 <b></b> <b><span> { this.doubleNum(this.state.min) } </span> 分</b> <b><span> { this.doubleNum(this.state.sec) } </span> 秒</b>
            </div>
        )
    }

    doubleNum = (num) => {
        return num<10? '0'+num : num;
    }

    count = () => {
        let { min,sec } = this.state;
        this.timer = setInterval( () => {
            if(sec<=0) {
                sec = 60;
                min --;
            }
            if(min<=0) {
                min = 20;
            }
            this.setState({
                sec: sec --
            })
            this.setState({
                min: min
            })
        }, 1000);
    }
}

export default rankTime;