import React, { Component } from 'react';
import { CSSTransition} from 'react-transition-group';
import { connect } from 'react-redux';
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem
} from './style.js';

import { Link } from 'react-router-dom';
import { actionCreators }from './store';
import { actionCreators as loginActionCreators }from '../../pages/login/store';

class Header extends Component{
    render(){
        const {focused, list, handleInputFocus, handleInputBlur, login, logout } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    { 
                        login ? 
                            <NavItem onClick={logout} className='right'>退出</NavItem> : 
                            <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
                    }
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition 
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch className={focused ? 'focused': ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe6e4;</i>
                        {this.getListArea(focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='writting'>
                            <i className='iconfont'>&#xe602;</i>
                            写文章
                        </Button>
                    </Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    getListArea() {
        const {focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
        const varList = list.toJS();
        const pageList = []
        let countNum = 9
        if(varList.length){
            for (let i = (page - 1)*countNum; i< page*countNum; i++){
                pageList.push(
                    <SearchInfoItem key={varList[i]}> {varList[i]} </SearchInfoItem>
                )
            }
        }
        
        if (focused || mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    // immutable中不可以用 点语法
    return {
        // focused: state.header.focused
        /// 这样调 数据生成的方式不统一
        focused: state.get('header').get('focused'),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login', 'login'])
        // 等价写法: 
        // focused: state.getIn(['header', 'focused'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list){
            if(list.size === 0){
                dispatch(actionCreators.getList())
            }
            dispatch(actionCreators.searchFoucs())
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle){
                originAngle = parseInt(originAngle)
            }else{
                originAngle = 0
            }
            spin.style.transform = 'ratate(' + (originAngle+360) + 'deg)';
            if (page < totalPage){
                dispatch(actionCreators.changePageList(page + 1))
            }else{
                dispatch(actionCreators.changePageList(1))
            }
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);