import React from 'react';

const Header =(props)=> {
 
    return (
      <div className="header w-100">
        
         <div className="header-img "
          style={{"background-image":`url(${props.header[0].header_bg_img})`}}>
              <div className="text-center">
                <h2>{props.header[0].header_title}</h2>
                <p className="bread">
                  <span><a href="#" style={{"color":"#FFC300"}}>{props.header[0].home}</a></span>
                   <span><a href="#">{props.header[0].shop}</a></span></p>
               
              </div>
          </div>
        
      </div>
    );
  
}

export default Header;
