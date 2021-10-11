import React , { Component } from "react";

export class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // }, () => console.log(this.state.count))
        // console.log(this.state.count);
        this.setState(prevState => ({
            count: prevState.count + 1
        }), () => {console.log(this.state.count)});
    }

    // incFive(){
    //     this.increment();
    //     this.increment();
    //     this.increment();
    //     this.increment();
    //     this.increment();
    // }


    render(){
        return (
            <div>
                <h1>Count</h1>
                <p>{this.state.count}</p>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}