import React, { useContext} from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Button, Image } from "react-native";
import { Context } from '../context/ReportContext';

const IndexScreen = ({navigation}) => {

   // const {state, getReports}= useContext(Context);

    return <View style={styles.container}>
        <Text style={styles.text}>Hello, HighGarden!</Text>
        <View style={styles.button}>
        <Button 
            title="CREATE REPORT"
            color='rgb(150,200,100)'
            borderRadius='55'
            fontWeight= 'bold'
            onPress={()=> navigation.navigate('Create')}
        />
        </View>

        <Image style={styles.image}
        source={require('../../assets/hg.jpeg')}>
        </Image>
        
       
              
        <View style={styles.button}>
        <Button style={styles.button}
            title="Get Reports"
            color='rgb(120,0,60)'
            borderRadius='55'
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
       
        width: "50%", 
        margin: 5, 
        maxWidth:70,
        maxHeight: 30,
        marginBottom: 10,
        borderRadius:55,
        alignSelf:'center',
        fontSize: 30,
        fontWeight: 'bold'
        
        

     //borderBottomEndRadius: 80
    },

    image: {
//image must have style with heihjt and width - otherwise it folds
        height: 350,
        width: 350
    }
});

export default IndexScreen;