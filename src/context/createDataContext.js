//small letter (create)- because we are going to export a plain function and label it with lowercase(filee=function)
//this code should automate the code from ReportContext
import React, {useReducer} from 'react';

export default (reducer, actions, initialState)=> {
    const Context = React.createContext();

    const Provider = ({children}) => { //it is <App> wrapped in this {children} arg   

        const[state, dispatch] = useReducer(reducer, initialState);

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);//add, edit, delete..
            }

        return <Context.Provider value={{state, ...boundActions }}>
            {children}
        </Context.Provider>
    }

    return {Context, Provider};
};
//we created a reusable function- to automate the process of setting up context and the provider