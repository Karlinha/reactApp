import React from 'react';

class Table extends React.Component {
	render() {
		return (
			<table><tr>
				<td className="col1">{hour}</td>
				<td className="col2">{days-left}</td>
				<td className="col3">January</td>
				<td className="col4">$100</td>
				<td className="col5">$100</td>
  			</tr></table>
		);
	}
}

export default Table;
