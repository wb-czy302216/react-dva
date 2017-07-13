import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Search from './routes/Search';
import CommitTime from './routes/CommitTime';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} >
        <Route path="search" component={Search} />
        <Route path="commitTime" component={CommitTime} />
      </Route>
    </Router>
  );
}

export default RouterConfig;