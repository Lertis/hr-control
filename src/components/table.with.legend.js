import React from "react";
import "./table.with.legend.css";

class TableWithLegend extends React.Component {
	render() {
		return (
			<fieldset>
				<legend>{this.props.legend || "Table Legend"}</legend>
				<table>
					<tbody>
						{this.props.tableItems.map((el, i) =>
							<React.Fragment key={i}>
								<tr>
									<th><strong>{el.name}</strong></th>
									<td><div>{el.info}</div></td>
								</tr>
							</React.Fragment>
						)}
					</tbody></table>
			</fieldset>
		);
	}
}

export default TableWithLegend;
