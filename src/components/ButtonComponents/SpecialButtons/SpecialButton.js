import React from "react";

const SpecialButton = props => {
	return (
		<button className="buttons" id="specbtn">
			{props.specials}
		</button>
	);
};

export default SpecialButton;
