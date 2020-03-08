
import React, { useContext, useEffect } from 'react';
import { View, Alert, Text, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';
import { Context } from '../context/ReportContext';

const ShowRepByDateScreen = ({ navigation, initialValues})=> {
    
const date = navigation.getParam ('date', '');
//const lines = navigation.getParam ('lines', []);

const {state} = useContext(Context);

const result = state.find(report => report.date === date);

//const date = initialValues.date;
//const lines = initialValues.lines;

 

   // const theDate=date;

return (
    <>
            
<Text  style={styles.label} >Report for {date}</Text>
    
<View style={styles.container}>
                  
<Text> {console.log("The report-", result)}</Text>

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