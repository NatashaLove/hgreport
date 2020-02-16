import React, { useState, useContext} from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import SubForm from '../components/SubForm';
import { Context } from '../context/ReportContext';
//import Constants from 'expo-constants';

const ReportForm = ( {initialValues, onSubmit} )=> {
    const {populateReportForm} = useContext(Context);
    
    const[arr, setArr] = useState(initialValues.lines);
    //const [content, setContent]= useState(lines.content);
    
        
   
    return (
        <View>
                <FlatList
                data={arr}
                keyExtractor={item => item.title}
                renderItem={({ item }) => {
                return (
                <SubForm id = {item.id} title = {item.title} content={item.content} 
                 //onChange ={(content) => setArr(content), console.log(arr)}       
                />);
                }}
//!!! NEED to add a "+"(add subform)below- to add text input in case of new consignment
                />
        
            <Button 
                title="Save Report" 
                onPress={()=> onSubmit(arr)  
                   // populateReportForm(lines.id, lines.content), 
                } // onSubmit(lines)}
//add on new prop - onPress and inside of it - run our onSubmit callback-
//- that was passed in as a prop to blogpostform in CreateScreen.

              //  onPress={()=> {} }
             />
             
        </View>
    );
};

ReportForm.defaultProps = {
    initialValues : {
        lines : [
            //initial values
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
                    title: 'Salaries:',
                    content: ''
                },
                {
                    id: 4,
                    title: 'Taxes:',
                    content: ''
                },
                {
                    id: 5,
                    title: 'Rent:',
                    content: ''
                },
                {
                    id: 6,
                    title: 'HG Money:',
                    content: ''
                },
                {
                    id: 7,
                    title: 'MM:',
                    content: ''
                },
                {
                    id: 8,
                    title: 'PP:',
                    content: ''
                },
                {
                    id: 9,
                    title: 'Poole Farms Flower:',
                    content: ''
                },
                {
                    id: 10,
                    title: 'Notes:',
                    content: ''
                },
                {
                    id: 11,
                    title: 'Name:',
                    content: ''
                }
            ]
    }
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