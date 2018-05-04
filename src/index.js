import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import './axio';
import Information from './information';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            values : []
        }
    }



    render(){
        return(
            <div>
                <h1>Welcome react world!!</h1>
                <Information />
            </div>
        );
    }



}


ReactDOM.render(<App />,document.getElementById('root'))
