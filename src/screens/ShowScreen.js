//this is showing immediate report to be able to edit;
//big report screen will be additional - with search/filter by date and name..(?)
//for beginning just show all reports wothout filtering option..

import React, { useContext, useEffect } from 'react';
import { View, Alert, Text, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';
import { Context } from '../context/ReportContext';
import {EvilIcons} from '@expo/vector-icons';
//import {dataArr} from './CreateScreen'
//import {dataArr} from '../components/Form';
import Report from '../components/Report';

// I.D. that we passed in is not provided directly as a prop -
// we have to receive that {navigation} prop -the navigation prop has a function
//called Get param- then pass in a string that will be the I.D. or some of the property name 
//that we want to retrieve during that navigate call over here: console.log(navigation.getParam('id'));
const ShowScreen = ({navigation})=> {
    
    const {addReport} = useContext(Context);
   
  //  const {dataArr} = useContext(Context);
//const { navigation } = this.props;  
  const lines = navigation.getParam ('data',[]);
  const today = navigation.getParam ('date', '');
  //const id = navigation.getParam('id', '');
 // const rID= navigation.getParam('id', '');
  //const params = state.params || {};
/*
    const report = state.find(
        (report) => report.index === id //navigation.getParam('id')
        );


//const date= new Date().getDate();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();
//const today = (month + '/' + date + '/' + year);

ShowCurrentDate=(date)=>{

   
 Alert.alert(date + '-' + month + '-' + year);

};
*/
    //const { state } = props.navigation;
    //const itemId = params ? params.itemId : null;

 // <Text> User Name: {JSON.stringify(user_name)} </Text> - just {username} won't print!
   // <Text>Other Param: {JSON.stringify(other_param)}</Text>  };
  //   
   
const report=[today, lines];

    return (
 
        <View style={styles.container}>
            
            <Text style={styles.headtext}>Report is ready!</Text>
            
        {lines.map((item, key) => {
            return ( <Text style={styles.text} key={item.id}>{item.title.toString()} {JSON.stringify(item.content.text)} </Text>);

        })}
         <Text style={styles.headtext}>{today.toString()} </Text>
       
        <View style={styles.warn}>
            <Text> </Text>
            <Text style={styles.wtext}>Please, make a screenshot on your phone before clicking the button!</Text>
            <Text style={styles.wtext}>Send the screenshot to Ray separately through the Signal!</Text>
            <Text> </Text>
        </View>

        <Button style={styles.button}
            title="Confirm" 
            color='rgb(120,0,60)'
            onPress={()=>  {
                addReport(today, lines, () => navigation.navigate('Index'));
            }}//}console.log()
        />
            
  
        </View>
    );  
                
};
/*               
return ( 
                    item.forEach(line => {
                    console.log(line.title),
                    console.log(line.content)
                }));


  <Report dataArray={lines}>{console.log(lines)}</Report>              
                */
/*
when we want to show something inside the header- under our main component add in ShowScreen.navigationOptions = () =>
 and this is going to be a function that needs to return a configuration object that'll customize our header.
*/
ShowScreen.navigationOptions = ({navigation}) => {
    return {
        /*
        headerRight : (
            <TouchableOpacity 
            onPress ={() => 
                navigation.navigate('Edit', {id: navigation.getParam('id')})

                //because we get access to that same navigation prop - inside of our touchable opacity we can extend our navigate call :
//as a second argument We could put in an object{} that's going to have an I.D. property and that I.D. will come from navigation.getParam function
            }
        >
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        )
        */
    };
};

const styles = StyleSheet.create({
    text: {
        // fontStyle: 'italic',
         fontWeight: 'bold',
         fontSize: 20,
         //alignSelf:'center',
         color: 'black',
         justifyContent:'space-between'
         
     },
     headtext: {
         fontStyle: 'italic',
         fontWeight: 'bold',
         fontSize: 25,
         alignSelf:'center',
         color: 'rgb(120,0,60)',
         paddingBottom:10
         
     },
 
     container: {
         //fontSize: 20,
         borderRadius: 55,// rounded corners
         marginHorizontal: 15,
         //marginBottom: 60,
         flex:1,
         justifyContent: 'space-between',
         //justifyContent: 'space-around',
        // justifyContent: 'space-evenly',
         marginTop: 20,
         marginBottom: 60,
         fontWeight: 'bold',
         fontSize: 25,
         //alignSelf:'center',
         
         
        // flexDirection: 'column'
     },
     warn: {
        //fontSize: 20,
        borderRadius: 55,// rounded corners
        //marginHorizontal: 15,
        backgroundColor: 'black',
        //marginBottom: 60,
        flex:0,
        justifyContent: 'space-between',
        //justifyContent: 'space-around',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginBottom: 20,
        fontStyle: 'italic',
        fontSize: 15,
        //alignSelf:'center',
        
        
       // flexDirection: 'column'
    },
    wtext: {
         fontStyle: 'italic',
        // fontWeight: 'bold',
         fontSize: 17,
         marginLeft:14,
         marginRight:6,
         alignSelf:'center',
         color: 'red',
         
     },
});

export default ShowScreen;