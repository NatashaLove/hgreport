
import React, { useContext, useEffect } from 'react';
import { View, Alert, Text, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';
import { Context } from '../context/ReportContext';

const ShowRepByDateScreen = ({ navigation})=> {
    
const date = navigation.getParam ('data','');
const lines = navigation.getParam ('array', []);
/*
const {state} = useContext(Context);
const report = state.find(
    (report) => report[0] === date //navigation.getParam('data')
    );
*/
return (
    <>
            
<Text  style={styles.label}>Report for {date}</Text>
    
<View style={styles.container}>
                  
                    {lines.map((i, key) => {
            return ( <Text style={styles.label} key={i.id}>{i.title.toString()} {JSON.stringify(i.content.text)} </Text>);

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