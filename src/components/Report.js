import React, { useState, useContext, useEffect} from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Context } from '../context/ReportContext';
import Form from '../components/Form';

const Report = ({ initialValues, onPress})=> {
   //const [title, setTitle]= useState(initialValues.title);
   //const [content, setContent]= useState(initialValues.content);
  // const [dataArr, setDataArr] = useState(initialValues.lines);
   const {state} = useContext(Context);

    //id=0;

    const content= initialValues.lines.content;
    const title = initialValues.lines.title;
    const dataArr = initialValues.lines;

   // useEffect(() => {populateReportForm([id, title, content]
     //   )}, []);

   const setDataArr=(id, title, content)=> {
            reportID=dataArr.id;
            for(let i=0; i<dataArr.length; i++){
                const makeArrID=i+1;
                
                if(id===makeArrID){
                    return [
                        dataArr[i].id=id,
                        dataArr[i].title=title,
                        dataArr[i].content=content
                    ]
                }
            }
        };

        const getDataArr=()=>{
            return [
                dataArr[i].id = id,
                dataArr[i].title = title,
                dataArr[i].content = content
    
            ]
           
        };
        
//This function is used to show the selected array element on Button onPress :
SampleFunction=(item)=>{
 
    Alert.alert(item);
  
}
const render=(dataArr)=> {
  
    return (
         <View style={styles.container}>
          
            { dataArr.map((item, key)=>(
             <Text key={key} style={styles.label} onPress={ this.SampleFunction.bind(this, item) }> { item } </Text>)
             )}
          
        </View>
     );
}
        
  
    return (

        
    <View >
        <FlatList 
        data={dataArr}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (                
            <View style={styles.container}>
                <Text style={styles.label} > {item.title} {item.content}  </Text>
                
            </View>
                                  
        )}
    //!!! NEED to add a "+"(add subform)below- to add text input in case of new consignment
        />
        <Button style={styles.button}
            title="Confirm" 
            
                // onPress={()=> onSubmit(dataArr, reportID) }//}console.log()
        />
    </View>
    );
        
};

Report.defaultProps = {
    initialValues : {
        lines : [
            //initial values
                {
                    id: 1,
                    title: 'Date:',
                    content: ''
                },
                {
                    id: 2,
                    title: 'Total in drawer:',
                    content: ''
                },
                {
                    id: 3,
                    title: 'Salaries:',
                    content: ''
                },
                {
                    id: 4,
                    title: 'Taxes:',
                    content: ''
                },
                {
                    id: 5,
                    title: 'Rent:',
                    content: ''
                },
                {
                    id: 6,
                    title: 'HG Money:',
                    content: ''
                },
                {
                    id: 7,
                    title: 'MM:',
                    content: ''
                },
                {
                    id: 8,
                    title: 'PP:',
                    content: ''
                },
                {
                    id: 9,
                    title: 'Poole Farms Flower:',
                    content: ''
                },
                {
                    id: 10,
                    title: 'Notes:',
                    content: ''
                },
                {
                    id: 11,
                    title: 'Name:',
                    content: ''
                }
        ],
        
    }
    
};


const styles = StyleSheet.create({
    input: {
        fontSize:18,
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal:5,//mRgins on both sides
        marginBottom:5,
        paddingHorizontal:5, //to get a little bit spacing between the text and the border
        flex: 0//takes the rest of the space
        },
    label: {
        fontSize:20,
        marginBottom:5,
        marginHorizontal:5,

        flexDirection: 'row' // makes the label and the text show on the same line

    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }

});

export default Report;
