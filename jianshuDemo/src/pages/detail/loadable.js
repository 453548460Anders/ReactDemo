import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  /// 需要传一个函数, 返回加载的组件
  loading(){
      return <div>正在加载...</div>
  }
});

///  无状态组件
export default () => <LoadableComponent/>;
