import React, { useContext } from 'react';//useState here to control TextInput
import { StyleSheet, View, Text } from 'react-native';
import { Context } from '../context/ReportContext';// import can get access to our context
import ReportForm from '../components/ReportForm';
import Budtender from '../components/Budtender';

//need navigation prop ou of all - using navigate func to other screens
const CreateScreen = ({ navigation})=> {
  //????need to use name prop..
 const {budname}= useContext(Context);
//inside of main component (CreateScreen) call usecontext and pass in the context object and then -
//-we're going to get back our whole big 'state' object and all its different action functions.
//now we only care about addblogpost so I'm going to destructure out adblogpost  : 
  const {addReport} = useContext(Context);

//!!! to customize the form - 1st! here inside <BlogPostForm /> -we need to formulate -
//-(make up var names) some set of props -that we're gonna pass into addblogpost form:
//whenever blogpostform calls onSubmit it has to pass in the new title and content !
  return (
    <View>
        <Text>{budname}</Text>
        <ReportForm onSubmit={(lines)=> {
//anytime the user submits the form -the blogpostform invokes this onSubmit prop-
//(it's custom - should be in the form component as a var also..)-

//Inside this callback function: 1.call addblogpost ;
//-2.pass in the new title and content, that the user just created;
//3.pass in a callback as a 3d arg -to navigate back to the show report screen using that navigation prop:
            addReport(lines, budname, () => navigation.navigate('Show'));
        }} 
        />
    </View>);
//!in the blogpostform we're going to make sure that any time a user taps on that submit button -
//we call onSubmit with a new title and content !   

};

const styles = StyleSheet.create({

    
});

export default CreateScreen;

