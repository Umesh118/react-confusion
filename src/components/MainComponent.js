import { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import DishDetail from "./DishDetailComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Routes, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/home"
            element={
              <Home
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={
                  this.state.promotions.filter(
                    (promotion) => promotion.featured
                  )[0]
                }
                leader={
                  this.state.leaders.filter((leader) => leader.featured)[0]
                }
              />
            }
          ></Route>
          <Route
            exact
            path="/menu"
            element={<Menu dishes={this.state.dishes} />}
          ></Route>
          <Route exact path="/contactus" element={<Contact />}></Route>
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default Main;
