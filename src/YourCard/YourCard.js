
// import { click } from "@testing-library/user-event/dist/click";
import React from "react";
// import PickedItems from "../PickedItems/PickedItems";

let AddToCard = Array.from(document.querySelectorAll("#add-to-card"));

// let AddToCardFunc = AddToCard.addEventListener("click", () => {
//   console.log("salom");
// })
class YourCard extends React.Component {

  // state = {
  //   user: AddToCard 
  // }

  // componentDidMount() {
  //   this.setState({
  //     user: AddToCard
  //   })
  // }

  render() {
    // let user = this.state.user
    return(
      <div className="container">
        <span className="bg-span"></span>
        <header>
          <img src="https://logos-download.com/wp-content/uploads/2016/03/Nike_logo_emblem_logotype.png" alt="img"/>
          <h1 className="header-title">Your card</h1>
          <p>Your card is empty.</p>
        </header>
        <main>
          {
            AddToCard.forEach(item => {
            item.addEventListener("click", () => {
              <div>
              <h1>{item}</h1>
              </div>
              console.log("salom");
              console.log(item)
            })
          })
          }
          </main>
      </div>
    )
  }
}

export default YourCard

