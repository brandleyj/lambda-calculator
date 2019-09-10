import React from "react";

const NumberButton = props => {
	return (
		<button className="buttons" id="numbtn">
			{props.numbers}
		</button>
	);
};

export default NumberButton;
