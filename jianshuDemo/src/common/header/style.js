import styled from 'styled-components';
// 引入图片
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    z-index: 5
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
`;

export const Logo = styled.div`
    height: 56px;
    width:100px;
    display:block;
    position: absolute;
    top:0;
    left0;
    background: url(${logoPic});
    background-size: contain;
`;

// export const Logo = styled.a.attrs({
//     href: '/'
// })`
//     height: 56px;
//     width:100px;
//     display:block;
//     position: absolute;
//     top:0;
//     left0;
//     background: url(${logoPic});
//     background-size: contain;
// `;

export const Nav = styled.div`
    width: 60%;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float : left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float : left;
    .slide-enter {
        width: 160px;
        transition: all .2s ease-out;
    }
    .slide-enter-active {
        width: 240px;
    }
    .slide-exit {
        transition: all .2s ease-out;
    }
    .slide-exit-active {
        width: 160px;
    }
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        line-height: 30px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    padding: 0 28px 0 20px;
    font-size: 14px;
    box-sizing: border-box;
    height: 38px
    margin-top: 9px;
    margin-left: 20px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    color: #678;
    &::placeholder{
        color: #999
    }
    &.focused {
        width: 240px;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top:56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff;
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.div`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`
export const SearchInfoList = styled.div`
    overflow: hidden;
`

export const SearchInfoItem = styled.a`
    display:block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    margin-bottom: 10px;
    margin-right: 15px;
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top:0;
    height:56px;
`

export const Button = styled.div`
    float: right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }

    &.writting {
        color: #fff;
        background: #ec6149;
    }
`



