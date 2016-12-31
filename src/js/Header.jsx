import React from 'react';
import DropdownHeader from './Dropdown.jsx';
import { Icon, Popup, Grid } from 'semantic-ui-react'

class Header extends React.Component {
	
   render() {
   	var List = ['Maceió', 'Aracaju', 'Itabaiana', 'Estância', 'Propriá'];
   	var List2 = ['Meu Departamento', 'Meu Agendamento', 'Como Responsável', 'Departamento', 'Colaborador', 'Atrasados'];
    var List3 = ['refresh','search', 'print', 'date_range', 'add'];
	
    var Nav = List3.map(function(item){
      return (
        <li>
          <a href="#" data-toggle="tooltip" data-placement="bottom" title={item}>  
           <i className="material-icons navbar-principal__icone icon-header">{item}</i>
			   </a>
		    </li>
      );
    });       

    return (
     <div id="layout-header">
     		<div id="header-left" ><ul className="ul_s">{Nav}</ul></div>
			<div id="header-right">
				<DropdownHeader pageText="Maceió" pageList={List} />
				<div className="styleName"></div>
				<DropdownHeader  pageText="Tudo" pageList={List2} />
			</div>	
        </div>
      );
   }
}

export default Header;

