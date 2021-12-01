import { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Routes, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route
            exact
            path="/menu"
            element={<Menu dishes={this.state.dishes} />}
          ></Route>
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default Main;
