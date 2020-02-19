import React, { useState, useContext, useEffect} from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, Button, FlatList, Image } from 'react-native';
import SubForm from '../components/SubForm';
import { Context } from '../context/ReportContext';
//import Constants from 'expo-constants';

const Form = ( {initialValues, onSubmit} )=> {
    //const {populateReportForm} = useContext(Context);
    
    //const[lines, setLines] = useState(initialValues.lines);
    //const [content, setContent]= useState(lines.content);
    /*
    useEffect(() => {
        setLines(SubForm.id = {id}, Subform.title = {title}, Subform.content={content}),
        
       // setLines([[id, title,content] = lines[id, title, content], 
            ()=> console.log(lines)
    });
*/
    const content= initialValues.lines.content;
    const title = initialValues.lines.title;
    const dataArr = initialValues.lines;
    //const ID=0;
    //const {populateReportForm} = useContext(Context);

    const setDataArr=(id, title, content)=> {
        
        for(let i=0; i<dataArr.length; i++){
            const makeArrID=i+1;
            
            if(id===makeArrID){
                return [
                    dataArr[i].id=id,
                    dataArr[i].title=title,
                    dataArr[i].content=content]
            }
        }
    };
   
    return (

<View >
        <FlatList 
            data={initialValues.lines}
            keyExtractor={item => item.title}
            renderItem={({ item }) => (                
                <View style={styles.container}>
                    <Text style={styles.label}> {item.title} </Text>
                   
                    <TextInput
                        style={styles.input} 
                        value={content} 
                        placeholder={item.title}
                      
                        onChangeText={(text) => setDataArr(item.id, item.title, {text})}
                    />
                </View>
                                  
            )}
    //!!! NEED to add a "+"(add subform)below- to add text input in case of new consignment
        />
        <Button style={styles.button}
                title="Save Report" 
            
                onPress={()=> onSubmit(dataArr) }//}console.log()
                />
        </View>
    );
        
            
        
    
};

Form.defaultProps = {
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

    button: {
//?
        maxWidth:10,
        maxHeight: 10
    },

    input: {
        fontSize:18,
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal:5,//mRgins on both sides
        marginBottom:5,
        paddingHorizontal:5, //to get a little bit spacing between the text and the border
        flex: 1//takes the rest of the space
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

export default Form;