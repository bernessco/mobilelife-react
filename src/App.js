import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AllReducers from './Reducers';

import { Container as WelcomeView } from './Views/Welcome'
import { Container as QuestionsView } from './Views/Questions'
import { Container as ResultsView } from './Views/Results'

const loggerMiddleware = createLogger();
const Store = createStore(
    AllReducers,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

class App extends Component {
  render() {
    return (
		<Provider store={ Store }>
			<Router>
				<div className="app">
					<Switch>
						<Route exact path="/" component={ WelcomeView }/>
						<Route exact path="/questions" component={ QuestionsView }/>
						<Route exact path="/results" component={ ResultsView }/>
						<Redirect to="/" />
					</Switch>
				</div>
			</Router>
		</Provider>
    );
  }
}

export default App;
