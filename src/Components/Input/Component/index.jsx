
import React from 'react'

const Input = ({ type, placeholder, value, onChange }) => {
    return(
        <div className="app-input-wrapper">
			<input type={ type } placeholder={ placeholder } value={ value } onChange={onChange} className="app-input"/>
		</div>
    )
}
export default Input
