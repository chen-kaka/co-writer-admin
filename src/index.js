import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import dva from 'dva';
import { hashHistory } from 'dva/router';
import router from './router';
import model from './components/model';

// 1. Initialize
const app = dva({
  history: hashHistory,
});

// 2. Model  // 处理reducer
app.model(model);

// 3. Router
app.router(router);

console.log(app);
// 4. Start
app.start('#app');
