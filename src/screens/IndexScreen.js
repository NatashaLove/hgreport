import React, { useContext} from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Button, Image } from "react-native";
import {withNavigation} from 'react-navigation';
import Budtender from '../components/Budtender';
import { Context } from '../context/ReportContext';
//import ImageDetail from '../components/ImageDetail';

//flatlist with 3 names (budtenders)
//array create on index screen here- eachelement wrap- with toachable opacity -
//to navigate onto personal screen with form- when it saved- loads "showscreen" with all reports..
//need to be able save the file or send somewhere else..
//create a component in separate file with a name in touchable opacity (like searchbar)*3 names

const IndexScreen = ({budname, navigation}) => {

    const {state, getReports}= useContext(Context);

    return <View style={styles.container}>
        <Text style={styles.text}>Hello, HighGarden!</Text>
        <View style={[{ width: "50%", margin: 5, maxWidth:70,
        maxHeight: 35,
        marginTop:25,
        alignSelf:'center',
        
        fontWeight: 'bold' }]}>
        <Button 
            title="CREATE REPORT"
            color='rgb(150,200,100)'
            borderRadius='70'
            fontWeight= 'bold'
            onPress={()=> navigation.navigate('Create')}
        />
        </View>

    <Image style={styles.image}
    source={require('../../assets/hg.jpeg')}>
    </Image>
        
       
              
        <View style={[{ width: "50%", margin: 5, maxWidth:70,
        maxHeight: 30,
        marginBottom: 10,
        alignSelf:'center',
        fontSize: 30,
        fontWeight: 'bold' }]}>
        <Button style={styles.button}
            title="Get Reports"
            color='rgb(120,0,60)'
            borderRadius='70'
            fontWeight= 'bold'
            onPress={()=>navigation.navigate('Reports') }
            
            />
            </View>
           
    
    </View>
};

const styles = StyleSheet.create({

    text: {
       // fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf:'center',
        color: 'green',
        
    },

    container: {
        //fontSize: 20,
        borderRadius: 55,// rounded corners
        marginHorizontal: 15,
        //marginBottom: 60,
        flex:1,
        justifyContent: 'space-between',
        //justifyContent: 'space-around',
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginBottom: 60,
        
       // flexDirection: 'column'
    },

    button: {
//! button doesn't have styles.prop!
//has to be customized 
        maxWidth:30,
        maxHeight: 30,
        fontSize: 100,
        fontWeight: 'bold',
        backgroundColor: 'green',
        position: 'absolute',
        
        

                //borderBottomEndRadius: 80
            },

    image: {
//image must have style with heihjt and width - otherwise it folds
        height: 350,
        width: 350
    }
});

export default IndexScreen;