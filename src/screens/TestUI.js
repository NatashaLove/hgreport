import React, { Component } from 'react';
//import { Container, Header, Content, List, ListItem, Text, Left, Right } from 'native-base';
import { Button, ListItem  } from 'react-native-elements';

const TestUI = ({navigation})=> {

   const lines = [
    {
        id: 1,
        title: 'Name:              ',
        content: {
            "text": "Natasha"
          }
    },
    {
        id: 2,
        title: 'Total in drawer:    ',
        content: {
            "text": "mf"
          }
    },
    {
        id: 3,
        title: 'Salaries:           ',
        content: {
            "text": "dane"
          }
    },
    {
        id: 4,
        title: 'Taxes:              ',
        content: {
            "text": "suko"
          }
    }
  ];

   return ( // map-формула ниже с какой-то логич ошибкой- не загружается..
//en-elements is working - with button ex..
    <View>     
      {lines.map((item, i) => ( 
      //  i=item.id,
          <ListItem style={styles.text} 
            key={i}
            title={item.title}
            leftElement={item.content.text}
            bottomDivider
            
         />   
         ))};
        
        </View>  

   );

};

export default TestUI;