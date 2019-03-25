import React, { Component } from "react";
import Timer from "./Timer";
import Enemy from "./Enemy";
import Player from "./Player";

class App extends Component {
    state = {
        count: 5
    };

    componentDidMount() {
        this.countdownStart();
    }

    countdownStart() {
        // Set the counter inside the state to 5
        this.setState({ count: 5 });
        // Start the countdown
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            this.setState({ count: newCount >= 0 ? newCount : 0 });
            if (this.state.count === 0) {
                this.countdownStop();
            }
        }, 1000);
    }

    countdownStop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.setState({ running: false });
        }
    }

    render() {
        return (
            <div className="App">
                <Timer count={this.state.count} />
                <button onClick={() => this.countdownStart()}>Click</button>
                <Enemy />
                <Player />
            </div>
        );
    }
}

export default App;
