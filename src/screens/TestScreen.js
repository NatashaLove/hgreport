import React, { useContext, useState } from 'react';//useState here to control TextInput
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { Context } from '../context/ReportContext';// import can get access to our context
import Form from '../components/Form';
import Budtender from '../components/Budtender';

//need navigation prop ou of all - using navigate func to other screens
const TestScreen = ({initialValues, navigation})=> {
  //????need to use name prop..
// const {budname}= useContext(Context);
//inside of main component (CreateScreen) call usecontext and pass in the context object and then -
//-we're going to get back our whole big 'state' object and all its different action functions.
//now we only care about addblogpost so I'm going to destructure out adblogpost  : 
  const {addReport} = useContext(Context);
const [username, setState]=useState('');
const date = '2020-03-23T05:00:00.000Z';
//!!! to customize the form - 1st! here inside <BlogPostForm /> -we need to formulate -
//-(make up var names) some set of props -that we're gonna pass into addblogpost form:
//whenever blogpostform calls onSubmit it has to pass in the new title and content !
 
console.log(date);

return (
    
      //View to hold our multiple components  
      <View style={styles.container}>  
      {/*Input to get the value from the user*/}  
      <TextInput  
  value={username}  
  onChangeText={username => setState({ username })}  
  placeholder={'Enter Any value'}  
  style={styles.textInput}  
  />  
  <View style={styles.buttonStyle}>  
      <Button  
  title="Submit"  
  // color="#00B0FF"  
 /* onPress={() =>  
  navigation.navigate('Show', {  
      userName: username,  
      otherParam: '101',  
      
  })  
  }  
  */
  />  
  </View>  
  </View>  

    );
//!in the blogpostform we're going to make sure that any time a user taps on that submit button -
//we call onSubmit with a new title and content !   

};

TestScreen.defaultProps = {
  initialValues : {
    username: '',  
  }
};

const styles = StyleSheet.create({

  container: {  
    flex: 1,  
    backgroundColor: '#fff',  
    alignItems: 'center',  
    padding: 16,  
},  
textInput: {  
    height: 45,width: "95%",borderColor: "gray",borderWidth: 1,fontSize:20,  
},  
buttonStyle:{  
    width: "93%",  
    marginTop: 50,  
    backgroundColor: "red",  
  } 
});

export default TestScreen;

