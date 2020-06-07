import React,{Component } from "react"

class Content extends Component{
    state = {
        imgsrc: "https://i.picsum.photos/id/284/200/200.jpg",
        products: [
          { name: "Shoe 1", price: 400 },
          { name: "Shoe 2", price: 300 },
          { name: "Shoe 3", price: 400 },
          { name: "Shirt 1", price: 400 },
          { name: "Shirt 2", price: 500 },
          { name: "Shirt 3", price: 600 },
        ],
        cartItemsCount: 0,
      };
    
      style = {
        display: "inline-block",
      };
    
      handleAddToCart = () => {
        this.setState({
          ...this.state,
          cartItemsCount: this.state.cartItemsCount + 1,
        });
      };
      clearCart = () => {
        this.setState({
          cartItemsCount: 0,
        });
      };
    
      render() {
        const { imgsrc, products, cartItemsCount } = { ...this.state };
        return (
          <div className="row">
            <div className="col-sm-12 mb-4">
              <div
                className="cartContainer"
                style={{
                  width: "100%",
                  display: "inline-block",
                  textAlign: "right",
                }}
              >
                <div className="itemCount" style={this.style}>
                  {cartItemsCount ? cartItemsCount : "No items in cart"}
                </div>
                {cartItemsCount && (
                  <button
                    onClick={this.clearCart}
                    className="ml-2"
                    style={this.style}
                  >
                    Clear cart
                  </button>
                )}
              </div>
            </div>
    
            {products.map((product, index) => (
              <div className="col-sm-4 mb-4" key={index}>
                <img src={imgsrc} />
                <p>
                  Name : <b>{product["name"]}</b> Price: <b>{product["price"]}</b>
                </p>
                <button
                  className="bnt btn-primary btn-sm"
                  onClick={this.handleAddToCart}
                >
                  Add Cart
                </button>
              </div>
            ))}
          </div>
        );
      }
    }
export default Content