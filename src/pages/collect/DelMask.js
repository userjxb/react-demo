import styled from 'styled-components';

export const DelMask = styled.div`
    background-color: rgba(0,0,0,.3);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 19960518;
    .del-box {
        width: 2.6rem;
        height: 1.48rem;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -1.3rem;
        margin-top: -0.74rem;
        background-color: #fff;
        box-shadow: 1px 1px 50px rgba(0,0,0,.3);
        border-radius: 2px;
        position: relative;
        .title {
            padding: 0 .8rem 0 .2rem;
            height: .43rem;
            background: #FC3F78;
            color: #fff;
            line-height: .43rem;
        }
        .close {
            position: absolute;
            right: .12rem;
            top: .08rem;
            color: #fff;
            font-size: .18rem;
        }
        .tip {
            padding: .2rem;
            line-height: .24rem;
        }
        .btns {
            padding-bottom: .05rem;
            height: .36rem;
            .btn {
                padding: 0 .35rem;
                margin: 0 .06rem;
                border: 1px solid #dedede;
                height: .34rem;
                line-height: .34rem;
                float: right;
                border-radius: 3px;
                outline: 0;
            }
            .del {
                background: #FC3F78;
                color: #fff;
                border-color: #FC3F78;
            }
            .cancle {
                background: #eee;
                color: #666;
                border-color: #eee;
            }
        }
    }
`