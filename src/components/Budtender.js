import React from 'react';
import { View, StyleSheet, Text, Image } from "react-native";
//import { Context } from '../context/ReportContext';// import can get access to our context

const Budtender = ({budname})=>{
    
       return (
        <View>
        <Text style={styles.container}>{budname}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
//image must have style with heihjt and width - otherwise it folds
        height: 200,
        width: 300
    }, // later can add images of budtenders

    container: {
        fontSize: 20,
        borderRadius: 5,// rounded corners
        marginHorizontal: 15,
        marginBottom: 10,
        flexDirection: 'row'
    }
});

export default Budtender;