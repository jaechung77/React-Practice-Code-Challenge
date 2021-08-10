import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3001/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushis: [],
      sum: 0,
      price: 0,
      orderIds: [],
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushis =>{
      this.setState({
        sushis,
        startIndex: 0,
        sum:0,
        price: 0,    
        orderIds: [],
      })
    })
  }  

  handleMoreClick = () => {
    this.setState((prevState) =>{
      return {
        startIndex: prevState.startIndex + 4
      }
    })
  }

  handleSushiClick = (id, price) => {
    const total = this.state.sum + parseInt(price, 10)
 
    if (total <= 100) {    
      this.setState({
      sum: total,
      })
      this.state.orderIds.push(id)
    }
  }


  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} 
          handleMoreClick={this.handleMoreClick}
          handleSushiClick={this.handleSushiClick}
          startIndex={this.state.startIndex}
          orderIds={this.state.orderIds}
          />
        <Table sum={this.state.sum}/>
      </div>
    );
  }
}

export default App;