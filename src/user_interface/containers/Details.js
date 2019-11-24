import React, { Component } from "react";
import {
  Divider,
  Grid,
  CardMedia,
  Button,
  Select,
  MenuItem
} from "@material-ui/core";
import Comment from "../components/Comment";
import "./Details.css";

class DetailsProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSelect: "detail-black.jpg",
      color: "black",
      size: 40,
      categori: "A"
    };
  }
  render() {
    return (
      <div>
        <Grid
          style={{ justifyContent: "space-between" }}
          container
          direction="row"
        >
          <div className="image-product-display">
            <span className="product-name">Birkenstock Milano</span>
            <CardMedia
              className="image-product"
              image={require("../images/" + this.state.imageSelect)}
            />
            <Grid container direction="row">
              <Button
                onClick={() => {
                  this.setState({ imageSelect: "detail-black.jpg" });
                }}
              >
                <CardMedia
                  className="image-button"
                  image={require("../images/detail-black.jpg")}
                />
              </Button>
              <Button
                onClick={() => {
                  this.setState({ imageSelect: "detail-white.jpg" });
                }}
              >
                <CardMedia
                  className="image-button"
                  image={require("../images/detail-white.jpg")}
                />
              </Button>
              <Button
                onClick={() => {
                  this.setState({ imageSelect: "detail-white-2.jpg" });
                }}
              >
                <CardMedia
                  className="image-button"
                  image={require("../images/detail-white-2.jpg")}
                />
              </Button>
            </Grid>
          </div>
          <div className="form-action">
            <div className="price-container">
              <span className="price">Giá: $49.99</span>
            </div>

            <div className="select-container">
              <div className="select-margin">
                <span className="span-text">Loại:</span>
                <br />
                <Select
                  className="select"
                  style={{ width: 200 }}
                  value={this.state.categori}
                  onChange={this.handleChangeCategories.bind(this)}
                >
                  <MenuItem value={"A"}>A</MenuItem>
                  <MenuItem value={"B"}>B</MenuItem>
                  <MenuItem value={"C"}>C</MenuItem>
                </Select>
              </div>
              <div className="select-margin">
                <span className="span-text">Màu sắc:</span>
                <br />
                <Select
                  className="select"
                  style={{ width: 200 }}
                  value={this.state.color}
                  onChange={this.handleChangeColor.bind(this)}
                >
                  <MenuItem value={"black"}>Đen</MenuItem>
                  <MenuItem value={"white"}>Trắng</MenuItem>
                  <MenuItem value={"yellow"}>Vàng</MenuItem>
                </Select>
                <br />
              </div>
              <div className="select-margin">
                <span className="span-text">Kích cỡ:</span>
                <br />
                <Select
                  className="select"
                  style={{ width: 200 }}
                  value={this.state.size}
                  onChange={this.handleChangeSize.bind(this)}
                >
                  <MenuItem value={40}>40</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                  <MenuItem value={60}>60</MenuItem>
                </Select>
              </div>
              <br />
              <Button
                style={{
                  color: "white",
                  backgroundColor: "#ae4343",
                  margin: 50,
                  height: 50,
                  width: 200,
                  marginTop: 20,
                  fontWeight: "bold",
                  textTransform: "none"
                }}
                className="button-add"
              >
                Thêm vào giỏ hàng
              </Button>
            </div>
          </div>
        </Grid>
        <Divider style={{ height: 1, color: "black" }} />
        <h2 className="title-information">Thông tin sản phẩm:</h2>
        <div className="information-product">
          <h2 className="product-name">Birkenstock</h2>
          <p style={{ padding: 2 }}>Thêm thông tin sản phẩm</p>
        </div>
        <Divider />
        <div className="">
          <h2 className="title-information">Hỏi đáp :</h2>
          <Grid cols={1}>
            {[1, 2, 3, 4].map(() => (
              <Comment
                onClick={commentText => {
                  // if (this.state.textReplyValue === "") {
                  //   console.log(this.state.textReplyValue);
                  // }
                  console.log(commentText);
                }}
                onSubmit={commentText => {
                  console.log(commentText);
                }}
              />
            ))}
          </Grid>
        </div>
      </div>
    );
  }
  handleChangeCategories(event) {
    this.setState({ categori: event.target.value });
  }
  handleChangeColor(event) {
    this.setState({ color: event.target.value });
  }
  handleChangeSize(event) {
    this.setState({ size: event.target.value });
  }
}

export default DetailsProduct;

/* <Grid cols={1} cellHeight={50}>
  <div className="comment-container">
    <span className="text-comment">Tiền ship là bao nhiêu vậy?</span>
    <span className="text-comment">
      -> Chào bạn, sản phẩm này được miễn phí vận chuyển toàn quốc ạ. Nếu có nhu
      cầu sản phẩm bạn có thể tham khảo hướng dẫn đặt hàng tại
      https://hotro.tiki.vn/hc/vi/articles/203807174 hoặc liên hệ tổng đài đặt
      hàng 18006963 (miễn phí, 8-21h kể cả T7, CN) giúp Tiki nhé.
    </span>
  </div>
  <div className="comment-container">
    <span className="text-comment">Tiền ship là bao nhiêu vậy?</span>
    <span className="text-comment">
      -> Chào bạn, sản phẩm này được miễn phí vận chuyển toàn quốc ạ. Nếu có nhu
      cầu sản phẩm bạn có thể tham khảo hướng dẫn đặt hàng tại
      https://hotro.tiki.vn/hc/vi/articles/203807174 hoặc liên hệ tổng đài đặt
      hàng 18006963 (miễn phí, 8-21h kể cả T7, CN) giúp Tiki nhé.
    </span>
  </div>
</Grid>; */
