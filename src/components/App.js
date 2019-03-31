import React, { Component } from "react";
import Timer from "./Timer";
import Enemy from "./Enemy";
import Player from "./Player";
import rockImg from "../assets/images/rock.png";
import paperImg from "../assets/images/paper.png";
import scissorsImg from "../assets/images/scissors.png";

class App extends Component {
    state = {
        count: 5,
        isDisabled: false,
        isRock: false,
        isPaper: false,
        isScissors: false,
        enemy: null,
        enemyImg: null,
        result: null
    };

    // Start the countdown when the App component is mounted
    componentDidMount() {
        this.countdownStart();
    }

    // Countdown
    countdownStart = () => {
        // Set the counter inside the state to 5
        this.setState({ count: 5 });
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            this.setState({ count: newCount >= 0 ? newCount : 0 });
            if (this.state.count === 0) {
                this.countdownStop();
            }
        }, 1000);
    };

    // Stops the countdown and resets the state

    countdownStop = () => {
        if (this.timer) {
            clearInterval(this.timer);
            // Call randomEnemy to set the result
            this.randomEnemy();
            this.setState({
                count: this.state.result
                    ? this.state.result
                    : "Pick something.",
                isDisabled: true
            });
        }
    };

    // Sets the state so we know what is chosen
    handleClick = e => {
        const player = e.target.title;
        if (player === "rock") {
            this.setState({ isRock: true });
        } else if (player === "paper") {
            this.setState({ isPaper: true });
        } else if (player === "scissors") {
            this.setState({ isScissors: true });
        }
        this.setState({ isDisabled: true });
    };

    // Set the random enemy name and image inside the state and call when the timer is over
    randomEnemy = () => {
        const rand = Math.floor(Math.random() * 3);
        if (rand === 0) {
            this.setState({ enemy: "rock", enemyImg: rockImg });
        } else if (rand === 1) {
            this.setState({ enemy: "paper", enemyImg: paperImg });
        } else if (rand === 2) {
            this.setState({ enemy: "scissors", enemyImg: scissorsImg });
        }

        // Result
        const enemy = this.state.enemy;
        if (
            (this.state.isRock && enemy === "rock") ||
            (this.state.isPaper && enemy === "paper") ||
            (this.state.isScissors && enemy === "scissors")
        ) {
            this.setState({ result: "Draw!" });
        } else if (
            (this.state.isRock && enemy === "scissors") ||
            (this.state.isPaper && enemy === "rock") ||
            (this.state.isScissors && enemy === "paper")
        ) {
            this.setState({ result: "You win!" });
        } else if (
            (this.state.isRock && enemy === "paper") ||
            (this.state.isPaper && enemy === "scissors") ||
            (this.state.isScissors && enemy === "rock")
        ) {
            this.setState({ result: "You lose!" });
        }
    };

    // Reset the state and start counter again
    playAgain = () => {
        this.setState({
            count: 5,
            isDisabled: false,
            isRock: false,
            isPaper: false,
            isScissors: false,
            enemy: null,
            enemyImg: null,
            result: null
        });
        this.countdownStart();
    };

    render() {
        return (
            <div className="App">
                <Timer count={this.state.count} />
                {this.state.enemy && this.state.result ? (
                    <div className="enemy-container">
                        <Enemy
                            title={this.state.enemy}
                            image={this.state.enemyImg}
                        />
                    </div>
                ) : null}

                {this.state.enemy ? (
                    <button
                        className="play-btn"
                        onClick={() => this.playAgain()}
                    >
                        Play again
                    </button>
                ) : null}

                <div className="player-container">
                    <Player
                        choice="rock"
                        image={rockImg}
                        handleClick={this.handleClick}
                        isShadowed={this.state.isRock}
                        isDisabled={this.state.isDisabled}
                    />
                    <Player
                        choice="paper"
                        image={paperImg}
                        handleClick={this.handleClick}
                        isShadowed={this.state.isPaper}
                        isDisabled={this.state.isDisabled}
                    />
                    <Player
                        choice="scissors"
                        image={scissorsImg}
                        handleClick={this.handleClick}
                        isShadowed={this.state.isScissors}
                        isDisabled={this.state.isDisabled}
                    />
                </div>
            </div>
        );
    }
}

export default App;
