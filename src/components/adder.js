import React, { Component } from 'react'

class Adder extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  increment(){
    this.setState(prevState=>({
      count:prevState.count+1
    }))
    }
    decrement(){
      this.setState({
        count:this.state.count-1
      })
    }
  
  render() {
    return (
      <div>
        <div>count :{this.state.count}</div> 
        <button onClick={()=>this.increment()}>Increment</button>
        <button onClick={()=>this.decrement()}>Decrement</button>
      </div>
    )
  }
}

export default Adder
