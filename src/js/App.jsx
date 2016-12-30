import React from 'react';
import DropdownHeader from './Dropdown.jsx';
import { Icon, Popup, Grid } from 'semantic-ui-react'

class Header extends React.Component {
	
   render() {
   	var List = ['Maceió', 'Aracaju', 'Itabaiana', 'Estância', 'Propriá'];
   	var List2 = ['Meu Departamento', 'Meu Agendamento', 'Como Responsável', 'Departamento', 'Colaborador', 'Atrasados'];
      return (
     	<div id="layout-header">
     		<div id="header-left">
				<a href="#" data-toggle="tooltip" data-placement="bottom" title="Hoje"> 
					<img alt="refresh" src="/src/img/refresh-16.png" className="icon"/></a>
				<a href="#" data-toggle="tooltip" data-placement="bottom" title="Buscar"> 
					<img alt="search" src="/src/img/search-16.png" className="icon"/></a>
				<a href="#" data-toggle="tooltip" data-placement="bottom" title="Imprimir"> 
					<img alt="printer" src="/src/img/printer-16.png" className="icon"/></a>
				<a href="#" data-toggle="tooltip" data-placement="bottom" title="Calendário"> 
					<img alt="calendar" src="/src/img/calendar-16.png" className="icon"/></a>
				<a href="#" data-toggle="tooltip" data-placement="bottom" title="Adicionar"> 
					<img alt="plus" src="/src/img/plus-16.png" className="icon"/></a>
			</div>
			<div id="header-right">
				<DropdownHeader pageText="Maceió" pageList={List} />
				<DropdownHeader className="teste" pageText="Tudo" pageList={List2} />
			</div>	
        </div>
      );
   }
}

export default Header;

