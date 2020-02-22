import React, { useContext } from 'react';//useState here to control TextInput
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Context } from '../context/ReportContext';// import can get access to our context
import Form from '../components/Form';
import Budtender from '../components/Budtender';

//need navigation prop ou of all - using navigate func to other screens
const CreateScreen = ({state, navigation})=> {
  //????need to use name prop..
// const {budname}= useContext(Context);
//inside of main component (CreateScreen) call usecontext and pass in the context object and then -
//-we're going to get back our whole big 'state' object and all its different action functions.
//now we only care about addblogpost so I'm going to destructure out adblogpost  : 
const {addReport} = useContext(Context);

const getDataArr=()=>{
  return [
      id=dataArr[i].id,
      title=dataArr[i].title,
      content=dataArr[i].content

  ]
 
};

//-(make up var names) some set of props -that we're gonna pass into addblogpost form:
//whenever blogpostform calls onSubmit it has to pass in the new title and content !
  return (
    
    <View>
      <Form onSubmit={(dataArr, reportID)=> { 
        //const reportID=0;
        addReport(dataArr, reportID, () => navigation.navigate('Show'),
       // newArr= getDataArr()
      // console.log(reportID),
      <View>
      <FlatList 
            data={dataArr}
            keyExtractor={item => item.title}
            item={getDataArr}
            renderItem={({ item }) => (                
                <View style={styles.container}>
                    <Text style={styles.label}> {item.title}  {item.content} </Text>
                  
                </View>
                                  
        )}
    //!!! NEED to add a "+"(add subform)below- to add text input in case of new consignment
        />
    </View>
    
   
        );
      }} >

      </Form>
    </View>

    
    );
    //
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

