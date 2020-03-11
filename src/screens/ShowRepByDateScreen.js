
import React, { useContext, useEffect } from 'react';
import { View, Alert, Text, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';
import { Context } from '../context/ReportContext';

const ShowRepByDateScreen = ({ navigation, initialValues})=> {
    
const date = navigation.getParam ('date', '00/00/0000');
//const lines = navigation.getParam ('lines', []);

const {state} = useContext(Context);

const result = state.find(report => report.date === date);

const {theDate, lines} = result;//need to destructurize-to get the lines arr from the object result.

/*
if (theDate===null) {
    console.log("no date entered");
    //Alert.alert("no date entered");
}
 */

   // const theDate=date;

return (

       <>
            
<Text  style={styles.headtext} >Report for {date}</Text>
    
<View style={styles.container}>
    {lines.map((item, key) => {
            return ( 
            <Text  key={item.id} style={styles.text}>{item.title.toString()} ---  {JSON.stringify(item.content.text)}</Text>      
            );
           
                
    }
            
    )}
</View> 


    <Button style={styles.button}
    title="back to all reports" 
    color="rgb(120, 0 , 60)"
    
    onPress={()=>  {
        navigation.pop() 
    }}//}console.log()
/>
    

</>


);


};


const styles = StyleSheet.create({
    text: {
        // fontStyle: 'italic',
         fontWeight: 'bold',
         fontSize: 20,
         //alignSelf:'center',
         color: 'black',
         //justifyContent:'space-between',
         borderBottomColor: 'blue',
         borderWidth:1,
         
         
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
         alignItems: 'stretch',
         //borderRadius: 55,// rounded corners
         marginHorizontal: 10,
         //marginBottom: 60,
         flex:0,
         justifyContent: 'space-between',
         //justifyContent: 'space-around',
         //justifyContent: 'space-evenly',
         //marginTop: 20,
         marginBottom: 6,
         fontWeight: 'bold',
         fontSize: 25,
        // flexDirection: 'row',
         paddingHorizontal: 10,
        // width: "100%"
         //alignSelf:'center',
         
         
        // flexDirection: 'column'
     },
});

export default ShowRepByDateScreen;