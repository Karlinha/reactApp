import React from 'react';

class Table extends React.Component {
	render() {
		var List = ['folder_open', 'check', 'edit', 'cancel'];
		var Nav = List.map(function(item){
      	return (
     		<a href="#" data-toggle="tooltip" data-placement="bottom" title={item}>  
				<i className="material-icons navbar-principal__icone">{item}</i>
			</a>
      	);
    	});

		return (
			<ul>
				<li>
				<div className="line-table">
					<div className="col1"><spam>{'12:00'}</spam></div>
					<div className="col2"><spam>{'HOJE'}</spam></div>
					<div className="col3">
						<div className="col3-1"><spam>{'Santa Casa de Misericórdia de Maceió'}</spam></div>
						<div className="col3-2"><spam>{'Requerimento de Baixa Complexidade'}</spam></div>
					</div>
					<div className="col4">
						<img className="img-circle" src="src/img/jamesFord.jpg" />
						<spam>James Ford</spam>
					</div>
					<div className="col5">
						{Nav}	
					</div>
				</div>
				</li>
			</ul>
		);
	}
}

export default Table;
