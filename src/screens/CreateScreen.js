import React, { useContext, useState } from 'react';//useState here to control TextInput
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Context } from '../context/ReportContext';// import can get access to our context
import Form from '../components/Form';
import Budtender from '../components/Budtender';
import Report from '../components/Report';

//need navigation prop ou of all - using navigate func to other screens
const CreateScreen = ({state, navigation})=> {
  //????need to use name prop..
// const {budname}= useContext(Context);

const {addReport} = useContext(Context);
/*
const getDataArr=(dataArr)=>{
  return [
      id=dataArr[i].id,
      title=dataArr[i].title,
      content=dataArr[i].content

  ]
 
};
*/

const [dataArr, setDataArr]=useState([]);
//This function is used to show the selected array element on Button onPress :
SampleFunction=(item)=>{
 
  Alert.alert(item);

}
//-(make up var names) some set of props -that we're gonna pass into addblogpost form:
//whenever blogpostform calls onSubmit it has to pass in the new title and content !
const render=(dataArr)=> {
  
   return (
     <View style={styles.container}>
 
         { dataArr.map((item, key)=>(
         <Text key={key} style={styles.label} onPress={ this.SampleFunction.bind(this, item) }> { item } </Text>)
         )}
 
     </View>
   );
 }

  return (
    
    <View>
      <Form onSubmit={ (dataArr, reportID)=> {
        setDataArr ([...dataArr]), console.log(dataArr)
      
      //  (<Report lines={dataArr}/>, navigation.navigate('Show'))

        //change: ->navigate with dataArr - to Report
      //  addReport(dataArr, reportID, () => navigation.navigate('Show', {reportID}),
       // newArr= getDataArr()
      // console.log(reportID),
       // );

      }}
       />
      <Report />

      </View>

    
    );


//!in the blogpostform we're going to make sure that any time a user taps on that submit button -
//we call onSubmit with a new title and content !   

};

const styles = StyleSheet.create({
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

