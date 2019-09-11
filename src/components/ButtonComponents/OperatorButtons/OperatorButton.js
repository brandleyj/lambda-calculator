import React from "react";
import { directive } from "@babel/types";

const OperatorButton = props => {
	return (
		<div className="rightSide">
			<button className="buttons" id="opbtn">
				{props.operators.value}
			</button>
		</div>
	);
};

export default OperatorButton;
