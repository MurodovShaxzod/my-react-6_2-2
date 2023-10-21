import React from "react";
import YourCardItems from "../YourCardItems/YourCardItems";

class YourCard extends React.Component {
render() {
  let data = this.props.data
  return(
    <div className="container">
      <span className="bg-span"></span>
      <header>
        <img src="https://logos-download.com/wp-content/uploads/2016/03/Nike_logo_emblem_logotype.png" alt="img"/>
        <h1 className="header-title">Your card</h1>
        <p>Your card is empty.</p>
      </header>
      <main>
        <ul> 
          {data.map(item => (
            <YourCardItems 
            key={item.id} 
            picture={item.picture} 
            name={item.name} 
            information={item.information} 
            price={item.price} />
          ))}
        </ul>
        </main>
    </div>
  )
}
}


export default YourCard

