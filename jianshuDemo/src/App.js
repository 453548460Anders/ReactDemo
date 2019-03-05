import React, { Component } from 'react';
import { GlobalIconfontStyle } from './statics/iconfont/iconfont'
import Header from './common/header'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
// import Detail from './pages/detail';
import Detail from './pages/detail/loadable.js';

import Write from './pages/write';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <GlobalIconfontStyle />          
          <BrowserRouter>
            <div>
              {/* exact: 当path完全相同的时候, 才显示对应的内容 */}
              {/* <Route path='/' exact render={()=><div>home</div>}></Route>
              <Route path='/detail' exact render={()=><div>detail</div>}></Route> */}
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
