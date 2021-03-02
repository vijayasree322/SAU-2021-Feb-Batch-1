import React,{useState,useEffect} from "react";
import AsyncStorage from "@react-native-community/async-storage";
import {Text,TextInput,View,StyleSheet,Button,ImageBackground} from "react-native";
import { ScrollView, TouchableNativeFeedback } from "react-native-gesture-handler";

const Login = ({navigation}) => {
    const [username,setUserName] = useState("");
    const [error,setError] = useState("");
    
    useEffect(()=>{
        isAuthorized()
    },[])

    const isAuthorized = async () => {
        try{
       const username = await AsyncStorage.getItem('username');
        console.log(username);
        if(username){
            navigation.navigate("ViewNotes");
        }
       }
      catch(e)
      {
          console.log(e);
      }
   }

    const logMeIn = () =>{
        try
        {
        if(!username){
            setError("Please enter a valid username");
            return;
        }
        setError("");
        console.log(username);
        AsyncStorage.setItem('username',username);
        navigation.navigate("ViewNotes");
    }
    catch(e){ console.log(e);}
    }
    return(
        <View style={styles.container}> 
       <ImageBackground source={{uri:"https://png.pngtree.com/thumb_back/fw800/back_our/20190617/ourmid/pngtree-paper-note-background-design-picture-image_128470.jpg"}} style={styles.container}>
            <Text style={styles.loginTextStyle}>Login</Text>
            <TextInput style={styles.textInputStyle} placeholder="enter username.." onChangeText={ (text) => setUserName(text)}/>
            <Text style={styles.error}>{error}</Text>
            <Button title="Log in" onPress={logMeIn} />
            </ImageBackground>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    loginTextStyle:{
        fontSize:25,
        fontWeight:"700",
        marginVertical:20
    },
    backgroundImage:{
        width:"100%",
        height:"100%"
    },
    textInputStyle:{
        borderColor: "blue",
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 20,
        padding: 5,
        width: "60%",
        textAlign:"center"
    },
    error:
    {
        color:"red",
        marginBottom: 20,
    }
})
export default Login;