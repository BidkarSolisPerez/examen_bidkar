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
            console.log(res.data);
            this.setState({
                persons: res.data
            });
        });
    }

    /*
    componentDidMount(){
        Axios.get("https://api.mlab.com/api/1/databases/una-test-lab/collections/pages?apiKey=12KfjNX97_amx0iUdS2I_eitAy3jSaOb")
        .then(res => {
            console.log(res.data[0]);
            this.setState({
                persons: res.data[0]
            });
        });
    }*/

    returnObject(pos){
        return this.state.persons[pos];
    }


    render(){
        return <div>
                    {console.log(typeof(this.state.persons))}

                    {/*
                    <ul>
                        {this.state.persons.map(person => <li>{person.keywords}</li>)}
                    </ul>*/}
                </div>;
        /*
        <ul>{this.state.persons.map(person => <li>{person.name}</li>)}</ul>;
            this.state.persons['name']
        */
    }
}