import React from "react";



class DogCard extends React.Component {
  state = {
    click: false
  }
  clickHandler = () => {
    this.setState({click: !this.state.click})
  }
  render() {
    console.log(this.state)
    return (
      <div>
      <h2>{this.props.dog.name}</h2>
      {this.state.click ? <h2>Woof</h2>:null}
        <img alt="" src={this.props.dog.img} />
        <button onClick={this.clickHandler}>Bark</button>
      </div>
    );
  }
}

export default DogCard;
