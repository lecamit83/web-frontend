import React, { Component } from "react";
import { Grid, Button, ButtonGroup, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Cart.css";

class Cart extends Component {
  state = {
    count: 1,
    price: 36000,
    priceString: "36.000",
    priceAllProducts: 36000,
    priceAllProductsString: "36.000"
  };

  priceToString(temp) {
    var str = "";
    while (temp >= 1000) {
      var t = temp % 1000;
      if (t === 0) {
        str += "000";
      }
      str += ".";
      temp = temp / 1000;
    }
    var arr = str.split("");
    arr.reverse();
    str = arr.join("");
    return temp + str;
  }

  handleDelete() {}

  render() {
    return (
      <div className="cart-container">
        <span className="cart-title">Giỏ hàng (10 Sản phẩm):</span>
        <div style={{ marginLeft: 30, marginRight: 30 }}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              {[1, 2, 3, 4, 5, 6].map(() => (
                <Grid
                  className="infor-product-container"
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  style={{
                    borderRadius: 8
                  }}
                >
                  <Link to="/details">
                    <img
                      src={require("../images/detail-white-2.jpg")}
                      alt="Cart"
                      className="image-product-cart"
                    />
                  </Link>
                  <div className="infor-container">
                    <Grid>
                      <span class="title-product-cart">
                        Giày Sneaker Nam Thời Trang - Pettino GV03 - Đen - 39
                      </span>
                      <br />
                      <span class="title-product-cart">Chỉ còn 5 sản phẩm</span>
                      <br />
                      <span class="title-product-cart">
                        Cung cấp bởi Pettino
                      </span>
                      <br />
                      <Button
                        style={{ color: "blue", fontSize: 12 }}
                        onClick={this.handleDelete.bind(this)}
                      >
                        Delete
                      </Button>
                    </Grid>
                  </div>
                  <div className="infor-container">
                    <h4>{this.state.priceString} VND</h4>
                  </div>
                  <div className="infor-container">
                    <ButtonGroup className="button-group">
                      <Button
                        onClick={() => {
                          if (this.state.count > 1) {
                            this.setState({
                              count: this.state.count - 1,
                              priceAllProducts:
                                this.state.priceAllProducts - 36000,
                              priceAllProductsString: this.priceToString(
                                this.state.priceAllProducts - 36000
                              )
                            });
                          }
                        }}
                      >
                        {" "}
                        -{" "}
                      </Button>
                      <span className="number-product">{this.state.count}</span>
                      <Button
                        onClick={() => {
                          if (this.state.count < 100) {
                            this.setState({
                              count: this.state.count + 1,
                              priceAllProducts:
                                this.state.priceAllProducts + 36000,
                              priceAllProductsString: this.priceToString(
                                this.state.priceAllProducts + 36000
                              )
                            });
                          }
                        }}
                      >
                        {" "}
                        +{" "}
                      </Button>
                    </ButtonGroup>
                  </div>
                </Grid>
              ))}
            </Grid>
            <Grid
              style={{
                backgroundColor: "white",
                marginTop: 8,
                height: 200,
                borderRadius: 8
              }}
              item
              xs={3}
            >
              <Grid>
                <div
                  style={{
                    marginBottom: 20,
                    marginTop: 20
                  }}
                >
                  <div style={{ height: 50 }}>
                    <span style={{ fontSize: 15, color: "black" }}>
                      Tạm tính:{" "}
                    </span>
                    <span style={{ fontSize: 15, color: "black" }}>
                      {this.state.priceAllProductsString}đ
                    </span>
                  </div>
                  <Divider />
                  <div className="" style={{ height: 50, marginTop: 30 }}>
                    <span style={{ fontSize: 15, color: "black" }}>
                      Thành tiền:{" "}
                    </span>
                    <span style={{ fontSize: 18, color: "red" }}>
                      {this.state.priceAllProductsString}đ
                    </span>
                    <br />
                    <span style={{ fontSize: 13 }}>
                      (Đã bao gồm VAT nếu có)
                    </span>
                  </div>
                </div>
                <div style={{ backgroundColor: "white", marginTop: 90 }}>
                  <Button
                    className="button-order-style"
                    style={{
                      color: "white",
                      backgroundColor: "red",
                      fontWeight: "bold",
                      textTransform: "none",
                      fontSize: 17
                    }}
                  >
                    Thanh toán
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Cart;
