import "./App.css";
import PickedItems from "./PickedItems/PickedItems";
import jsonFayl from "./jsonFayl.json";
import { useState } from "react";

function App() {
  let data = jsonFayl.shoes;
  const [info, setInfo] = useState(data);
  const [newInfo, setNewInfo] = useState([]);
  const [count, setCount] = useState(1);
  const [btn, setBtn] = useState("ADD TO CARD");
  const minusCount = () => {
    setCount(count - 1);
    if(count === 1) {
      setBtn("ADD TO CARD")
    }
  }

  const clickedItem = (itemId) => {
    const updatedInfo = info.map((item) => {
      if(item.id === itemId) {
    setBtn(<i className='bx bx-check'></i>)
        setNewInfo([
          ...newInfo,
          {
            ...item,
            purchased: true,
          }
        ]);
        return {
          ...item,
          purchased: true,
        };
      }
      return item
    })
    setInfo(updatedInfo)
  }
  return (
    <div className="App">
      <PickedItems data={info} clickedItem={clickedItem} btn={btn}/>

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
            {
              newInfo.map(item => (
                <li key={item.id} className="your-card-item">
                  <div className="your-card-img">
                    <img src={item.picture} alt="img"/>
                  </div>
                  <div className="your-card-title">
                    <h2 className="your-card-text">{item.name}</h2>
                    <span>${item.price}</span>
                    <div className="your-card-cound">
                      <button onClick={minusCount}><i className='bx bx-chevron-left'></i></button>
                      <p className="count">{count}</p>
                      <button onClick={() => setCount(count + 1)}><i className='bx bx-chevron-right'></i></button>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </main>
      </div>
    </div>
  );
}

export default App;
