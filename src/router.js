import React from 'react'
import { Router, Route , IndexRedirect } from 'dva/router'
import App from './routes/app'
import Error from './routes/error'
import Dashboard from './routes/dashboard'
import Users from './routes/users'
import Ico from './routes/ui/ico'
import Repositroy from './routes/repos/repo'
import RepoNode from './routes/repos/repo_node'

export default function ({ history }) {
  return (
    <Router history={ history }>
      <Route path="/" component={ App } >
        <IndexRedirect to="/repos/repo" />
        <Route path="/repos/repo" component={ Repositroy }/>
        <Route path="/repos/repo_node" component={RepoNode} />
        <Route path="dashboard" component={ Dashboard }/>
        <Route path="/users" component={ Users } />
        <Route path="/ui/ico" component={Ico}/>
        <Route path="*" component={ Error } />
      </Route>
    </Router>
  )
}
