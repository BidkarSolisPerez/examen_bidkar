import React from 'react'
import Axios from 'axios'


class Information extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }

    componenDidMount(){
        Axios.get("https://api.mlab.com/api/1/databases/una-test-lab/collections/pages?apiKey=12KfjNX97_amx0iUdS2I_eitAy3jSaOb")
        .then(res => {
            console.log(res);
            this.setState({
                data : res
            });
        })
    }

    render(){
        return(
            <div>
                <h1>Datos</h1>
                <ul>
                    <li>{this.state.data}</li>
                </ul>
            </div>
        )
    }
}

export default Information