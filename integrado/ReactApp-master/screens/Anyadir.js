/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableHighlight, FlatList, TouchableOpacity, TextInput} from 'react-native';


export default class AddElement extends Component {
  constructor(props) {
    super(props)
    this.state ={
      documentJSON: undefined,
      datos: [],
      
    };
  }



render()
{
  
    return (
      <View style = {styles.container}> 
          
        <View>
            
            <TextInput style = {{underlinedColorAndroid: 'blue', borderWidth:2}}
              placeholder='Nombre'
              placeholderTextColor='#000000'
              maxLength = {32}
              keyboardType={"default"}
              onChangeText={(value) => this.setState({enom: value})}
              value={this.state.enom}
              >
            </TextInput>
            
            <TextInput style = {{underlinedColorAndroid: 'blue', borderWidth:2}}
              placeholder='Descripción'
              placeholderTextColor='#000000'
              keyboardType={"default"}
              onChangeText={(value) => this.setState({edescripcio: value})}
              value={this.state.edescripcio}
              >
            </TextInput>
            <TouchableOpacity style ={styles.boton}  onPress={()=> ((this.elePost(this.state.eid, this.state.enom, this.state.edescripcio)))}>
                        <Text style={styles.textboton}>Añadir</Text>       
            </TouchableOpacity> 

            <TouchableOpacity style ={styles.boton} onPress={()=> (this.props.navigation.navigate('Inicio'))}>
                    <Text style={styles.textboton}>Atrás</Text>       
            </TouchableOpacity>
        </View>    
      </View>
    );
      
}


elePost(eid, enom, edescripcio)
{
  var url = 'http://localhost:3000/elements/';
  var data = {
    id: eid,
    nom: enom,
    descripcio: edescripcio,
    
  };

  fetch(url, {
    method: 'PUT',
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
      alert("Elemento insertado correctamente: " + data.nom);
    })
    .catch(error => {

      console.log("Error de red " + error);
    });
    }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  comptador: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fonsTot: {
    flex: 10, 
  },
  cap: {
    flex: 1,
    borderWidth: 3,
    borderRadius: 3,
    backgroundColor:"#ffffff"
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
    backgroundColor:"#ffffff",
    
  },
  boton:{
    backgroundColor: "#000000",
    borderWidth: 3,
    padding: 10,
  },
  textboton:{
    color:"#ffffff",
    textAlign:"center",
  },
});