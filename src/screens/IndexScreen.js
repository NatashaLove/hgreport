import React, { useContext} from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Button } from "react-native";
import {withNavigation} from 'react-navigation';
import Budtender from '../components/Budtender';
import { Context } from '../context/ReportContext';

//flatlist with 3 names (budtenders)
//array create on index screen here- eachelement wrap- with toachable opacity -
//to navigate onto personal screen with form- when it saved- loads "showscreen" with all reports..
//need to be able save the file or send somewhere else..
//create a component in separate file with a name in touchable opacity (like searchbar)*3 names

const IndexScreen = ({budname, navigation}) => {

    const {state, getReports}= useContext(Context);

    return <View>
        <Text>Hello hg!</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Create', {budname})} > 
        <Budtender budname = "Art"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Create')} > 
        <Budtender budname = "Dane"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Create')} > 
        <Budtender budname = "Natasha"/>
        </TouchableOpacity>

        <Button style={styles.button}
            title="Get Reports"
            onPress={()=> getReports() }
            
            />
    </View>
};

const styles = StyleSheet.create({

    button: {
        //?
                maxWidth:10,
                maxHeight: 10
            },

    image: {
//image must have style with heihjt and width - otherwise it folds
        height: 200,
        width: 300
    }
});

export default IndexScreen;