import React from 'react';
import ListDivided from './List.jsx';
import Table from './Table.jsx';
import {Button} from 'react-bootstrap';
import {Collapse} from 'react-bootstrap';
const allData = [
{
  'day': 'Hoje',
  'date': '20 de abril de 2015',
  'days-left': 'Hoje',  
  'processes': [
   {
   		'hour': '12:00',
   		'company': 'Santa Casa de Miséricordia de Maceió', 
   		'description': 'Requerimento de Baixa Complexidade',
      	'id': '7854',
      	'process': '[15054] - 080154-49.2014.4.05.8000',
      	'object': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
      	'opposition': 'Quitéria Maria da Conceição de Lima',
      	'actual-instance': '13ª Vara Federal de Alagoas',
      	'type': 'Correspondência',
      	'date': '22/06/2015',
      	'user': {
     		'image': 'img/jamesFord.jpg',
     		'name': 'James Ford',
   		},
   		'finish': 'false',
    },
    {
   		'hour': '13:15',
   		'company': 'Atlântica Serviços e Transportes Ltda.', 
   		'description': 'Petição Inicial',
      	'id': '7854',
      	'process': '[15054] - 080154-49.2014.4.05.8000',
      	'object': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
      	'opposition': 'Quitéria Maria da Conceição de Lima',
      	'actual-instance': '13ª Vara Federal de Alagoas',
      	'type': 'Correspondência',
      	'date': '22/06/2015',
      	'user': {
     		'image': 'img/johnLocke.jpg',
     		'name': 'John Locke',
   		},
   		'finish': 'false',
    },
    {
   		'hour': '14:00',
   		'company': 'VSA EMPREENDIMENTO IMOBILIÁRIO SPE LTDA', 
   		'description': 'Defesa Administrativa',
      	'id': '7854',
      	'process': '[15054] - 080154-49.2014.4.05.8000',
      	'object': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
      	'opposition': 'Quitéria Maria da Conceição de Lima',
      	'actual-instance': '13ª Vara Federal de Alagoas',
      	'type': 'Correspondência',
      	'date': '22/06/2015',
      	'user': {
     		'image': 'img/guest-16.jpg',
     		'name': 'Jack Shephard',
   		},
   		'finish': 'true',
    }]
},
{
  'day': 'Terça',
  'date': '21 de abril de 2015',
  'days-left': '1 dia',  
  'processes': [
   {
   		'hour': '13:30',
   		'company': 'Atlântica Serviços e Transportes Ltda.', 
   		'description': 'Apelação',
      	'id': '7854',
      	'process': '[15054] - 080154-49.2014.4.05.8000',
      	'object': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
      	'opposition': 'Quitéria Maria da Conceição de Lima',
      	'actual-instance': '13ª Vara Federal de Alagoas',
      	'type': 'Correspondência',
      	'date': '22/06/2015',
      	'user': {
     		'image': 'img/johnLocke.jpg',
     		'name': 'John Locke',
   		},
   		'finish': 'false',
    },
    {
   		'hour': '14:00',
   		'company': 'VSA EMPREENDIMENTO IMOBILIÁRIO SPE LTDA', 
   		'description': 'Defesa Administrativa',
      	'id': '7854',
      	'process': '[15054] - 080154-49.2014.4.05.8000',
      	'object': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
      	'opposition': 'Quitéria Maria da Conceição de Lima',
      	'actual-instance': '13ª Vara Federal de Alagoas',
      	'type': 'Correspondência',
      	'date': '22/06/2015',
      	'user': {
     		'image': 'img/jamesFord.jpg',
     		'name': 'James Ford',
   		},
   		'finish': 'true',
    },
    {
   		'hour': '15:45',
   		'company': 'Contrutora Empreendimentos Imobiliários Ltda', 
   		'description': 'Obtenção de Andamento de Processo',
      	'id': '7854',
      	'process': '[15054] - 080154-49.2014.4.05.8000',
      	'object': 'Confirmar a informação da Autora cerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto.',
      	'opposition': 'Quitéria Maria da Conceição de Lima',
      	'actual-instance': '13ª Vara Federal de Alagoas',
      	'type': 'Correspondência',
      	'date': '22/06/2015',
      	'user': {
     		'image': 'img/kateAusten.jpg',
     		'name': 'Kate Austen',
   		},
   		'finish': 'true',
    }]
}];

class Content extends React.Component {
	 constructor(...args) {
    super(...args);

    this.state = {};
  }

  render() {
		return (
			<div>
				<div className="table-title">
					<div className="table-title-day">{'HOJE'}</div>
					<a href="#" data-toggle="tooltip" data-placement="bottom" title="Hoje"> 
					<i className="table-title-icon able-title-icon large material-icons navbar-principal__icone">add</i>
					</a>
					<div className="table-title-date"><spam>{'20 de abril de 2015'}</spam></div>
				</div>

				{/*<ListDivided  />*/}
				<Table date={allData} />
			</div>
      
		);
	}
}

export default Content;
