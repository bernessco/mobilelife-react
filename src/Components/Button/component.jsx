
import React from 'react'

const Button = ({ text, onClick }) => {
    return(
        <div className="app-button-wrapper">
			<button type="button" className="app-button" onClick={ onClick }> { text } </button>
		</div>
    )
}
export default Button
