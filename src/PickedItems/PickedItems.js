import React from "react";
import JsonFayl from "./jsonFayl.json";
class PickedItems extends React.Component {

  state = {
    data: JsonFayl.shoes
  }

  componentDidMount() {
    this.setState({
      data: JsonFayl.shoes
    })
  }

  render() {
    let data = this.state.data;
    return(
      <div className="container">
        <span className="bg-span"></span>
        <header>
          <img src="https://logos-download.com/wp-content/uploads/2016/03/Nike_logo_emblem_logotype.png" alt="img"/>
          <h1 className="header-title">Picked items</h1>
        </header>
        <main>
          {
           data.map((item, index) => (
            <div key={index} className="card-picked">
              <div className="card-picked-img">
                <img src={item.picture} alt="img" />
              </div>
              <div className="card-picked-title">
                <h2>{item.name}</h2>
                <p>{item.information}</p>
              </div>
              <div className="card-picked-price">
                <span>${item.price}</span>
                <button id="add-to-card">ADD TO CARD</button>
              </div>
            </div> 
           ))
          }
        </main>
      </div>
    )
  }
}

export default PickedItems

