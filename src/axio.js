import axios from 'axios'


class Axios {
    constructor() {
        this.dataUrl = "https://api.mlab.com/api/1/databases/una-test-lab/collections/pages?apiKey=12KfjNX97_amx0iUdS2I_eitAy3jSaOb";
        
    }

    //Function to get all the information from the API
    getAllData = (thenCallback,catchCallback) =>
    {
        let uri = window.encodeURI(this.dataUrl);
        return axios.get(uri)
            .then(thenCallback)
            .catch(catchCallback);
    }

    /*
    getFirstWebPageData(){

    }*/

}


export default Axios;