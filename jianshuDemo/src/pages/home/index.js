import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from './component/Topic'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
import List from './component/List'

import {connect} from 'react-redux'
import { actionCreators} from './store';

// PureComponent : 提高性能, 不用我们手动去写componentShouldUpdate的方法
// PureComponent 与 (immutableJS来管理数据) 一起使用
class Home extends PureComponent{
    
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img 
                        className="banner-image" 
                        src="https://upload.jianshu.io/admin_banners/web_images/4614/860581df72e818f1c4046b077f6e20ea2069c6ca.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                        alt=''></img>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null }
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}
const mapDispatch = (dispatch) => ({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo());
    },

    changeScrollTopShow(e){
        let isShow = document.documentElement.scrollTop > 200
        dispatch(actionCreators.toggleTopShow(isShow));
    }

});

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

export default connect(mapState, mapDispatch)(Home);