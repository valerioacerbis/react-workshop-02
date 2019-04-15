import React, { Component } from "react";
import { Card } from "../../components/card/Card";

class Catalog extends Component {
  render() {
    return (
      <div className="catalog">
        <h1>HOMEPAGE</h1>
        <Card />
        <p className="question">?</p>
      </div>
    );
  }
}

export default Catalog;
