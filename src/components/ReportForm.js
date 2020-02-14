import React, { useState, useContext} from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import SubForm from '../components/SubForm';
import { Context } from '../context/ReportContext';
//import Constants from 'expo-constants';

const ReportForm = ( {state, onSubmit} )=> {
    const {populateReportForm} = useContext(Context);
    //const [content, setContent]= useState(lines.content);
    
    const lines = [
    
        {
            id: 1,
            title: 'Date:',
            content: ''
        },
        {
            id: 2,
            title: 'Total in drawer:',
            content: ''
        },
        {
            id: 3,
            title: 'Taxes:',
            content: ''
        },
        {
            id: 4,
            title: 'Rent:',
            content: ''
        },
        {
            id: 5,
            title: 'HG Money:',
            content: ''
        },
        {
            id: 6,
            title: 'MM:',
            content: ''
        },
        {
            id: 7,
            title: 'PP:',
            content: ''
        },
        {
            id: 8,
            title: 'Poole Farms Flower:',
            content: ''
        },
        {
            id: 9,
            title: 'Notes:',
            content: ''
        },
        {
            id: 10,
            title: 'Name:',
            content: ''
        }
    ];
   
    return (
        <View>
                <FlatList
                data={lines}
                keyExtractor={item => item.title}
                renderItem={({ item }) => {
                return <SubForm id = {item.id} title = {item.title} content={item.content} />}}
//!!! NEED to add a "+"(add subform)below- to add text input in case of new consignment
                />

            <Button 
                title="Save Report" 
                onPress={()=> onSubmit(lines),  
                   // populateReportForm(lines.id, lines.content), 
                   console.log(lines)} // onSubmit(lines)}
//add on new prop - onPress and inside of it - run our onSubmit callback-
//- that was passed in as a prop to blogpostform in CreateScreen.

              //  onPress={()=> {} }
             />
             
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize:18,
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal:5,//mRgins on both sides
        marginBottom:5,
        paddingHorizontal:5 //to get a little bit spacing between the text and the border

    },
    label: {
        fontSize:15,
        marginBottom:5,
        marginHorizontal:5
    }

});

export default ReportForm;