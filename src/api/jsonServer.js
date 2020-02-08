//import axios and make a preconfigured version of axios:
import axios from 'axios';// importing axios instance to use it to make requests from 'actions' in Context

export default axios.create({
//the only option that we want to configure on this axios instance-baseURL:
    baseURL: 'http://64a08dac.ngrok.io' // taking baseURL from cmd terminal (w/tunnel)-but have to update it every few hours..
});