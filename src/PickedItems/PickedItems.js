import React from "react";
// import JsonFayl from "./JsonFayl.json";
class PickedItems extends React.Component {

  state = {
    user: []
  }

  componentDidMount() {
    fetch("jsonFayl.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      this.setState({user: data})
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  }

  render() {
    return(
      <div className="container">
        <span className="bg-span"></span>
        <header>
          <img src="https://logos-download.com/wp-content/uploads/2016/03/Nike_logo_emblem_logotype.png" alt="img"/>
          <h1 className="header-title">Picked items</h1>
        </header>

      </div>
    )
  }
}

export default PickedItems

