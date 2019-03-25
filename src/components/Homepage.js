import React, { Component } from "react";
//import "./App.css";

class Homepage extends Component {
    goToGame = e => {
        e.preventDefault();
        this.props.history.push(`/game`);
    };
    render() {
        return (
            <form className="homepage" onSubmit={this.goToGame}>
                <div className="homepage-content">
                    <h1 className="rock-paper-scissors">
                        Rock - Paper - Scissors
                    </h1>
                    <button type="submit " className="play-button">
                        Play
                    </button>
                </div>
            </form>
        );
    }
}

export default Homepage;
