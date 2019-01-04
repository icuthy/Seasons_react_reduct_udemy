import React from 'react';
import ReactDOM from 'react-dom';
// functional component used for simple routines
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//     return (
//         <div>Latitude: </div>

//     )
// }

// Refactor to class when more complex or need to use STATE (like we need to do in this case so that we can rerender the jsx after the result of the geolocation api comes in) Our App class is extending or borrowing like a subclass all the methods from React.Component class.

class App extends React.Component {
    // es6 method constructor always called first in component
    constructor(props) {
        super(props); // reference to React.Components parent's constructor function

        // this is the ONLY time we do direct assignment to this.state, initializing state object
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // call setState to update state!!!
                this.setState({ lat: position.coords.latitude });

                // do not do  this.setState.lat = { position.coords.latitude }
            },
            (err) => {
                this.setState({ errorMessage: err.message });
                console.log(err);
            }
        );
    }

    componentDidMount() {
        console.log('My component was rendered to the screen');
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