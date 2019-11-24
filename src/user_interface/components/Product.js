import React, { Component } from "react";
import { Grid, Card, GridListTileBar, IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

import "../containers/Men.css";
class Product extends Component {
  state = {
    liked: false,
    addToCart: false
  };
  render() {
    return (
      <Card style={{ marginTop: 20 }} className="border-product">
        <Grid container>
          <IconButton
            onClick={() => this.setState({ liked: !this.state.liked })}
            style={{ color: "gray" }}
          >
            <FontAwesomeIcon
              color={this.state.liked ? "gray" : "blue"}
              icon={faHeart}
            />
          </IconButton>
          <p style={{ fontSize: 17 }}>{1}</p>
        </Grid>
        <img src={this.props.image} alt="shoe" style={{ height: 250 }} />
        <GridListTileBar
          title={this.props.title}
          subtitle={this.props.price}
          actionIcon={
            <IconButton
              className="icon-size"
              onClick={() =>
                this.setState({ addToCart: !this.state.addToCart })
              }
              style={{ color: "white" }}
            >
              <FontAwesomeIcon
                icon={this.state.addToCart ? faCheck : faCartPlus}
              />
            </IconButton>
          }
        />
      </Card>
    );
  }
}

export default Product;
