import React, { useState, useContext, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/ReportContext';

const SubForm = ({id, title})=> {
    //const [title, setTitle]= useState(initialValues.title);
    const [content, setContent] = useState('');
    const {populateReportForm} = useContext(Context);

    id=0;

    useEffect(() => {populateReportForm([id, title, content]
        )}, []);
 
    return (
        <View style={styles.container}>
            <Text style={styles.label}> {title}</Text>
            <Text style={styles.label}> {content}</Text>
            <TextInput 
                style={styles.input} 
                value={content} 
                id= {id+1}
                onChangeText={(text) => setContent(text)}
                
                
//for additional callback- use - useEffect(()=> { populateReportForm(id, content);})
            />
           
           
        </View>
    );
};
/*
SubForm.defaultProps = {
    initialValues : {
        title: '',
       content: '',
    }
};
*/
//whenever we show blogpostform from the createscreen initialValues.title =
//=will be an empty string and content will be an empty string.
//(solving error with extra vars from other components like this with default values)

const styles = StyleSheet.create({
    input: {
        fontSize:18,
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal:5,//mRgins on both sides
        marginBottom:5,
        paddingHorizontal:5, //to get a little bit spacing between the text and the border
        flex: 0//takes the rest of the space
        },
    label: {
        fontSize:20,
        marginBottom:5,
        marginHorizontal:5,

        flexDirection: 'row' // makes the label and the text show on the same line

    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }

});

export default SubForm;
