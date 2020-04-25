import React, { useState} from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, Button, FlatList, Image } from 'react-native';

const Form = ( {initialValues, onSubmit} )=> {

//Current date is {this.props.date} - FOR DATE!

    const content= initialValues.lines.content;
    const title = initialValues.lines.title;
    const dataArr = initialValues.lines;
  
    const setDataArr=(id, title, content)=> {
       
        for(let i=0; i<dataArr.length; i++){
            const makeArrID=i+1;
            
            if(id===makeArrID){
                return [
                    dataArr[i].id=id,
                    dataArr[i].title=title,
                    dataArr[i].content=content
                ]
            }
        }
    };

   
    const ddate= new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const today = (month + '/' + ddate + '/' + year);

    return (

<View>
    <Text style={styles.text} >Date: {today}</Text>
        <FlatList 
            data={dataArr}
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
                title="Preview Report" 
                color="blue"
            
                onPress={()=> onSubmit(dataArr, today) }//}console.log()// 
                />
        </View>
    );
        
};

Form.defaultProps = {
    initialValues : {
            
        date:'',

        lines : [
                //initial values
            {
                id: 1,
                title: 'Name:',
                content: ''
            },
            {
                id: 2,
                title: 'Total in drawer: ',
                content: ''
            },
            {
                id: 3,
                title: 'Wages:',
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
                title: 'HighGarden:',
                content: ''
            },
            {
                id: 7,
                title: 'Buffalo Roze:',
                content: ''
            },
            {
                id: 8,
                title: 'Poole Farms:',
                content: ''
            },
            {
                id: 9,
                title: 'Pure Pressure:',
                content: ''
            },
            {
                id: 10,
                title: 'Dankland:',
                content: ''
            },
            {
                id: 11,
                title: 'Consingment# :',
                content: ''
            },
            {
                id: 12,
                title: 'Left in Drawer:',
                content: ''
            },
            {
                id: 13,
                title: 'Notes:',
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

    text: {
        // fontStyle: 'italic',
         fontWeight: 'bold',
         fontSize: 20,
         //alignSelf:'base',
         color: 'blue',
         margin: 15
         
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