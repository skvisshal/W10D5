import React from 'react';

export default class Clock extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.intervalId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    tick() {
        this.setState(
            {
                time: new Date()
            }
        );
    }

    render() {

        let time = this.state.time.toLocaleTimeString();
        let date = this.state.time.toLocaleDateString();

        return (
            <div className="clock-header">
                <h1>
                    Clock
                </h1>
                <div className="clock">
                    <div>
                        <p>Time: </p>
                        <p>{time} EST</p>
                    </div>
                    <div>
                        <p>Date: </p>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
            
        )
    }
}

