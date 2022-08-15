import * as React from "react";
import { Component } from "react";

import { Main } from "./main";
import { Footer } from "./footer";
import { BrowserRouter } from "react-router-dom";

import MenuAppBar from "./appbar";

export class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <section className="container">
          <MenuAppBar />
          <Main />
          <footer>
            <Footer />
          </footer>
        </section>
      </BrowserRouter>
    );
  }
}
