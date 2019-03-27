import React, { Component, Fragment } from "react";
import PriorityBars from "./PriorityBars";
import Filters from "./Filters";
import "./app.scss";

class App extends Component {
	constructor() {
		super();
		this.state = {
			before: [],
			after: [],
			selected: ["Critical", "High", "Medium", "Low"]
		};
		this.handleCheck = this.handleCheck.bind(this);
	}

	componentDidMount() {
		// "fetch" API data related to priorities bar chart
		this.setState({
			before: [
				["Critical", 416],
				["High", 492],
				["Medium", 2568],
				["Low", 2999]
			],
			after: [["Critical", 900], ["High", 662], ["Medium", 849], ["Low", 1290]]
		});
	}

	handleCheck(e) {
		const element = e.target.name;
		const { selected } = this.state;

		let newArr = [];
		if (!selected.includes(element)) {
			newArr = [...selected, element];
		} else {
			newArr = selected.filter(p => p !== element);
		}

		this.setState({ selected: newArr });
	}

	render() {
		const { before, after, selected } = this.state;
		return (
			<div className="container">
				<PriorityBars before={before} after={after} selected={selected} />
				<Filters selected={selected} handleCheck={this.handleCheck} />
			</div>
		);
	}
}

export default App;
