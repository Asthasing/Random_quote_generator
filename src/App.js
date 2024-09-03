import React from  'react';
//axios is a popular javascript library used to make HTTP requests from the browser or Node.js.
import axios from 'axios';
import './App.css';
//create a simple class based component.
class App extends React.Component {
    //What is state in React?
    //In react state refers to an built in objects that stores data that influences the rendering and behaviour of a component . state
    //allows a component to keep track of information that may change over time, such as a user input , the result of a calculation,
    //or the current status of a process.
    state = { advice : '' };
    //from where we make api call or get the request.

    //componentDidMount is a lifecycle method in react that is called automatically after a component is mounted (inserted into DOM)
    //for the first time.This method is commonly used in class components to perform tasks like initializing data, starting network 
    //requests , or setting up subscriptions.
    componentDidMount () {
        //console.log("COMPONENT DID MOUNT");
        this.fetchAdvice();

    }
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice} = response.data.slip;
            //console.log(advice);
            this.setState({advice});

        })
        .catch((error) => {
         console.log(error);
        });

    }
    render(){
        const { advice } = this.state;
        return (
            <div className='app'>
                <div className='card'>
                  <h1 className='heading'>{advice}</h1>
                  <button className='button' onClick={this.fetchAdvice}>
                  <span>GIVE ME ADVICE!</span>
                  </button>
                </div>

            </div>
        );
    }
}
export default App;
