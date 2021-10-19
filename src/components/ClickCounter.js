import React, { Component } from 'react'

export class ClickCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count:0
        }
    }
    handleClick = () => {
        this.setState( prevState => {
            return {count: prevState.count + 1};
        })
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <button onClick={this.handleClick}>Clicked {count} times</button>
            </div>
        )
    }
}

export class HoverCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count:0
        }
    }
    handleHover = () => {
        this.setState( prevState => {
            return {count: prevState.count + 1};
        })
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <h2 onMouseOver={this.handleHover}>Hovered {count} times</h2>
            </div>
        )
    }
}

// export default ClickCounter
