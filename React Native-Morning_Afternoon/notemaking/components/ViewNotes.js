

import React from "react";
import Note from "./Note";
import AsyncStorage from "@react-native-community/async-storage";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

const ViewNotes = ({ route, navigation} ) =>{
   let  [data,setData] = useState([])
   let  notesList =[]
    if(!(typeof(route.params)==='undefined'))
    {
         const {id} = route.params;
         const {title} = route.params;
         const {desc} = route.params;
         //console.log("PROPS"+JSON.stringify(title.title)+" "+JSON.stringify(id.id));
         data.push({"id":JSON.stringify(id.id),"title":JSON.stringify(title.title) , "desc": JSON.stringify(desc.desc)})
         notesList = data.map((note, i) => <Note del={del}  data={note} navigation={navigation} id={i} key={i} />)
         
    }
    
 
 const getNotes = async () => {
    let notes = await AsyncStorage.getItem("notes");
    notes = JSON.parse(notes);
    data=notes;
 }
 
 useEffect(() => {
    getNotes()
}, [])

useEffect(() => {
    setNote()
},[data])

 const setNote = async () => {
    await AsyncStorage.setItem("notes", JSON.stringify(data));
    notesList = data.map((note, i) => <Note del={del()}  data={note} navigation={navigation} id={i} key={i} />)
 }
    const del = (id) => {
        let change = data;
        change.splice(id, 1);
        data=change;
        notesList = data.map((note, i) => <Note del={del}  data={note} navigation={navigation} id={i} key={i} />)
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.button} >
                <Button title="Add New" style={styles.addNew} onPress={() =>navigation.navigate("AddNote",{ data: {title: " ", desc: " " } })} />
            </View>
            <ScrollView style={{ marginTop: 50 }}>
          
                    {notesList.length === 0 ? <View style={styles.nonote} >
                    <Text style={styles.text} >No Notes Added</Text>
                </View> : notesList}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        marginHorizontal: 20,
        width: 150,
        height: 1,
        alignSelf: "flex-end",
        marginBottom:9,
    },
    nonote: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    text: {
        marginVertical: "70%"
    }

});
export default ViewNotes;