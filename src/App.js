import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Components/MenuComponent";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar dark color="success">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
