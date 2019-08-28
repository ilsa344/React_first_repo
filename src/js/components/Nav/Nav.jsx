import React, { Component } from 'react';

class Nav extends Component {
  
  render() { 
    console.log("nav data",this.props.nav);
    let dropdown=this.props.nav[0].nav_list[0].dropdown.map((v,i)=>{
      return(
<li  key={i}><a href="#">{v.drop_item}</a></li>


      )
    })
  
    return ( <div className="nav">
     <div className="container py-4">
     <nav className="navbar navbar-expand-lg navbar-light  bg-white text-capitalize">
  <a className="navbar-brand " href="#">{this.props.nav[0].nav_title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
    <li  className="nav-item ">
      <a className="nav-link" href="#">{this.props.nav[0].nav_list[0].link1}</a>
    </li>
    <li  className="nav-item ">
      <a className="nav-link" style={{"color":"#ffc300"}} href="#">{this.props.nav[0].nav_list[0].link2}</a>
      <ul className="dropdown">
        {dropdown}
      </ul>
    </li>
    <li  className="nav-item ">
      <a className="nav-link" href="#">{this.props.nav[0].nav_list[0].link3}</a>
    </li>
    <li  className="nav-item ">
      <a className="nav-link" href="#">{this.props.nav[0].nav_list[0].link4}</a>
    </li>
    <li  className="nav-item ">
      <a className="nav-link" href="#">{this.props.nav[0].nav_list[0].link5}</a>
    </li>
    <li  className="nav-item ">
      <a className="nav-link" href="#"><i  className="fa fa-shopping-cart"></i> {this.props.nav[0].nav_list[0].link6}</a>
    </li>
    </ul>
  </div>
</nav>
     </div>

    </div> );
  }
}
 
export default Nav;