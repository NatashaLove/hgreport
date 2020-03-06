
import React, { useContext, useEffect } from 'react';
import { View, Alert, Text, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';
import { Context } from '../context/ReportContext';

const ShowRepByDateScreen = ({ navigation, initialValues})=> {
    
const id = navigation.getParam ('id');
//const lines = navigation.getParam ('array', []);

const {state} = useContext(Context);

const date = initialValues.date;
const lines = initialValues.lines;

 const setReport= (id) => {state.find(
    (report) => {
     if (report.id === id) {
        date= report.date,
        lines= report.lines

     }}
 )};

   // const theDate=date;

return (
    <>
            
<Text  style={styles.label} >Report for {setReport.date}</Text>
    
<View style={styles.container}>
                  
<Text> {console.log(lines)}</Text>

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

ShowRepByDateScreen.defaultProps = {
    initialValues : {
            
            date:'',

            lines : []
    }};

const styles = StyleSheet.create({});

export default ShowRepByDateScreen;