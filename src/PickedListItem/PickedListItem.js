import React from 'react';

class PickedListItems extends React.Component{
  render() {

    const {picture, name, information, price} = this.props
    return(
      <li>
          {
            <div className="card-picked">
              <div className="card-picked-img">
                <img src={picture} alt="img" />
              </div>
              <div className="card-picked-title">
                <h2>{name}</h2>
                <p>{information}</p>
              </div>
              <div className="card-picked-price">
                <span>${price}</span>
                <button id="add-to-card">ADD TO CARD</button>
              </div>
            </div>
          }
      </li>
    )
  }
}

export default PickedListItems