import React, { Component } from 'react';

class Footer extends Component {
  render() {
    let care_link=this.props.footer[1].care_list.map((v,i)=>{
      return(
        <li key={i}><a href="#">{v.item}</a></li>

        
      )
    })
    let info_link=this.props.footer[2].info_list.map((v,i)=>{
      return(
        <li key={i}><a href="#">{v.item}</a></li>

        
      )
    })
    let news_link=this.props.footer[3].news_list.map((v,i)=>{
      return(
        <li key={i}><a href="#">{v.item}</a></li>

        
      )
    })
    let add_link=this.props.footer[4].add_list.map((v,i)=>{
      return(
        <li key={i}><a href="#">{v.item}</a></li>

        
      )
    })
    return (
      <div>
          <div id="colorlib-subscribe">
              <div className="container">
                  <div className="row">
                    <div className="col-md-2"></div>
                  <div className="col-md-8   ">
                            <div className="row">
                            <div className="col-md-6 text-center">
                                <h2><i className="fa fa-paper-plane"></i>{this.props.form[0].sign_up} </h2>
                            </div>
                            <div className="col-md-6">
                            <form class="form-inline qbstp-header-subscribe">
                            <div class="form-group">
                            <input type="text" class="form-control" id="email" placeholder={this.props.form[0].email}/>
                            <button type="submit" class="btn btn-primary">{this.props.form[0].btn}</button>
                            </div>
                            </form>
                            </div>
                            </div>
                    </div>
                  </div>
              </div>
          </div>
          <div id="colorlib-footer">
              <div className="container">
                <div className="row row-pb-md">
                  <div className="col-md-3 colorlib-widget">
                  <h4>{this.props.footer[0].title}</h4>
                  <p>{this.props.footer[0].parah}</p>
                  <p></p>
                    <ul class="colorlib-social-icons">
                      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                      <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                      </ul>
                      <p></p>
                  </div>
              

                <div class="col-md-2 colorlib-widget">
                      <h4>{this.props.footer[1].title}</h4>
                      <p>
                      </p>
                      <ul class="colorlib-footer-links">
                        {care_link}
                      </ul>
                      <p></p>
                  </div>
                  <div class="col-md-2 colorlib-widget">
                    <h4>{this.props.footer[2].title} </h4>
                    <p>
                    </p><ul class="colorlib-footer-links">
                      {info_link}
            
                    </ul>
                    <p></p>
                    </div>
                    <div class="col-md-2">
                      <h4>{this.props.footer[3].title}</h4>
                      <ul class="colorlib-footer-links">
                        {news_link}
                      </ul>
                      </div>
                      <div class="col-md-3">
                        <h4>{this.props.footer[4].title}</h4>
                        <ul class="colorlib-footer-links">
                        <li>{this.props.footer[4].address[0]} <br/> {this.props.footer[4].address[1]}</li>
                          {add_link}
                        </ul>
                      </div>
                </div>
              </div>
              <div class="copy">
<div class="row">
<div class="col-md-12 text-center">
<p>
<span class="block">
{this.props.footer[4].copyright[0]}
 <i class="far fa-heart" aria-hidden="true"></i>{this.props.footer[4].copyright[1]} 
 <a href="#" target="_blank"> {this.props.footer[4].copyright[2]} </a>
</span>
<span class="block">{this.props.footer[4].copyright[3]} 
<a href="#" target="_blank">{this.props.footer[4].copyright[4]}</a> {this.props.footer[4].copyright[5]} 
<a href="#" target="_blank">{this.props.footer[4].copyright[6]}</a></span>
</p>
</div>
</div>
</div>
          </div>
          
      </div>
    );
  }
}

export default Footer;

