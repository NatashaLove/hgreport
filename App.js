//The app created by Natalia Love for HighGarden LLC
//Tools used: React Native, JavaScript, Visual Studio code, expo-cli, cmd and Gitbash terminals etc
// Date: 3/11/2020

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/ReportContext';// import in {}, because it's not a default export, but a variable to export
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
//import EditScreen from './src/screens/EditScreen';
import TestScreen from './src/screens/TestScreen';
import GetReportsScreen from './src/screens/GetReportsScreen';
import ShowRepByDateScreen from './src/screens/ShowRepByDateScreen';
import { Asset } from 'expo-asset';
//!!! import ShowReportScreen...

const navigator = createStackNavigator(
  {
//1.is our route configuration object so we list out all the possible screens that a user can navigate to
   
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
   // Edit: EditScreen,
    Test: TestScreen,
    Reports: GetReportsScreen,
    ShowRepByDate: ShowRepByDateScreen

  }, 
  {
//2.configuration options specifically for our stack Navigator: 
    initialRouteName: 'Index',
    defaultNavigationOptions: {
//3.this title is set inside of the header.
      
      title: 'HighGarden Report',
      
    }
  }
);

const cacheImages = (images)=> {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

 //async function _loadAssetsAsync() {
  const imageAssets = cacheImages([
      require('./assets/icon.png'),
      require('./assets/hg.jpeg')
  ]);

 // await Promise.all([...imageAssets]);
//}

const App = createAppContainer(navigator);

export default () =>{
  //passing <app> as children to <Provider>
  return <Provider>
    <App 
     asset={imageAssets}

    />
  </Provider>
  };
//{children} is a var declared in ReportContext and - initialized in App.js as <App>
