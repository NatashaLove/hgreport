import React from 'react';
import { View, TouchableOpacity, StyleSheet } from "react-native";

const Budtender = (name)=>{


    return <View style={styles.container}>
        <Text>{name}</Text>
        <Image style={styles.image}>
            
        </Image>
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