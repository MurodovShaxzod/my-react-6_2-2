import React from "react";

function PickedItems(props) {
  let { data, clickedItem, btn } = props;
  return (
    <div className="container">
      <span className="bg-span"></span>
      <header>
        <img
          src="https://logos-download.com/wp-content/uploads/2016/03/Nike_logo_emblem_logotype.png"
          alt="img"
        />
        <h1 className="header-title">Picked items</h1>
      </header>
      <main>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <div className="card-picked">
                <div className="card-picked-img">
                  <img src={item.picture} alt="img" />
                </div>
                <div className="card-picked-title">
                  <h2>{item.name}</h2>
                  <p>{item.information}</p>
                </div>
                <div className="card-picked-price">
                  <span>${item.price}</span>
                  <button
                    id="add-to-card"
                    onClick={() => clickedItem(item.id)}
                    disabled={item.purchased ? true : false}
                  >
                    {btn}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default PickedItems;
