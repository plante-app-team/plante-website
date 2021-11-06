import './App.css';
import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import Introduction from './components/introduction/Introduction';

const history = createHistory()
ReactGA.initialize('G-1BK09BE5RZ');

function App() {
  history.listen((location, action) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname + location.search);
  });
  return (
    <Suspense fallback={"loading"}>
      <Router history={history}>
        <div className="App">

          <Switch>
            <Route exact path="/" component={Introduction} />
          </Switch>

        </div>
      </Router>
    </Suspense>
  );
}

export default App;
