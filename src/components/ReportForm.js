import React, { useState} from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import SubForm from '../components/SubForm';
//import Constants from 'expo-constants';

const ReportForm = ( {onSubmit, lines} )=> {

    //const [content, setContent]= useState(lines.content);
    lines = [
    
        {
            title: 'Date:',
            content: ''
        },
        {
            title: 'Total in drawer:',
            content: ''
        },
        {
            title: 'Taxes:',
            content: ''
        },
        {
            title: 'Rent:',
            content: ''
        },
        {
            title: 'HG Money:',
            content: ''
        },
        {
            title: 'MM:',
            content: ''
        },
        {
            title: 'PP:',
            content: ''
        },
        {
            title: 'Poole Farms Flower:',
            content: ''
        },
        {
            title: 'Notes:',
            content: ''
        },
        {
            title: 'Name:',
            content: ''
        }
    ];
   

    return (
        <View>
            <ScrollView>
                <FlatList
                data={lines}
                keyExtractor={item => item.title}
                renderItem={({ item }) => <SubForm title= {item.title} content={item.setContent} />}
//!!! NEED to add a "+"(add subform)below- to add text input in case of new consignment
           
                />
            </ScrollView>
            <Button 
                title="Save Report" 
                onPress={()=> onSubmit(lines)}
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