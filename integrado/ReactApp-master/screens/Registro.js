/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {StyleSheet,View,FlatList,Text,TextInput,TouchableOpacity} from 'react-native';


export default class Register extends Component {
  constructor(props) {
    super(props);
        this.state={
            documentJSON: undefined,
            datos: []
          
    }
  }  
   
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.fonsTot}>
          <View style={styles.arriba}>
            <TextInput style = {styles.botonera}
              placeholder='Nombre de usuario'
              placeholderTextColor='#000000'
              maxLength = {10}
              keyboardType={"default"}
              onChangeText={(value) => this.setState({uuserName: value})}
              value={this.state.uuserName}
              >
            </TextInput>
            <TextInput style = {styles.botonera}
              placeholder='Contraseña'
              placeholderTextColor='#000000'
              maxLength = {10}
              secureTextEntry={true}
              keyboardType={"Contraseña"}
              onChangeText={(value) => this.setState({ucontrasenya: value})}
              value={this.state.ucontrasenya}
              >
            </TextInput>
            <TextInput style = {styles.botonera}
              placeholder='Nombre'
              placeholderTextColor='#000000'
              maxLength = {10}
              keyboardType={"default"}
              onChangeText={(value) => this.setState({unom: value})}
              value={this.state.unom}
              >
            </TextInput>
          </View>
          <View style={styles.bajo}>
          <TouchableOpacity style ={styles.boton} onPress={()=> ((this.usuPost(this.state.uid, this.state.uuserName, this.state.ucontrasenya, this.state.unom)))}>
                    <Text style = {styles.textoBoton}>Aplicar</Text>       
          </TouchableOpacity> 
            <TouchableOpacity style ={styles.boton} onPress={()=> (this.props.navigation.navigate('Login'))}>
                    <Text style = {styles.textoBoton}>Atrás</Text>       
            </TouchableOpacity> 
          </View> 
        </View>
        );
      } 
usuPost(uid, uuserName, ucontrasenya, unom)
{
  var url = 'http://localhost:3000/usuaris/';
  var data = {
    id: uid,
    userName: uuserName,
    contrasenya: ucontrasenya,
    nom: unom
  };

  fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      
    }
  })
    .then((respuesta) => {
      if (respuesta.ok) {
        return respuesta.json();
      }
      else {
        console.log("Error haciendo el POST");
      }
    })
    .then(respuestaJSON => {
      console.log(respuestaJSON);
      alert("Post insertado correctamente " + data.userName + " " + data.nom);
    })
    .catch(error => {

      console.log("Error de red " + error);
    });
}
    }

const styles = StyleSheet.create({
  
    fonsTot: {
      flex: 10, 
      backgroundColor: '#5E5151',
    },
    cap: {
      flex: 1,
      borderWidth: 3,
      borderRadius: 3,
      backgroundColor:"#ffffff",
      alignItems: 'center',
    },
    arriba:{
      marginTop:30,
    },
    botonera:{
       borderWidth:2,
       height:45,
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       marginBottom:20,
       width:250,
       marginTop:10,
       borderRadius:30,
       alignItems:"center",
       borderBottomColor: 'black',
       backgroundColor: '#ffffff',
       marginLeft:80,
       textAlign:"center",
       fontSize:16,
    },
    textoBoton:
    {
      color:"#ffffff",
      textAlign:"center",

    },
    llista: {
      flex: 4,
      borderWidth: 3,
      borderRadius: 3,
      backgroundColor:"#ffffff"
    },
    botons: {
      flex: 2,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    componentEstil:{
      flex: 3,
      backgroundColor:"#ffffff"
    },
    bajo:{
      marginTop:120,
    },
    boton:{
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:10,
      marginTop:12,
      width:250,
      borderRadius:30,
      alignItems:"center",
      borderBottomColor: 'white',
      backgroundColor: '#000000',
      marginLeft:80,
      fontSize: 16,
    },
    
  
  });