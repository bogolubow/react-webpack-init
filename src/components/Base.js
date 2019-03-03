import React from 'react';

// sprawdzam czy ładowanie grafiki z js działa prawidłowo
import logo from './../images/logo.png';

class Base extends React.Component {

    state = { counter: 0 }

    handleClick = (e) => {
        this.setState({
            counter: this.state.counter + this.props.step,
        })
    }

    render() {
        return (
            <div>
                <a href="https://bogolubow.com">
                    <img src={ logo } alt="logo bogolubow.com" />
                </a>

                <h1>App in React</h1>
                <button onClick={ this.handleClick }>
                    click me, step: {this.props.step} ({ this.state.counter })
                </button>
            </div>
        )
    }
}

export default Base;