import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import { Router, Route,IndexRoute, IndexRedirect} from 'dva/router';

export default function ({ history }) {
  return (
   <Router history={history}>
	  <Route path='/' component={App}>

      </Route>
	</Router>
  );
}
//
// <IndexRoute component={Record} />
// <Route path='record' component={Record}/>
