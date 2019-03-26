import React, { Component } from "react";

class Enemy extends Component {
    render() {
        return (
            <button className="enemy-btn">
                <img src={this.props.image} alt={this.props.title} />
            </button>
        );
    }
}

export default Enemy;
