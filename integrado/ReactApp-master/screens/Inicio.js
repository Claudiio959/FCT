/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableHighlight,Window, FlatList, TouchableOpacity, TextInput} from 'react-native';


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state ={
      documentJSON: [],
      datos: [],
      //name:this.props.navigation.getParam(name, undefined)
      
    };
    
  }

  
UNSAFE_componentWillMount()
{

  fetch('http://localhost:3000/elements')
    .then((resposta) => {
      if (resposta.ok) {
        console.log("En willmount");
        return resposta.json();
      } 
      else {
        console.log("Error conectado con la base de datos");
      }
    })
    .then((documentJSON) => this.setState({ datos: documentJSON }))
    .catch(error => {

      console.log("Error de red " + error);
    });



}



render()
{

  const { navigation } = this.props;



  if (this.state.datos.length === 0) {
    return (
      <View>
        <Text>
          Entrando
         </Text>

      </View>
    );
  }
  else {
    return (
      <View style = {styles.container}> 
          
        <View>
            <Text style = {styles.textHeader}>
                Bienvenido: {JSON.stringify(navigation.getParam('name'))}
            </Text>
        </View> 
        <View style = {styles.container}>
          
            <FlatList
            
            data ={this.state.datos}
            renderItem = {({item}) => 
            <View>  
                <Text style = {styles.textList}>{"Nombre: "}{item.nom}{"\n"}{"Descripción: "}{item.descripcio}{"\n"} </Text>

                <TouchableOpacity style ={styles.boton} onPress={()=> (this.props.navigation.navigate('Actualizar',{eid:item.id,onGoBack: () =>window.location.reload(false)}))}>
                    <Text style = {styles.textBoton1}>Cambiar</Text>       
                </TouchableOpacity>

                <TouchableOpacity style ={styles.boton} onPress={()=> ((this.deleteEle(item.id)))}>
                    <Text style = {styles.textBoton1}>Borrar</Text>       
                </TouchableOpacity> 
            </View>}/>

        </View>
        <View>
          <TouchableOpacity style ={styles.bajo} onPress={()=> (this.props.navigation.navigate('Anyadir'))}>
                    <Text style = {styles.textBoton}>Añadir lista</Text>       
          </TouchableOpacity> 
          <TouchableOpacity style ={styles.bajo} onPress={()=> (this.props.navigation.navigate('Login'))}>
                    <Text style = {styles.textBoton}>Atrás</Text>    
                    </TouchableOpacity>
          
        </View>
      </View>
    );
      } 
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

updateEle(eid, enom, edescripcio)
{
  
  var url = 'http://localhost:3000/elements/'+eid;
  var data = {
    id: eid,
    nom: enom,
    descripcio: edescripcio
   

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
        console.log("Error haciendo el UPDATE");
      }
    })
    .then(respuestaJSON => {
      console.log(respuestaJSON);
      alert("Usuario " + data.userName + " actualizado");
    })
    .catch(error => {
      console.log("Error de red " + error);
    });


}

deleteEle(eid)
{

  var url = 'http://localhost:3000/elements/'+eid;


  fetch(url, {
    method: 'DELETE',

  })

    .then((respuesta) => {
      let fori = JSON.parse(this.state.datos);
      fori=fori.filter(item=>item.id != eid)
      
      this.setState({
        datos:fori
      })

      if (respuesta.ok) {
        return respuesta.json();

      }
      else {
        console.log("Error haciendo el borrado");
      }

    })
    .then(respuestaJSON => {
      console.log(respuestaJSON);
      alert("Se ha borrado correctamente");

    })

    .catch(error => {

      console.log("Error de red " + error);
    });

  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E5151',
    color:'white',
  },
  bajo:{
    height:40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:9,
    width:250,
    height:45,
    borderRadius:30,
    alignItems:"center",
    borderBottomColor: 'white',
    backgroundColor: '#000000',
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
    backgroundColor:"#ffffff"
  },
  boton:{
    backgroundColor: "#ffffff",
    borderWidth: 3,
    padding: 10,
    color:'black',
    
  },
  textBoton:{
    color:"#ffffff",
    textAlign:"center",
  },
  textBoton1:{
    color:"#000000",
    textAlign:"center",
  },
  textHeader:{
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color:'white',
  },
  textList:{
    fontSize: 16,
    fontWeight: "bold",
    color:'white',
  },
  
  
});