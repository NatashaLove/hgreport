import React, { useContext, useState } from 'react';//useState here to control TextInput
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Context } from '../context/ReportContext';// import can get access to our context
import Form from '../components/Form';
import { Container, Header, Content, List, ListItem, Left, Right, Body, Spinner } from 'native-base';

const CreateScreen = ({state, navigation})=> {
  
  return (
    
    <View>
      <Form onSubmit={ (dataArr, today)=> {
      
      navigation.navigate('Show', {data: dataArr, date:today})
      
      }}
       />
      
    </View>
    
    );
};

const styles = StyleSheet.create({
  text: {
    // fontStyle: 'italic',
     fontWeight: 'bold',
     fontSize: 25,
     alignSelf:'center',
     color: 'green',
     
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

export default CreateScreen;

