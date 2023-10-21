import React from 'react';

class YourCardItems extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        name: ""
      }
  }

  onClickHendler = e => {
    this.setState({
      name: this.props.name
    })
  }
  render() {
    return(
      <li>{this.state.name}</li>
    )
  }
}
export default YourCardItems