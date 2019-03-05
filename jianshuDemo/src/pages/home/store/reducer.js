import { fromJS } from 'immutable';
import * as constants from './constants';

const defaulfState = fromJS({
    topicList: [],
    articleList: [],
    recommendList:[],
    writerList:[],
    articlePage:0,
    showScroll: false
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
    })
}

const addArticleList = (state, action) => {
     // return state.set('articleList', state.get('articleList').concat(action.list))
     return state.merge({
        'articleList' : state.get('articleList').concat(action.list),
        'articlePage' : action.nextPage
    })
}

export default (state = defaulfState, action) => {
    // 代码优化
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state, action)
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show);
        default:
            return state;
    } 
} 