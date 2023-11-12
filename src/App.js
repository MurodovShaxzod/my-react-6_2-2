import "./App.css";
import PickedItems from "./PickedItems/PickedItems";
import jsonFayl from "./jsonFayl.json";
import { useState } from "react";

function App() {
  let data = jsonFayl.shoes;
  const [info, setInfo] = useState(data);
  const [newInfo, setNewInfo] = useState([]);
  // const [btn, setBtn] = useState("ADD TO CARD");

  const plusCount = (itemId) => {
    const increaseData = newInfo.map((data) => {
      if (data.id === itemId) {
        return {
          ...data,
          quantity: data.quantity + 1,
        };
      }
      return data;
    });
    setNewInfo(increaseData);
  };
  const minusCount = (itemId) => {
    const decreaseData = newInfo.map((data) => {
      if (data.id === itemId) {
        return {
          ...data,
          quantity: data.quantity - 1,
        };
      }
      return data;
    });

    const upData = decreaseData.map((item) => {
      if (item.quantity > 0) {
        return {
          ...item,
          purchased: false,
          btn: "ADD TO CARD",
        };
      }
      return item;
    });
    
    

    const updatedData = upData.filter((item) => item.quantity > 0);

    setNewInfo(updatedData);
  };

  const clickedItem = (itemId) => {
    const updatedInfo = info.map((item) => {
      if (item.id === itemId) {
        setNewInfo([
          ...newInfo,
          {
            ...item,
            purchased: true,
            btn: <i className='bx bx-check' ></i>
          },
        ]);
        return {
          ...item,
          purchased: true,
          btn: <i className='bx bx-check' ></i>
        };
      }
      return item;
    });
    setInfo(updatedInfo);
  };
  return (
    <div className="App">
      <PickedItems data={info} clickedItem={clickedItem} />

      <div className="container">
        <span className="bg-span"></span>
        <header>
          <img
            src="https://logos-download.com/wp-content/uploads/2016/03/Nike_logo_emblem_logotype.png"
            alt="img"
          />
          <h1 className="header-title">Your card</h1>
          <p>Your card is empty.</p>
        </header>
        <main>
          <ul>
            {newInfo.map((item) => (
              <li key={item.id} className="your-card-item">
                <div className="your-card-img">
                  <img src={item.picture} alt="img" />
                </div>
                <div className="your-card-title">
                  <h2 className="your-card-text">{item.name}</h2>
                  <span>${item.price}</span>
                  <div className="your-card-cound">
                    <button onClick={() => minusCount(item.id)}>
                      <i className="bx bx-chevron-left"></i>
                    </button>
                    <p className="count">{item.quantity}</p>
                    <button onClick={() => plusCount(item.id)}>
                      <i className="bx bx-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}

export default App;
