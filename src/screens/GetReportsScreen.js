import React, {useEffect, useContext} from 'react';
import { View, TextInput, FlatList, TouchableOpacity, StyleSheet, Text, ScrollView, Button } from "react-native";
import {withNavigation} from 'react-navigation';
import Budtender from '../components/Budtender';
import { Context } from '../context/ReportContext';

const GetReportsScreen = ({navigation}) => {
    const {state, getReports } = useContext(Context);
//inside useEffect - callback func runs only first time when app rendered:   
    useEffect(()=> {
        getReports();

        const listener = navigation.addListener('didFocus', () => {
            getReports();
        });//arrow function here tells react navigation that anytime the index screen gains focus (becomes the primary screen on the device)-
// then this callback function will be invoked with { getBlogPosts();}

        return () => {
            listener.remove();
        };// this action will be invoked in case we decide not to show index screen any more - and completely removed it..
//-the callback func in the return- cleans up after the listner-so there's no memory leak.


    }, []);// empty array right there means that we only want to run that error function 
    //exactly one time when our component first shows up on the screen.

    //const theDate= state[i, 0];//state - all reports; i-a report, [0]- first obj=date,
  //  const lines= state[i, 1];// [1]- second obj - lines

 
  const repDetail= (date) =>state.forEach(report => {
        const theDate= report[0];
       const lines= report[1];
        if(date===theDate) {
        return lines;
        } 
    });
    const r= repDetail;
    
    const rep= state.forEach(report => {
        const theDate= report[0];
       const lines= report[1];
       return lines;
    });
  

  // state.forEach(report => {   } );

 // { if(theDate=='02/29/2020') const repDetails=lines};

    return (
        <>
      
        <Text>enter the date</Text>
        <TextInput
            //style={styles.input} 
            //value={date} 
            placeholder={'00/00/0000'}
                      
            onChangeText={(newDate) => repDetail({newDate})}
        />
        <FlatList 
            data={state}
            keyExtractor={report => report[0]}
            renderItem={({ item}) => {  
                return (  
                   console.log("new",item),       
                <View style={styles.container}>
                    <Text style={styles.label}>Report Date: {item[0]}</Text>
                    {item[1].map((i, key) => {
            return ( <Text style={styles.label} key={i.id}>{i.title.toString()} {JSON.stringify(i.content.text)} </Text>);

        })}

                </View>
                );
            }}
        />
                
              
    </>
    );
};


// {report.map((item, key) => {
 //   return ( <Text key={item.id}>{item.title.toString()} {JSON.stringify(item.content.text)} </Text>);
// })}


//getReports(), console.log(state.getReports)

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
        fontSize:15,
        marginBottom:5,
        marginHorizontal:5,
        borderWidth: 1,
        borderColor: 'black',
        
        flexDirection: 'row' // makes the label and the text show on the same line

    },
    container: {
        //flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        flex: 1
    }

});





export default GetReportsScreen;