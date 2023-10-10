import React from "react";

const YourCard = (props) => {
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
           <span>{props.price}</span>
          }
          </main>
      </div>
    )
}


export default YourCard

