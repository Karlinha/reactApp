import React from 'react';

class ListUl extends React.Component {
	constructor(...args) {
      super(...args);
      this.list = {};
  }
  render() {
	
    var Nav = list.map(function(item){
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
     		<div id="header-left"><ul className="ul_s">{Nav}</ul>	</div>
			<div id="header-right">
				<DropdownHeader pageText="Maceió" pageList={List} />
				<div className="styleName"></div>
				<DropdownHeader  pageText="Tudo" pageList={List2} />
			</div>	
        </div>
      );
   }
}

export default ListUl;