import './App.css';
import { Route, Switch, Redirect, BrowserRouter, withRouter } from "react-router-dom";
import Home from './components/home';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/submitted" render={() => <h2>Submitted</h2>}  />
          <Route path="/" exact component={Home} />
          <Route path="/not-found" render={() => <h2>Not found</h2>} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default withRouter(App);
