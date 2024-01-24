import './App.css';
import React, { Suspense, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import Introduction from './components/introduction/Introduction';
import HelpUs from './components/helpUs/helpUs';
import DeleteAccount from './components/deleteAccount/deleteAccount'

const history = createHistory()
ReactGA.initialize('G-1BK09BE5RZ');
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname + location.search);
});

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  })
  return (
    <Suspense fallback={"loading"}>
      <Router history={history}>
        <div className="App vh-100">

          <Switch>
            <Route exact path="/" component={Introduction} />
            <Route exact path="/help-us" component={HelpUs} />
            <Route exact path="/delete-account" component={DeleteAccount} />
          </Switch>

        </div>
      </Router>
    </Suspense>
  );
}

export default App;
