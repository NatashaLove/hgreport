import React, { useContext} from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { Context } from '../context/ReportContext';
import { Button } from 'react-native-elements';
const IndexScreen = ({navigation}) => {

   // const {state, getReports}= useContext(Context);

    return <View style={styles.container}>
       
       
       <View style={{width:110, marginTop:20, alignSelf:'center'}}>
        <Button 
            buttonStyle={styles.button1}
            title="CREATE REPORT"
            raised

            onPress={()=> navigation.navigate('Create')}
        />
       </View>

        <Image style={styles.image}
             source={require('../../assets/hg.jpeg')}>
        </Image>
        <View style={{width:110, marginTop:20, alignSelf:'center'}}>
        <Button 
            buttonStyle={styles.button2}
            raised={true}
            title="GET REPORTS"
                  
            //backgroundColor= 'green'
           // titleStyle={{ color: 'pink' }}
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

    button1: {
        //! button doesn't have styles.prop!
        //has to be customized 
               
                width: "90%", 
                paddingVertical: 5, 
                maxWidth:90,
                height: 70,
              //  marginVertical: 5,
            
                borderRadius:35,
                alignSelf:'center',
                fontSize: 40,
                fontWeight: 'bold',
                backgroundColor:'rgb(45,120,75)'      
               
             //borderBottomEndRadius: 80
            },
        
    button2: {
//! button doesn't have styles.prop!
//has to be customized 
       
        width: "90%", 
        paddingVertical: 5, 
        maxWidth:90,
        height: 70,
        //marginVertical: 5,
        borderRadius:35,
        alignSelf:'center',
        fontSize: 40,
        fontWeight: 'bold',
        backgroundColor:'rgb(120,0,60)'       
       
     //borderBottomEndRadius: 80
    },

    image: {
//image must have style with heihjt and width - otherwise it folds
        height: 350,
        width: 350,
        paddingVertical:1
    }
});

export default IndexScreen;