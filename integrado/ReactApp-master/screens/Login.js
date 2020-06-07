import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert
} from 'react-native';

export default class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      nombre  : '',
      password: ''
    }
  }
    static navigationOptions = {
    title: 'Iniciar sesión',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#2f95dc',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  comprobarLogin(){
    let nombre = this.state.nombre;
    let password = this.state.password;
    const {navigate} = this.props.navigation;

    fetch('http://localhost:3000/usuaris?userName='+nombre+'&contrasenya='+password)
    .then((respuesta) => {
        if (respuesta.ok) {
          
            return respuesta.json();
            
        } else {
          
            console.log("Error conectando a http://localhost:3000");
        }
    })
    .then(respuestaJSON => {
      console.log(respuestaJSON);
        if(respuestaJSON.length<1){
          alert("Email o contraseña incorrecta");
        }else {
          navigate('Inicio', {name: nombre});
          
          
        }
    })
    .catch(error => {
        console.log("Error de red: " + error);
    });
  }

  
  render() {

    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
            <TextInput style={styles.titu}
              placeholder="REMEMBERTHAT"
              placeholderTextColor='#FFFFFF'
              editable={false}
              />
        <View style={styles.inputContainer}>
        
          <TextInput style={styles.inputs}
              placeholder="Usuario"
              placeholderTextColor='#000000'
              keyboardType="email-address"
              onChangeText={(nombre) => this.setState({nombre})}/>
        </View>
        
        <View style={styles.inputContainer}>
                
          <TextInput style={styles.inputs}
              placeholder="Contraseña"
              secureTextEntry={true}
              placeholderTextColor='#000000'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
        onPress={() => {this.comprobarLogin()}}>
          <Text style={styles.loginText}>Iniciar sesión</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => navigate('Registro')}>
          <Text style={styles.registerText}>Registrarse</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E5151',
  },
  inputContainer: {
      borderBottomColor: 'black',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:40,
      paddingBottom:10,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
 
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center',
  },
  titu:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    textDecorationLine: 'underline',
  },

  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#000000",
    borderRightWidth: 5,
    borderLeftWidth: 5,
    color:'#daf87d',
  },
  loginText: {
    color: 'white',
    fontSize: 15,
  },
  registerText: {
    color: '#ffffff',
    fontSize: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFDFDF',
    padding: 10
  },
})
