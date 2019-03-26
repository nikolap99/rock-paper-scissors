import React, { Component } from "react";

class Player extends Component {
    render() {
        return (
            <button
                disabled={this.props.isDisabled}
                className={
                    !this.props.isDisabled
                        ? "player-btn"
                        : "player-btn disabled"
                }
                onClick={this.props.handleClick}
            >
                <img
                    src={this.props.image}
                    className={this.props.isShadowed ? "shadowed" : null}
                    alt={this.props.choice}
                    title={this.props.choice}
                />
            </button>
        );
    }
}

export default Player;
