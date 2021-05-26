import React from 'react';
import TableWithLegend from './components/table.with.legend';

class App extends React.Component {
	render() {
		const list = [
			{ name: "Email", info: "yura.gusak7@gmail.com" },
			{ name: "Work mobile", info: "+380678465227" },
			{ name: "Skype", info: "paradise8538" },
			{ name: "Status", info: "Current" },
			{ name: "Last Login", info: "25/05/2021 19:04" }
		];
		return (
			<TableWithLegend legend="Legend" tableItems={list} />
		);
	}
}

export default App;
