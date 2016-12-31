import React from 'react';
import {Button} from 'react-bootstrap';
import {Collapse} from 'react-bootstrap';
class Table extends React.Component {
	
	constructor(...args) {
    	super(...args);
    	this.state = {};
    	this.iconsList = ['folder_open', 'check', 'edit', 'cancel'];
    	this.dataList = ['ID', 'PROCESSO', 'OBJETO', 'PARTE CONTRÁRIA', 'INSTÂNCIA ATUAL', 'TIPO DE INTIMAÇÃO', 'DATA DE INTIMAÇÃO'];
    	this.dataDescriptionList = ['TID', 'PROCESSO', 'OBJETO', 'PARTE CONTRÁRIA', 'INSTÂNCIA ATUAL', 'TIPO DE INTIMAÇÃO', 'DATA DE INTIMAÇÃO'];
  	}

	render() {
		var ListData = this.props.date;
		var icons = this.iconsList.map(function(icon){
      		return (
	     		<a href="#" data-toggle="tooltip" data-placement="bottom" title={icon}>  
					<i className="material-icons navbar-principal__icone">{icon}</i>
				</a>
      		);
    	});
    	var dataL = this.dataList.map(function(data){
      		return (
	     		<li>{data}</li>
      		);
    	});
    	var dataDL = this.dataDescriptionList.map(function(data){
      		return (
	     		<li>{data}</li>
      		);
    	});

		return (
			<ul className="ul_s">
			<Button className="but-cost" onClick={ ()=> this.setState({ open: !this.state.open })}>
				<li>
				
				<div className="line-table">
					<div className="col1"><spam>{'12:00'}</spam></div>
					<div className="col2"><spam>{'HOJE'}</spam></div>
					<div className="col3">
						<div className="col3-1"><spam>{'Santa Casa de Misericórdia de Maceió'}</spam></div>
						<div className="col3-2"><spam>{'Requerimento de Baixa Complexidade'}</spam></div>
						<div className="collapse-div"><Collapse in={this.state.open}>
          					<div className="collapse-div2"><ul>{dataL}</ul></div>
          					<div className="collapse-div3"><ul>{dataDL}</ul></div>
        				</Collapse></div>
					</div>
					<div className="col4">
						<img className="img-circle" src="src/img/jamesFord.jpg" />
						<spam>James Ford</spam>
					</div>
					<div className="col5">{icons}</div>
				</div>
				
				</li>
				</Button>
			</ul>

		);
	}
}

export default Table;
