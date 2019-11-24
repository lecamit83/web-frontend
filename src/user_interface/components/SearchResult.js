import React, { Component } from "react";
import {
  Grid,
  Card,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

import "../containers/Men.css";
class SearchResult extends Component {
  state = {
    sortSelect: "popular",
    liked: false,
    addToCart: false
  };
  render() {
    return (
      <div style={{ minHeight: 550, marginLeft: 60, marginRight: 60 }}>
        <Card
          style={{
            padding: 20,
            marginTop: 30,
            fontSize: 20,
            fontWeight: "bold"
          }}
        >
          Kết quả tìm kiếm: "Text"
        </Card>
        <GridList
          cellHeight={300}
          spacing={20}
          cols={4}
          style={{ marginBottom: 10 }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 1, 1, 11].map(title => (
            <GridListTile>
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
                  <p style={{ fontSize: 17 }}>{title}</p>
                </Grid>
                <img
                  src={require("../images/detail-white-2.jpg")}
                  alt="shoe"
                  style={{ height: 250 }}
                />
                <GridListTileBar
                  title={"Name"}
                  subtitle={"Cost"}
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
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default SearchResult;
