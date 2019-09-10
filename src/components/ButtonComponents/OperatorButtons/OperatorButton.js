import React from "react";

const OperatorButton = props => {
	return (
		<button className="buttons" id="opbtn">
			{props.operators.value}
		</button>
	);
};

export default OperatorButton;
