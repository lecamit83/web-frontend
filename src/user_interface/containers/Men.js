import React, { Component } from "react";
import {
  Grid,
  Card,
  GridList,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  GridListTile
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import Product from "../components/Product";

import "./Men.css";
import axios from "axios";
import { config } from "../../config";
import utils from "../../utils";

class Men extends Component {
  state = {
    sortSelect: "popular",
    liked: false,
    addToCart: false,
    shoes: []
  };
  render() {
    return (
      <div className="men-container">
        <Grid container className="center">
          <Grid item xs={2}>
            <p style={{ fontWeight: "bold", fontSize: 25 }}>Giày nam</p>
            <Card style={{ padding: 26 }}>Bộ lọc kết quả</Card>
            <Card style={{ marginTop: 30 }}>
              <Card style={{ padding: 10 }}>Theo giá</Card>
              <Grid container className="center-select">
                {[
                  "Nhỏ hơn 100.000 VNĐ",
                  "Nhỏ hơn 300.000 VNĐ",
                  "Nhỏ hơn 400.000 VNĐ",
                  "Nhỏ hơn 500.000 VNĐ",
                  "Lớn hơn 500.000 VNĐ"
                ].map(title => (
                  <Grid>
                    <FormControlLabel
                      control={<Checkbox value="popular" />}
                      label={title}
                    />
                  </Grid>
                ))}
              </Grid>
            </Card>
            <Card style={{ marginTop: 30 }}>
              <Card style={{ padding: 10 }}>Theo màu sắc</Card>
              <Grid container>
                {["Màu trắng", "Màu xanh", "Màu đỏ", "Màu vàng"].map(title => (
                  <Grid container className="center-select">
                    <FormControlLabel
                      control={<Checkbox value="popular" />}
                      label={title}
                    />
                  </Grid>
                ))}
              </Grid>
            </Card>
            <Card style={{ marginTop: 30 }}>
              <Card style={{ padding: 10 }}>Theo kích cỡ</Card>
              <Grid container className="center-select">
                {["20", "30", "40"].map(title => (
                  <Grid>
                    <FormControlLabel
                      control={<Checkbox value="popular" />}
                      label={title}
                    />
                    <br />
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={9} style={{ marginLeft: 10 }}>
            <Card style={{ padding: 20 }}>
              <Grid container style={{ width: 300, fontSize: 18 }}>
                Lựa chọn của bạn:
                <Grid container direction="row">
                  {["Màu đỏ", "Nhỏ hơn 100.000"].map(item => (
                    <Button
                      style={{
                        marginTop: 10,
                        borderColor: "black",
                        border: "solid",
                        borderWidth: 1,
                        borderRadius: 20,
                        fontSize: 13,
                        textTransform: "none",
                        marginRight: 10
                      }}
                    >
                      {item}
                      <FontAwesomeIcon
                        style={{ marginLeft: 5, fontSize: 16 }}
                        icon={faMinusCircle}
                      />
                    </Button>
                  ))}
                </Grid>
              </Grid>
              <Grid container className="header-sort">
                <Grid item>
                  Sắp xếp theo:{" "}
                  <Select
                    value={this.state.sortSelect}
                    style={{ marginLeft: 10, width: 160, fontSize: 15 }}
                    onChange={this.handleOnChangeSelectSort.bind(this)}
                  >
                    <MenuItem value="newest">Mới nhất</MenuItem>
                    <MenuItem value="popular">Phổ biến</MenuItem>
                    <MenuItem value="high-to-low">Giá từ cao đến thấp</MenuItem>
                    <MenuItem value="low-to-high">Giá từ thấp đến cao</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Card>
            <GridList cellHeight={300} spacing={20} cols={3}>
              {this.state.shoes && this.state.shoes.map(shoe => {
                console.log(`${config.url}/${shoe.images}`)
                return (
                  <GridListTile>
                    <Product
                      title={shoe.name}
                      price={utils.toVND(shoe.price)}
                      image={(shoe.images) ? `${config.url}/${shoe.images[0]}` : require("../images/detail-white-2.jpg")}
                    />
                  </GridListTile>
                )
              })}
            </GridList>
            <div style={{ padding: 10, marginTop: 10 }}>
              <Button
                style={{ textTransform: "none", fontSize: 16, color: "blue" }}
                onClick={this.handleShowMore.bind(this)}
              >
                Xem thêm ...
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

  async componentDidMount() {
    const { data } = await axios.get(`/shoes?kind=men`);
    this.setState({ shoes: data })
  }
  handleShowMore() { }
  handleOnChangeSelectSort(event) {
    this.setState({ sortSelect: event.target.value });
  }
}

export default Men;
