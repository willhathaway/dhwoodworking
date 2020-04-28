import React, { Component } from 'react';
import "./style.css";
import Text from "../../components/Text";
import Hero from '../../components/Hero';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        };

        this.quotes = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Vitae semper quis lectus nulla. Metus dictum at tempor commodo.",
            "Bibendum at varius vel pharetra vel turpis nunc. Nisi porta lorem mollis aliquam ut porttitor. Tincidunt id aliquet risus feugiat in ante metus dictum at."];

        this.counter = this.counter.bind(this);

    }

    componentDidMount() {
        this.counter();
    }

    counter() {
        setInterval(() => {
            if (this.state.count < this.quotes.length - 1) {
                let count = this.state.count + 1;
                this.setState({ count: count })
            } else if (this.state.count === this.quotes.length -1) {
                this.setState({ count: 0 })
            }
        }, 6000)
    };


    render() {
        return (
            <Hero>
                <div className="quotesDiv">
                    <Text quote={this.quotes[this.state.count]} />
                </div>

            </Hero>
        )
    }

}

export default Home;