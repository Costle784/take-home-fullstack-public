import React, { Component } from "react";
import "./_loading.scss";

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text,
            speed: props.speed,
        };
    }

    componentDidMount() {
        const stopper = `${this.props.text}...`;
        this.interval = window.setInterval(
            function () {
                this.state.text === stopper
                    ? this.setState({
                          text: this.props.text,
                      })
                    : this.setState((prevState) => ({
                          text: `${prevState.text}.`,
                      }));
            }.bind(this),
            this.props.speed
        );
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render() {
        return <p className="loading">{this.state.text}</p>;
    }
}

Loading.defaultProps = {
    text: "Loading",
    speed: 200,
};
