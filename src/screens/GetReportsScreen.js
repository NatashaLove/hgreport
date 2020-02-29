import React, {useEffect, useContext} from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Button } from "react-native";
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

    return (
        <View>
            <Text>Get reports {console.log(state)}</Text>
        </View>
    );
};




//getReports(), console.log(state.getReports)






export default GetReportsScreen;