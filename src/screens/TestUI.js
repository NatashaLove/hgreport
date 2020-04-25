import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from "react-native";
import { Container, Header,  Card, CardItem, Content, List, ListItem, Text, Left, Right } from 'native-base';
//import { Button, ListItem  } from 'react-native-elements';

const TestUI = ({initialValues})=> {

  const content= initialValues.lines.content;
  const title = initialValues.lines.title;
  const dataArr = initialValues.lines;

  return (
    <FlatList
      data={dataArr}
      keyExtractor={item => item.title}
      renderItem={({item}) => {
        return (
          <ListItem>
            <Left>
              <Text>{item.title}</Text>
            </Left>
            <Right>
              <Text>{item.content.text}</Text>
            </Right>
          </ListItem>
        );
      }}
    />
  );

};

TestUI.defaultProps= {
  initialValues: {
    lines : [
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
    ]
  }
};

const styles = StyleSheet.create({
  text: {
      // fontStyle: 'italic',
       fontWeight: 'bold',
       fontSize: 20,
       //alignSelf:'center',
       color: 'black',
       justifyContent:'space-evenly',
       borderWidth:1,
       borderColor: 'blue'
       
   }
  });

export default TestUI;