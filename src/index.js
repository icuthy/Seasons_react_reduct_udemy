import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // if only showing state and no other methods in constructor, can remove it and use shorthand which babel compiles into contstructor with super(props) etc. Can test out in Babel.io
    // constructor(props) {
    //     super(props); 
    //     this.state = { lat: null, errorMessage: ''};
    // }

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }
    componentDidUpdate() {
        console.log('My component was just updated- it rerendered');

    }

    // react says we have to define render
    render() {

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>

    }
}

ReactDOM.render(<App />, document.getElementById('root'));