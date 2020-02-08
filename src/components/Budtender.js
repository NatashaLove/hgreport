import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const Budtender = ({budname}, {navigation})=>{


    return <View style={styles.container}>
        <TouchableOpacity
         onPress={()=> navigation.navigate('Create')}
        > 
        <Text>{budname}</Text>
        
        </TouchableOpacity>
    </View>

};

const styles = StyleSheet.create({
    image: {
//image must have style with heihjt and width - otherwise it folds
        height: 200,
        width: 300
    }, // later can add images of budtenders

    container: {
        borderRadius: 5,// rounded corners
        marginHorizontal: 15,
        marginBottom: 10,
        flexDirection: 'row'
    }
});

export default Budtender;