import React, { useContext} from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Button, ImageBackground } from "react-native";
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

    return <ImageBackground style={styles.container}
    source={require('../../assets/hg.jpeg')}>
        <Text style={styles.text}>Hello, HighGarden!</Text>
        <Button style={styles.button}
            title="CREATE REPORT"
            onPress={()=> navigation.navigate('Create')}
        />
              

        <Button style={styles.button}
            title="Get Reports"
            onPress={()=>navigation.navigate('Reports') }
            
            />
    </ImageBackground>
};

const styles = StyleSheet.create({

    text: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf:'center',
        color: 'green'
    },

    container: {
        //fontSize: 20,
        borderRadius: 55,// rounded corners
        marginHorizontal: 25,
        //marginBottom: 60,
        flex: 10,
        justifyContent: 'space-between',
        marginTop: 50,
        marginBottom: 100,
        
       // flexDirection: 'column'
    },

    button: {
        //?     
        maxWidth:30,
        maxHeight: 30,
        fontSize: 100,
        fontWeight: 'bold',
        backgroundColor: 'green',
        position: 'absolute',
        opacity: 50

                //borderBottomEndRadius: 80
            },

    image: {
//image must have style with heihjt and width - otherwise it folds
        height: 200,
        width: 300
    }
});

export default IndexScreen;