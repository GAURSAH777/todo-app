import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset=this.reset.bind(this);
    }
    increment() {
        console.log("increment");
        this.setState({
            counter: this.state.counter + 1
        });
    }
    decrement() {
        console.log("decrement");
        this.setState({
            counter: this.state.counter - 1
        });
    }
    reset() {
        console.log("reset");
        this.setState({
            counter: 0
        })
    }
    render() {
        return (
            <div className='counter'>
                COUNTER :
                <button className='button' onClick={this.increment}>+1</button>
                <button  className='button'onClick={this.decrement}>-1</button>
                <span className='count'>{this.state.counter}</span>
                <button className='reset' onClick={this.reset}>Reset</button>
            </div>
        )
    }

}
export default Counter;
