import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, View } from 'native-base';
//import { Button, ListItem  } from 'react-native-elements';

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
/*
  const renderItem = ({ item }) => {
   
      return (
        <ListItem >
          <Left />
          <Body style={{ marginRight: 40 }}>
            <Text style={{ fontWeight: "bold" }}>
              {item.title}
            </Text>
          </Body>
          <Right >
            <Text> {item.content.text} </Text>
          </Right>
        </ListItem>
      );
  };


  ---
// not working. some logic error..

  <FlatList
        data={lines}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
            <ListItem >
              <Left />
              <Body style={{ marginRight: 40 }}>
                <Text style={{ fontWeight: "bold" }}>
                  {item.title}
                </Text>
              </Body>
              <Right >
                <Text> {item.content.text} </Text>
              </Right>
            </ListItem>
          )
        }
      />

      // just text is working.. native base..
      //need to check little by little..
*/
  
    return (
      
<Container>
<Header>
<Text> Report is Ready!</Text>
</Header>
<Content>
  <List>
    <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
      <Left>
        <Text>Simon Mignolet</Text>
      </Left>
      <Right>
      <Text>SimMig</Text>
      </Right>
    </ListItem>
    <ListItem >
     <Left>
        <Text>Nathaniel Clyne</Text>
      </Left>
      <Right>
      <Text>NatCly</Text>
      </Right>
    </ListItem>
    </List>
        </Content>
      </Container>
    );

};

export default TestUI;