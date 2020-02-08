import React, { useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const BlogPostForm = ( { initialValues} )=> {
    const [title, setTitle]= useState(initialValues.title);
    const[content, setContent] = useState(initialValues.content);
 
    return (
        <View>
            <Text style={styles.label}>{title}:</Text>
            <TextInput 
                style={styles.input} 
                value={title} 
                onChangeText ={(text) => setTitle(text)} 
            />
            <Text style={styles.label}>{content}:</Text>
            <TextInput 
                style={styles.input} 
                value={content} 
                onChangeText={(text) => setContent(text)} 
            />
           
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues : {
        title: '',
        content: '',
       
    }
};
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
        flexDirection: 'row' // makes the label and the text show on the same line
    },
    label: {
        fontSize:20,
        marginBottom:5,
        marginHorizontal:5,
        flexDirection: 'row' // makes the label and the text show on the same line

    }

});

export default BlogPostForm;
