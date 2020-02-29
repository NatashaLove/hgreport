
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';// importing axios instance to use it to make requests from 'actions'
//reducer has 2 args: 1. state, 2. action and uses switch statement to do the action clicked on:
//reducer can be used because it's imported in createDatacontext file
const reportReducer = (state, action)=>{
//the difference with reducer is that we can very easily add additional case statements to switch and can modify our list of blog posts in different ways:
    switch (action.type) {

       //new action create with map! to create new array!
// The map() method creates a new array populated with the =report= after calling a provided function on every element in the array:
        
/*
        case 'add_report':
//similar codes described below in comments from useState
            return [
                ...state,//array
                {   repID: action.payload.id,
                    title: action.payload.title, 
                    content: action.payload.content
                    //budname: action.payload.budname
                }
            ];//2 arg- action

*/
        case 'show_report':
           
            return state.filter((lines) => 
                lines.id === action.payload.lines.id);

        case 'get_reports':
            return action.payload; //that's enough! no need for [...state,...] etc, because
// whenever we get a response back from the API -our assumption is that the API is always the total source of information inside of our app.
 // So when we get this response back from the API: that list of blog posts is the total list of blog posts.
//So we don't try to add this new response onto any existing state, Instead we replace all of our existing state with it because it is the total source of truth.

        case 'edit_report':

//array.map()-looking for THE blogPost by id -
// The map() method creates a new array populated with the =results= after calling a provided function on every element in the array:
            return state.map((report) => {
                return report.id === action.payload.id
                ? action.payload// payload = whole obj blogPost
                : report; //
            });
//the above code is short for if-else:
/*
if (blogPost.id === action.payload.id) {
    return action.payload; // if founf the blog post by id - loads the form to edit it
} else {
    return blogPost; // if not- shows the same post- existing blog post.
}
*/
        default:
            return state;
    }
  
};


//need to create a new action func to fetch posts, ie -to make request,get response and dispatch an action:
//need to use "async -await" syntax, because we're going make a network request.
//So going to mark this function as 'async' -then inside of here we can make our network request:
const getReports = dispatch => {
//whenever we call 'dispatch', react is gonna take that object-and then automatically call our reducer-
//That object is then going to be the second argument to our reducer:
    return async () => {
// response.data === [{}, {}, {}]   // 'response.data' property- array of objects -
//---that's where our list of blog posts is going to be -every object is our blog:
        const response = await jsonServer.get('/reports'); // `${name}`
//any route that we put inside of here will be contaminated with a base URL -which is specified inside of our configuration (jsonServer);
//the request returns response..
        dispatch({ type: 'get_reports', payload: response.data});
    };
};


//making request to the API in all the functions:

//we must make sure that this add blog post function gets access to dispatch from another file (createdatacontext)-
//-that's how we change our state- make sure that we call this function  with The (Dispatch)
const addReport = dispatch => {
    //arr for all reports
    const reports=[];
//must accept a third argument - 'callback'- because added a callback function in CreateScreen to addBlogPost(to navigate)
    return async ( report, callback)=>{
       
        reportID=report.id;
        //for (let i=0;i<=30; i++){   
          //  reports[i]=lines;
           //};  
        //we can accept some arguments {title, content} -
//that will come from our component (CreateScreen) and then pass those through to the dispatch function
    await jsonServer.post('/reports', report);//(${name}`)request to the server (URL+'/blogposts') and data {title,content}.
       // this line is telling our Json server to create a brand new report .
      
    
       //dispatch({ type: 'add_report', payload: {repID, title, content, budname}});//add those both { title, content} in to a payload property
    // don't need dispatch any more -because anytime now we add a blogpost- we call '/blogposts'-from the server and
    //then refresh the index screen and upload all posts in the app.
     if (callback){
        callback();// this call returns to the index screen
//without providing a callback, the code would result in an error.(if we decide not to navigate the user somewhere else right away.)
//to solve the issue is to wrap both these with :If callback exists then call callback.    
        };
    
    };
//anytime someone calls add blog post we're going to dispatch an action object, which is 'add_blogpost' from switch
//it describes how we want to change our data.
};
/*
const showReport = id = dispatch ({
    //const reports=[];
  //  return async (lines, callback, reportID) => {
       /* for (let i=0;i<=30; i++){   
            lines.id= reports[i];  
           };  
          
       // await jsonServer.get('/reports', {lines});
        return : { 
            type: 'show_report', 
            payload: id
            },//dispatch has 2 arg : type and payload
        
        if (callback){
            callback();// this call returns to the index screen
        }

    
});
*/
const editReport = dispatch => {
    return async ( id, lines, callback) =>{
//to send updated title and content to our server -should use a PUT request;
//PUT request is used any time that we want to update a record with a given I.D-first arg, 
//and the updated object {title,content}-second arg:
        await jsonServer.put(`/reports/${id}`, {lines});
        dispatch ({ 
            type: 'edit_report', 
            payload: { lines, id } 
        });//dispatch has 2 arg : type and payload
        if (callback){
            callback();// this call returns to the index screen
        };
    }
};


//new export statement: destructure out context and provider from create datacontext func:
export const { Context, Provider}= createDataContext(
//all 3 args from the function in the file: 1.reducer, 2.object that contains all the different actions that we want to have:
// addblogpost etc, 3.initial default state value =an empty array :
    reportReducer, 
    { addReport, editReport, getReports}, 
    [] //empty []- initial state when our application first loads up- empty array means we do not yet have any blog posts at all.
// we could put in some default blog post to appear when our application is first loaded:
//inside of this array - put in an object with the title 'test post', content 'test content' and id:1:
//{title: 'TEST POST', content: 'TEST CONTENT', id: 1 }
    );

