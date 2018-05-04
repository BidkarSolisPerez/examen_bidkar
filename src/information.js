import React from 'react'
import Axios from 'axios'


export default class Information extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            persons : []
        }
    }

    componentDidMount(){
        Axios.get("https://api.mlab.com/api/1/databases/una-test-lab/collections/pages?apiKey=12KfjNX97_amx0iUdS2I_eitAy3jSaOb")
        .then(res => {
            console.log(res.data[0]);
            this.setState({
                persons: res.data[0]
            });
        });
    }

    render(){
        return <div>{this.state.persons.data}</div>;
        /*
        <ul>{this.state.persons.map(person => <li>{person.name}</li>)}</ul>;*/
    }
}