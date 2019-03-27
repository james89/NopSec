import React, { Fragment } from "react";
import Priority from "./Priority";
import "./priority-bars.scss";

const PriorityBars = ({ before, after, selected }) => {
	return (
		<Fragment>
			<div className="priority-bar">
				{before.map((level, i) => {
					return <Priority key={i} level={level} selected={selected} />;
				})}
			</div>
			<div className="priority-bar">
				{after.map((level, i) => {
					return <Priority key={i} level={level} selected={selected} />;
				})}
			</div>
		</Fragment>
	);
};

export default PriorityBars;
