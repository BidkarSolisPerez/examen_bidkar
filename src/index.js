import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import Information from './information';
import { Route, HashRouter } from "react-router-dom";
import Inicio from "./inicio";
import Novela from "./novela";

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            values : []
        }
    }

    /*
    componentDidMount(){
        Axios.get("https://api.mlab.com/api/1/databases/una-test-lab/collections/pages?apiKey=12KfjNX97_amx0iUdS2I_eitAy3jSaOb")
        .then(res => {
            console.log(res.data);
            this.setState({
                values: res.data
            });
        });
    }

    returnObject(pos){
        return this.state.values[pos];
    }
*/
    render(){
        return(
            <div>
                <header>

                </header>
                <HashRouter>
                    <div>
                    <Route path='/' exact={true} render={() => {
                     return (
                        <div>
                            <div className="mainContent">
                                <Inicio />
                            </div>
                        </div>
                    );
                    }} />
                    <Route path='/novela' exact={true} render={() => {
                     return (
                        <div>
                            <div className="mainContent">
                                <Novela />
                            </div>
                        </div>
                    );
                    }} />
                    </div>
                </HashRouter>
            </div>
        );
    }



}


ReactDOM.render(<App />,document.getElementById('root'))
