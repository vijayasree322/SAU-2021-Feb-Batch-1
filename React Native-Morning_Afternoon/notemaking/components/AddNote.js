
import React from "react";
import { useState } from "react";

import { View, StyleSheet, Button, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";


var uniqueid = (function(){
    var id=0;
    return function(){
        id+=1;
        return id;
    };
})();

const AddNote = ({ navigation }) =>
{
   
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [titleError, setTitleError] = useState();
    const [descError, setDescError] = useState();

    const save = () => {
     let note_id =  uniqueid();
        if (!title || !desc) {
            if (!title)
                setTitleError("Title cannot be empty");
            else
                setTitleError("");
            if (!desc)
                setDescError("Description cannot be empty");
            else
                setDescError("");
            return;
        }
       
        navigation.navigate("ViewNotes",{id:{note_id},title:{title},desc:{desc}} )
    }
   
    return (
        <View style={styles.container}>
            <View style={styles.mb30}>
                <Text style={styles.heading} >Title</Text>
                <TextInput placeholder="Title"  style={styles.textInputStyleText}  onChangeText={(text) => setTitle(text)}></TextInput>
                <Text style={styles.error}>{titleError}</Text>
            </View>
            <View style={styles.mb40}>
                <Text style={styles.heading} >Description</Text>
                <TextInput multiline={true}  numberOfLines={6}  placeholder="Description" style={styles.textInputStyleDesc} onChangeText={(text) => setDesc(text)}></TextInput>
                <Text style={styles.error}>{descError}</Text>
            </View>
            <View style={styles.addnote}>
                <Button title="Add Note"  onPress={save}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mb30: {
        marginBottom: 20,
        width: "100%",
        marginTop: "10%",
        alignItems: "center",
    },
    mb40: {
        marginBottom: 30,
        width: "100%",
        alignItems: "center",

    },
    container: {
        justifyContent:"flex-start",
        alignItems: "center",
        flex: 1
    },
    textInputStyleText: {
        borderColor: "purple",
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 20,
        padding: 5,
        width: "80%",
        textAlign: "center"
    },
    textInputStyleDesc: {
        borderColor: "purple",
        borderWidth: 2,
        borderRadius: 30,
        fontSize: 20,
        padding: 10,
        width: "80%",
        textAlign: "center",
        justifyContent: "flex-start",
        textAlignVertical: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: "600",
        marginVertical: 5
    },
    error:
    {
        color: "red"
    },
    addnote: {
        width: "80%",
    },
});
export default AddNote;
