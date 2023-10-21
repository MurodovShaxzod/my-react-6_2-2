import React from "react";
import PickedListItems from "../PickedListItem/PickedListItem";

class PickedItems extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  // state = {
  //   data: <YourCard />
  // }

  // stateFunc() {
  //   this.setState(state => ({
  //     data: <YourCard price="hello" />
  //   }))
  // }


  render() {
    let {data} = this.props
    return(
      <div className="container">
        <span className="bg-span"></span>
        <header>
          <img src="https://logos-download.com/wp-content/uploads/2016/03/Nike_logo_emblem_logotype.png" alt="img"/>
          <h1 className="header-title">Picked items</h1>
        </header>
        <main>
          <ul>{data.map(item => (
            <PickedListItems 
            key={item.id} 
            picture={item.picture} 
            name={item.name} 
            information={item.information} 
            price={item.price} />
          ))}</ul>
        </main>
      </div>
    )
  }
}

export default PickedItems

