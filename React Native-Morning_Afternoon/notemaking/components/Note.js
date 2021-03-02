

import React from "react";
import ViewNotes from './ViewNotes';
import { ImageBackground, View, StyleSheet, Text, TouchableTouchableNativeFeedback, Button } from "react-native";
import { ScrollView, TouchableNativeFeedback } from "react-native-gesture-handler";

const Note = ({  data, navigation, id ,del}) => {
    
    const remove = () => {
         del(id);
    };
    
    return (
        <View style={styles.container}>
            <ImageBackground source={{uri:"https://png.pngtree.com/thumb_back/fw800/back_our/20190617/ourmid/pngtree-paper-note-background-design-picture-image_128470.jpg"}} style={styles.backgroundImage} imageStyle={{ borderRadius: 10 }}>
        <TouchableNativeFeedback
            onPress={() =>
                navigation.navigate("AddNote", { data: data, id: id })
            }
            >
                    <Text style={styles.title}>{data.title}</Text>
                    <ScrollView onStartShouldSetResponder={() => true}>
                    <Text style={styles.source}>{data.desc}</Text>
                    </ScrollView>
        </TouchableNativeFeedback>
                    <View style={styles.delete}>
                        <Button title="Delete" color="red" onPress={remove} />
                    </View>
                </ImageBackground>
            </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        padding: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    source: {
        fontSize: 16,
        color: "black",
        fontWeight: "500",
        padding: 5,
        height:100


    },
    backgroundImage: {
        width: "100%",
        height: "100%",

    },
    container: {
        width: "90%",
        marginRight: "5%",
        marginLeft: "5%",
        height: 190,
        borderRadius: 10,
        marginBottom:"7%"
    },
    delete:
    {
        width:"16%",
        alignSelf:"flex-end",
        margin:5,
        flexWrap:"wrap-reverse",


    }
})

export default Note;