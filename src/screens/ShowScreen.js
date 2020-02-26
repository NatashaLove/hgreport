//this is showing immediate report to be able to edit;
//big report screen will be additional - with search/filter by date and name..(?)
//for beginning just show all reports wothout filtering option..

import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';
import { Context } from '../context/ReportContext';
import {EvilIcons} from '@expo/vector-icons';
//import {dataArr} from './CreateScreen'
//import {dataArr} from '../components/Form';
import Report from '../components/Report';

// I.D. that we passed in is not provided directly as a prop -
// we have to receive that {navigation} prop -the navigation prop has a function
//called Get param- then pass in a string that will be the I.D. or some of the property name 
//that we want to retrieve during that navigate call over here: console.log(navigation.getParam('id'));
const ShowScreen = ({navigation, state, setParams})=> {
    
    const {addReport} = useContext(Context);
   
  //  const {dataArr} = useContext(Context);
//const { navigation } = this.props;  
  const lines = navigation.getParam ('data',[]);
  //const params = state.params || {};
/*
    const report = state.find(
        (report) => report.index === id //navigation.getParam('id')
        );
*/

    //const { state } = props.navigation;
    //const itemId = params ? params.itemId : null;

 // <Text> User Name: {JSON.stringify(user_name)} </Text> - just {username} won't print!
   // <Text>Other Param: {JSON.stringify(other_param)}</Text>  };
  //   
   
    return (
        <View>
            {console.log(lines)} 
            <Text>Report is ready!</Text>
            
        {lines.map((item, key) => {
            return ( <Text key={item.id}>{item.title.toString()} {JSON.stringify(item.content.text)} </Text>);

        })}
     {console.log(lines)} 
        <Button style={styles.button}
            title="Confirm" 
            
            onPress={()=>  {
                addReport(lines, reportID, () => navigation.navigate('Index'))
            }}//}console.log()
        />
            
  
        </View>
    );  
                
};
/*               
return ( 
                    item.forEach(line => {
                    console.log(line.title),
                    console.log(line.content)
                }));


  <Report dataArray={lines}>{console.log(lines)}</Report>              
                */
/*
when we want to show something inside the header- under our main component add in ShowScreen.navigationOptions = () =>
 and this is going to be a function that needs to return a configuration object that'll customize our header.
*/
ShowScreen.navigationOptions = ({navigation}) => {
    return {
        /*
        headerRight : (
            <TouchableOpacity 
            onPress ={() => 
                navigation.navigate('Edit', {id: navigation.getParam('id')})

                //because we get access to that same navigation prop - inside of our touchable opacity we can extend our navigate call :
//as a second argument We could put in an object{} that's going to have an I.D. property and that I.D. will come from navigation.getParam function
            }
        >
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        )
        */
    };
};

const styles = StyleSheet.create({});

export default ShowScreen;