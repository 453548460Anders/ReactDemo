import * as constants from './constants';
import { fromJS } from 'immutable';

const defaulfState = fromJS({
    focused: false,
    mouseIn: false,
    list:[],
    page: 1,
    totalPage: 1
});

export default (state = defaulfState, action) => {
    // 代码优化
    switch(action.type){
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            // merge: 相当于同时调用多个set, 但是其性能更高(因为仅执行一次)
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
            // return state.set('list', action.data).set('totalPage', action.totalPage);
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE_LIST:
            return state.set('page', action.page);
        default:
            return state;
    }

    // if (action.type === constants.SEARCH_FOCUS){
    //     /// immutable对象的set方法, 会结合之前的immutable对象的值和设置的值, 返回一个全新的对象
    //     return state.set('focused', true)
    // }

    // if (action.type === constants.SEARCH_BLUR){
    //     return state.set('focused', false)
    // }

    // if (action.type === constants.CHANGE_LIST){
    //     return state.set('list', action.data);
    // }

    // return state;
} 