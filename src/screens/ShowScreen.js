import React, { useContext, useEffect } from 'react';
import { ScrollView, View, Alert, Text, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';
import { Context } from '../context/ReportContext';
import { Container, Header, Content, List, ListItem, Left, Right } from 'native-base';

import {EvilIcons} from '@expo/vector-icons';

// data that we passed in is not provided directly as a prop -
// we have to receive that {navigation} prop -the navigation prop has a function
//called Get param- then pass in a string that will be the I.D. or some of the property name 
//that we want to retrieve during that navigate call over here: console.log(navigation.getParam('id'));
const ShowScreen = ({navigation})=> {
    
    const {addReport} = useContext(Context);
   
  const lines = navigation.getParam ('data',[]);
  const today = navigation.getParam ('date', '');
     
const report=[today, lines];

    return (
 
        <ScrollView style={styles.container}>
            
            <Text style={styles.headtext}>Report is ready!</Text>
            
        {lines.map((item, key) => {
            return ( <Text style={styles.text} key={item.id}>{item.title.toString()} --- {JSON.stringify(item.content.text)} </Text>);

        })}
         <Text style={styles.headtext}>{today.toString()} </Text>
       
        <View style={styles.warn}>
            <Text> </Text>
            <Text style={styles.wtext}>Please, make a screenshot!</Text>
            <Text style={styles.wtext}>Send the screenshot to Ray!</Text>
            <Text> </Text>
        </View>

        <Button style={styles.button}
            title="Confirm" 
            color='rgb(120,0,60)'
            onPress={()=>  {
                addReport(today, lines, () => navigation.navigate('Index'));
            }}//}console.log()
        />
            
  
        </ScrollView>
    );  
                
};

/*
when we want to show something inside the header- under our main component add in ShowScreen.navigationOptions = () =>
 and this is going to be a function that needs to return a configuration object that'll customize our header.
*/
ShowScreen.navigationOptions = ({navigation}) => {
    return {
       
    };
};

const styles = StyleSheet.create({
    text: {
        // fontStyle: 'italic',
         fontWeight: 'bold',
         fontSize: 20,
         //alignSelf:'center',
         color: 'black',
         justifyContent:'space-evenly',
         borderWidth:1,
         borderColor: 'blue'
         
     },
     headtext: {
         fontStyle: 'italic',
         fontWeight: 'bold',
         fontSize: 25,
         alignSelf:'center',
         color: 'rgb(120,0,60)',
         paddingBottom:5,
         paddingTop:10
         
     },
 
     container: {
         //fontSize: 20,
         borderRadius: 55,// rounded corners
         marginHorizontal: 15,
         //marginBottom: 60,
         flex:1,
        // justifyContent: 'space-between',
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