import React, { useContext } from 'react';//useState here to control TextInput
import { StyleSheet, View, Text } from 'react-native';
import { Context } from '../context/ReportContext';// import can get access to our context
import Form from '../components/Form';
import Budtender from '../components/Budtender';

//need navigation prop ou of all - using navigate func to other screens
const TestScreen = ({budname, navigation})=> {
  //????need to use name prop..
// const {budname}= useContext(Context);
//inside of main component (CreateScreen) call usecontext and pass in the context object and then -
//-we're going to get back our whole big 'state' object and all its different action functions.
//now we only care about addblogpost so I'm going to destructure out adblogpost  : 
  const {addReport} = useContext(Context);

//!!! to customize the form - 1st! here inside <BlogPostForm /> -we need to formulate -
//-(make up var names) some set of props -that we're gonna pass into addblogpost form:
//whenever blogpostform calls onSubmit it has to pass in the new title and content !
  return (
    
    <View>
     <Form></Form>
    </View>);
//!in the blogpostform we're going to make sure that any time a user taps on that submit button -
//we call onSubmit with a new title and content !   

};

const styles = StyleSheet.create({

    
});

export default TestScreen;

