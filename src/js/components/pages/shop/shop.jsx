import React, { Component } from 'react';



class Shop extends Component {

  render() { 
    $('.collapse').collapse()
      let products=this.props.products.map((v,i)=>{
          return(
            <div key={i} className="col-md-4 text-center">
            <div class="product-entry">
                  <div class="product-img" style={{"background-image":`url(${v.product_img})`}}>
                  <p class="tag"><span class={v.tag}>{v.tag}</span></p>
                  <div class="cart">
                  <p>
                  <span class="addtocart"><a href="#"><i class="fa fa-shopping-cart"></i></a></span>
                  <span><a href="#"><i class="fa fa-eye"></i></a></span>
                  <span><a href="#"><i class="fa fa-heart"></i></a></span>
                  <span><a href="#"><i class="fa fa-bar-chart"></i></a></span>
                  </p>
                  </div> 
                  </div> 
                  <div class="desc">
                  <h3><a href="#">{v.name}</a></h3>
                  <p class="price"><span>{v.price[0]}</span>
                  <span class="sale">{v.price[1]}</span></p>
                  </div>
                  </div>
            </div>
          )
      })
      let Collapse=this.props.side[0].panal_title.map((v,i)=>{
        return(
          <div key={i} class="panel panel-default">
            <div class="panel-heading" role="tab" id={`heading${i}`}>
            <h4 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href={`#collapse${i+1}` } 
            aria-expanded="false" aria-controls={`collapse${i+1}` } class="collapsed">
              {v.option}
            </a>
            </h4>
            </div>
            <div id={`collapse${i+1}` } class="panel-collapse collapse" role="tabpanel" aria-labelledby={`heading${i}`} aria-expanded="false" 
            style={{"height": "0px"}}>
            <div class="panel-body">
            <ul>
            <li><a href="#">Jeans</a></li>
            <li><a href="#">T-Shirt</a></li>
            <li><a href="#">Jacket</a></li>
            <li><a href="#">Shoes</a></li>
            </ul>
            </div>
            </div>
            </div>
        )
      })
      let price1=this.props.side[1].price_from_options.map((v,i)=>{
        return(
            <option key={i} value="#">{v.option}</option>
          
            
        )
      })
      let price2=this.props.side[1].price_from_to.map((v,i)=>{
        return(
            <option key={i} value="#">{v.option}</option>
          
            
        )
      })
      let color=this.props.side[2].Colors.map((v,i)=>{
        return(
          <a  key={i} href="#" class="color " style={{"background":`${v.option}`}} ></a>

        )
      })
      let size=this.props.side[3].Size.map((v,i)=>{
        return(
          <a key={i} href="#" class="size size-1">{v.option}</a>

        )
      })
    return (
      <div className="my-5">
          <div className="container">
              <div className="row">
                  <div className="col-md-2">
                    <div className="sidebar">
                      <div className="side">
                        <h2>{this.props.side[0].title}</h2>
                        <div class="fancy-collapse-panel">
                          <div class="panel-group" id="accordion" >
                            {Collapse}
                          </div>
                        </div>
                      </div>

                      <div class="side">
                          <h2>{this.props.side[1].title}</h2>
                          <form method="post" class="colorlib-form-2">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                    <label for="guests">{this.props.side[1].price_from}</label>
                                    <div class="form-field">
                                      <i class="icon icon-arrow-down3"></i>
                                      <select name="people" id="people" class="form-control">
                                        {price1}
                                      </select>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                    <label for="guests">{this.props.side[1].price_to}</label>
                                    <div class="form-field">
                                      <i class="icon icon-arrow-down3"></i>
                                      <select name="people" id="people" class="form-control">
                                        {price2}
                                      </select>
                                    </div>
                                    </div>
                                </div>
                            </div>
                          </form>
                      </div>
                      <div class="side">
                        <h2>Color</h2>
                            <div class="color-wrap">
                                <p class="color-desc">
                                  {color}
                                </p>
                            </div>
                        </div>

                        <div class="side">
                            <h2>Size</h2>
                            <div class="size-wrap">
                                <p class="size-desc">
                                  {size}
                                </p>
                            </div>
                        </div>
                    </div> 
                  </div>
                  <div className="col-md-10">
                      <div className="row">
                          {products}
                      </div>
                      <div className="row"> 
                        <div className="col-md-12">
                        <ul class="pagination">
                            <li class="disabled"><a href="#">«</a></li> 
                            <li class="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">»</a></li>
                        </ul>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Shop;
