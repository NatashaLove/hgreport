
import React, { useContext, useEffect } from 'react';
import { View, Alert, Text, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';
import { Context } from '../context/ReportContext';

const ShowRepByDateScreen = ({ navigation, initialValues})=> {
    
const date = navigation.getParam ('date', '');
//const lines = navigation.getParam ('lines', []);

const {state} = useContext(Context);

const result = state.find(report => report.date === date);

const {TheDate, lines} = result;
//const lines = initialValues.lines;

 

   // const theDate=date;

return (
    <>
            
<Text  style={styles.label} >Report for {TheDate}</Text>
    
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