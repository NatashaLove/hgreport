
import React, { useContext, useEffect } from 'react';
import { View, Alert, Text, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';
import { Context } from '../context/ReportContext';
import { Container, Header, Content, List, ListItem, Left, Right, Body } from 'native-base';

const ShowRepByDateScreen = ({ navigation, initialValues})=> {
    
const date = navigation.getParam ('date', '00/00/0000');
//const lines = navigation.getParam ('lines', []);
// bring the ISO date var to this screen and here convert to correct format..

const {state} = useContext(Context);

const result = state.find(report => report.date === date


//    ? report
//    :initialValues.state
    );
    /*
if(date !== report.date) {
    Alert.alert("WRONG DATE!")
};
*/

 const {theDate, lines} = result;//need to destructurize-to get the lines arr from the object result.

/*
if (theDate===null) {
    console.log("no date entered");
    //Alert.alert("no date entered");
}
 */

   // const theDate=date;

return (
  //console.log(date),
  

       <>
            
<Text  style={styles.headtext} >Report for {date}  </Text>
    
<View style={styles.container}>

<FlatList 
      data={lines}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          <ListItem style={ { marginRight:10, height: 41, borderWidth:1, borderColor: 'blue'} }>
            <Left>
              <Text style={styles.text}>{item.title}</Text>
            </Left>
            <Body >
                <Text style={{color: 'blue', fontSize: 15, fontWeight: 'bold'}}>{item.content.text}</Text>
            </Body>
            
            
          </ListItem>
        );
      }}
    />
 
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
         fontSize: 18,
         //alignSelf:'center',
         color: 'black',
         //justifyContent:'space-between',
       //  borderBottomColor: 'blue',
        // borderWidth:1,
          
     },
     headtext: {
         fontStyle: 'italic',
         fontWeight: 'bold',
         fontSize: 20,
         alignSelf:'center',
         color: 'rgb(120,0,60)',
         //justifyContent:'space-between',
         paddingBottom:3,
         marginRight:5
        // borderRadius: 5
         
     },
 
     container: {
         //fontSize: 20,
         alignItems: 'stretch',
         //borderRadius: 55,// rounded corners
        // marginHorizontal: 5,
         //marginBottom: 60,
         flex:0,
         justifyContent: 'space-between',
         //justifyContent: 'space-around',
         //justifyContent: 'space-evenly',
         //marginTop: 20,
         marginBottom: 2,
         fontWeight: 'bold',
         fontSize: 15,
        // flexDirection: 'row',
        // paddingHorizontal: 10,
        // width: "100%"
         //alignSelf:'center',
 
        // flexDirection: 'column'
     },
});

ShowRepByDateScreen.defaultProps = {
    initialValues : {
        state: [{
            "date": "0/0/2020",
            "lines": [{}]
        }]
    }
};

export default ShowRepByDateScreen;

//Flatlist instead of:
/*
  {lines.map((item, key) => {
        return ( 
        <Text  key={item.id} style={styles.text}>{item.title.toString()} ---  {JSON.stringify(item.content.text)}</Text>      
         );
                
    }
            
    )}
*/