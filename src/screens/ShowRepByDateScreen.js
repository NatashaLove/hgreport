
import React, { useContext, useEffect } from 'react';
import { View, Alert, Text, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';
import { Context } from '../context/ReportContext';

const ShowRepByDateScreen = ({ navigation, initialValues})=> {
    
const date = navigation.getParam ('date', '00/00/0000');
//const lines = navigation.getParam ('lines', []);

const {state} = useContext(Context);

const result = state.find(report => report.date === date);

const {theDate, lines} = result;
/*
if (theDate===null) {
    console.log("no date entered");
    //Alert.alert("no date entered");
}
 */

   // const theDate=date;

return (

       <>
            
<Text  style={styles.label} >Report for {date}</Text>
    
<View style={styles.container}>
    {lines.map((item, key) => {
            return ( <Text key={item.id}>{item.title.toString()} {JSON.stringify(item.content.text)} </Text>);

    })}

</View>

<Button style={styles.button}
    title="back" 
    
    onPress={()=>  {
        navigation.pop() 
    }}//}console.log()
/>
    

</>


);


};


const styles = StyleSheet.create({});

export default ShowRepByDateScreen;