import React, { Component } from 'react';

class Header extends Component {    
    render() {
        return(
            <header className="app-header">
                    <button className="app-header__back">
                        <i className="material-icons" aria-hidden="true">keyboard_arrow_left</i>
                        Home
                    </button>
                <div className="app-header__center">
                    Title
                </div>
            </header>
        )
    }
}
export default Header