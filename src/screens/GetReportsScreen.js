import React, {useEffect, useContext, useState} from 'react';
import { View, TextInput, FlatList, StyleSheet, Text, ScrollView, Button } from "react-native";
import { Context } from '../context/ReportContext';
import { DatePicker} from "native-base";

const GetReportsScreen = ({navigation}) => {
    const {state, getReports } = useContext(Context);
     const [date, setDate] = useState(new Date());
    
//inside useEffect - callback func runs only first time when app rendered:   
    useEffect(()=> {
       // getReports();

        const listener = navigation.addListener('didFocus', () => {
            getReports();
        });//arrow function here tells react navigation that anytime the screen gains focus (becomes the primary screen on the device)-
// then this callback function will be invoked with { getReports();}

        return () => {
            listener.remove();
        };

    }, []);// empty array right there means that we only want to run that arrow function 
    //exactly one time when our component first shows up on the screen.
   // const newDate= date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
   //const newDate = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
   
   return (
        
        <>
      
        <Text style={styles.text}  >Select the date</Text>
       
        
        <DatePicker
            defaultDate={new Date(2020, 2, 23)}
            minimumDate={new Date(2020, 2, 23)}
            maximumDate={new Date(2020, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={setDate}
           //newDate = {date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()}    
               //(setDate) => navigation.navigate('ShowRepByDate', {date:date})}

          />
         
        

        <View style={styles.button} >
        <Button
         title="show" 
         color='blue'   
         onPress={()=> navigation.navigate('ShowRepByDate', {date:date}) } //console.log(date)}
        />
        </View>
        < FlatList 
            
            data={state}
            keyExtractor={item => item.date}
            renderItem={({ item}) =>  (  
                          
                <View style={styles.container}>
                    <Text style={styles.text}>Report Date: {item.date}</Text>
                    {item.lines.map((i, key) => {
            return ( <Text style={styles.label} key={i.id}>     {i.title.toString()}              
            {JSON.stringify(i.content.text)} </Text>);

        })}

                </View>
                )
            }
        />                    
    </>
    );
};

const styles = StyleSheet.create({

    button: {
//style through <View>
        width: "50%", 
        margin: 5, 
        maxWidth:70,
        maxHeight: 30,
        marginBottom: 10,
        borderRadius:55,
        alignSelf:'center',
        fontSize: 30,
        fontWeight: 'bold'
    },

    input: {
        fontSize:18,
        color: 'blue',
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal:10,//margins on both sides
        marginBottom:5,
        paddingHorizontal:5, //to get a little bit spacing between the text and the border
       // flex: 1//takes the rest of the space
        },
    label: {
        fontSize:15,
        marginBottom:1,
        marginHorizontal:5,
        borderWidth: 1,
       borderBottomColor: 'blue',
       // borderColor: 'black',
       // justifyContent: 'space-between',
        
        flexDirection: 'row' // makes the label and the text show on the same line

    },
    container: {
        //flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
       // justifyContent: 'space-between',
        paddingHorizontal: 10,
        flex: 0
    },
    text: {
        // fontStyle: 'italic',
         fontWeight: 'bold',
         fontSize: 16,
         //alignSelf:'base',
         color: 'blue',
         margin: 5,
         marginLeft:10
         
     },

});


export default GetReportsScreen;

/*
//manual date input
 <TextInput
            style={styles.input} 
            //value={date} 
            placeholder={'0/0/0000'}
                      
            onChangeText={(newDate) => {
               
                    newDate!==null ?
                     setDate(newDate):
                     setDate('00/00/0000');
               
                }}
        />
*/