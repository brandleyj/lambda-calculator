import React from "react";
import { directive } from "@babel/types";

const NumberButton = props => {
	return (
		<button className="buttons" id="numbtn">
			{props.numbers}
		</button>
	);
};

export default NumberButton;
