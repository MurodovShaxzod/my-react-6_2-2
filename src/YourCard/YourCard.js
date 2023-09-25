import React from "react";

class YourCard extends React.Component {
  render() {
    return(
      <div className="container">
        <span className="bg-span"></span>
        <header>
          <img src="https://logos-download.com/wp-content/uploads/2016/03/Nike_logo_emblem_logotype.png" alt="img"/>
          <h1 className="header-title">Your card</h1>
          <p>Your card is empty.</p>
        </header>
      </div>
    )
  }
}

export default YourCard