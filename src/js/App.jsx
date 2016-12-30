import React from 'react';
import NavBar from './NavBar.jsx'

class Header extends React.Component {
	
   render() {
   	var List = ['Maceió', 'Aracaju', 'Itabaiana', 'Estância', 'Propriá'];
      return (
         <div className="wrapper">
         	<div className="layout-header">
         		<div id="layout-header-left">
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
	         	<NavBar pageList={List} />	
         	</div>
         </div>
      );
   }
}

export default Header;