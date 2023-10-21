import './App.css';
import PickedItems from './PickedItems/PickedItems';
import YourCard from './YourCard/YourCard';
import jsonFayl from './jsonFayl.json'

function App() {
  let data = jsonFayl.shoes
  return (
    <div className="App">
      <PickedItems data={data} />
      <YourCard data={data} />
    </div>
  );
}

export default App;
