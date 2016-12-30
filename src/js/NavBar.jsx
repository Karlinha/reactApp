import React from 'react';

class NavBar extends React.Component {
	render() {
    var Pages = this.props.pageList;
    
    var navLinks = Pages.map(function(page){
      return (
        <a href="#">{page}</a>
      );
    }); 
    return (<nav>{navLinks}</nav>);
  }
}
export default NavBar;