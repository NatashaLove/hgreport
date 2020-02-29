import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/ReportContext';// import in {}, because it's not a default export, but a variable to export
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import TestScreen from './src/screens/TestScreen';
import GetReportsScreen from './src/screens/GetReportsScreen';

//!!! import ShowReportScreen...

const navigator = createStackNavigator(
  {
//1.is our route configuration object so we list out all the possible screens that a user can navigate to
   
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
    Test: TestScreen,
    Reports: GetReportsScreen

  }, 
  {
//2.configuration options specifically for our stack Navigator: 
    initialRouteName: 'Index',
    defaultNavigationOptions: {
//this title is set inside of the header.
      title: 'HG Report'
    }
  }
);

const App = createAppContainer(navigator);

export default () =>{
  //passing <app> as children to <Provider>
  return <Provider>
    <App />
  </Provider>
  };
//{children} is a var declared in BlogContext and - initialized in App.js as <App>
