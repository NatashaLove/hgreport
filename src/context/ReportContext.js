import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';// importing axios instance to use it to make requests from 'actions'
//reducer has 2 args: 1. state, 2. action and uses switch statement to do the action clicked on:
//reducer can be used because it's imported in createDatacontext file
const reportReducer = (state, action)=>{
//the difference with reducer is that we can very easily add additional case statements to switch and can modify our list of reports in different ways:
    switch (action.type) {

        case 'get_reports':
            return action.payload; 
 // So when we get this response back from the API: that list of reports is the total list .

        default:
            return state;
    }
  
};

//need to use "async -await" syntax, because we're going make a network request.

const getReports = dispatch => {
//whenever we call 'dispatch', react is gonna take that object-and then automatically call our reducer-
//That object is then going to be the second argument to our reducer:
    return async () => {
// response.data === [{}, {}, {}]   // 'response.data' property- array of objects -

        const response = await jsonServer.get('/reports'); // 
//any route that we put inside of here will be contaminated with a base URL -which is specified inside of our configuration (jsonServer);
//the request returns response..
        dispatch({ type: 'get_reports', payload: response.data});
    };
};


const addReport = dispatch => {
   
//must accept a third argument - 'callback'- because added a callback function in CreateScreen to addBlogPost(to navigate)
    return async ( date, lines, callback)=>{
       
//error 500- unhandled promise, id:(0) - was because [report] was not destructurized: but working with {date, lines} and generates id normally
        await jsonServer.post('/reports', {date, lines});//request to the server (URL+'/reports') and data {date, lines}.
// this line is telling our Json server to create a brand new object with props date and lines[] in obj {}
//and id (generated automatically by the server) as a third prop.

      if (callback){
        callback();// this call returns to the index screen
        };
    
    };
};

//new export statement: destructure out context and provider from create datacontext func:
export const { Context, Provider}= createDataContext(
//all 3 args from the function in the file: 1.reducer, 2.object that contains all the different actions that we want to have:
// addreport etc, 3.initial default state value =an empty array :
    reportReducer, 
    { addReport, getReports}, 
    [] //empty []- initial state when our application first loads up- empty array means we do not yet have any blog posts at all.

    );

