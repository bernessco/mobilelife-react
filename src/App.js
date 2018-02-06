import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AllReducers from './Reducers';

import { Container as WelcomeView } from './Views/Welcome'
import { Container as QuestionsView } from './Views/Questions'

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
					<Route exact path="/" component={ WelcomeView }/>
					<Route exact path="/questions" component={ QuestionsView }/>
				</div>
			</Router>
		</Provider>
    );
  }
}

export default App;
