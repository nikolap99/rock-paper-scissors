import React, { Component } from "react";

class Timer extends Component {
    render() {
        return (
            <div className="timer">
                <h1>{this.props.count}</h1>
            </div>
        );
    }
}

export default Timer;
