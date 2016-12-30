import React from 'react'
import { Dropdown } from 'semantic-ui-react'


class DropdownHeader extends React.Component {
  render() {
    var PageText = this.props.pageText
    var Pages = this.props.pageList;
   
    var navLinks = Pages.map(function(page){
      return (
        <Dropdown.Item text={page} />
      );
    }); 
    
    return (
      <Dropdown text={PageText}>

        <Dropdown.Menu className="drop-menu" >
          {navLinks}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
export default DropdownHeader;

