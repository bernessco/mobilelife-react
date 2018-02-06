import React, { Component } from 'react';
import { Container as Header } from '../Components/Header'
import { Link } from 'react-router-dom'

class Questions extends Component {
    render() {
        return(

			<div className="app-questions app-container">
				<Header/>
				<h1>Questions</h1>
				<Link to="/">Welcome</Link>
			</div>
        )
    }
}

export default Questions;
