import React, { Component } from "react";
const PORT = process.env.PORT || 3007;

class Port extends React.Component {
  render() {
    return { PORT };
  }
}

export default Port;
