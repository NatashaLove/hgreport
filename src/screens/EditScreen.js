import React, { useContext, useState } from 'react';//useState here to control TextInput
import { StyleSheet } from 'react-native';//TextInput for the user to input text
import { Context } from '../context/ReportContext';// import can get access to our context
import ReportForm from '../components/ReportForm';

const EditScreen = ({navigation})=> {
    //the id came from ShowScreen-after clicking the edit/pencil
    const title = navigation.getParam ('title');// to use directly 'title' var instead of blogPost.id
    const { state, editReport } =useContext(Context);
    //const {editBlogPost} = useContext(Context);
//iterate through arr blogposts/state- all the posts and find one with the same I.D. -
//as navigation.getparam (I.D) and assign it to const blogPost (current to edit):
    const report = state.find(
        (report) => report.title('Date') === title // instead of === navigation.getParam('id')
    );
   
//add in some callback func to our editscreen and pass it down into blogpostform(separate component/file)-
// and then we will come back to this <BlogPostForm> and make sure -
//-that we take that updated/edited title and content and pass it to some function -
//coming from our 'Context' object inside of editScreen:
    return (
//existing title and content values should be taken from -const blogPost - above (by id),
//and passed down as some starting initial form values to our form:        
        <ReportForm 
            initialValues={{ lines: report}}
//blogpostform loads with data from the post            
            onSubmit={(lines) => {
//after submitting it changes
            //console.log(title, content, id);
// to have no errors before taking the same id for updated post- should delete the old post:
            //deleteBlogPost(blogPost.id);//in case it navigated to index screen and created 2 posts w/the same id
    
            editReport(lines, () => navigation.pop());//navigation.navigate('Show', { id}));//last one is callback ()=>
//if instead of navigating to the show screen-We want to go back to previous screen:
//navigation.pop func returns the user to the previous screen.

            }}

        />
    );
};

const styles = StyleSheet.create({});

export default EditScreen;

//{navigation.getParam('id')}//like that edit screen knows -
//-0exactly what it is supposed to be editing. -inside <Text></Text>
/*
these lines are transferred from inside of the component to the blogpostform:
//whenever we call useState- we pass in the initial default value inside-
//our initial default value for title is this blogpost title:
    const [title, setTitle] = useState(blogPost.title);
//when we first initialize our 'state' property, the title variable inside [] is going to be =
//=whatever the title is of the blogpost that we're trying to edit

    const [content, setContent] = useState(blogPost.content);

//this code (direct call) was deleted from return:
(
        <View>
            <Text> Edit Title: </Text>
            <TextInput value={title} onChangeText= {(newTitle) => setTitle(newTitle) } />
        </View>
    );    
*/