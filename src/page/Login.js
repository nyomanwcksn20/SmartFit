import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from 'react-native';
//import Constants from 'expo-constants';
import logo from '../asset/icon.png';

import * as Google from 'expo-google-app-auth';
//import Expo from "expo"

import { app } from '../config/db';

// //style
// import styles from '../styles/style';

//Screen
//import Register from './Register';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  onLoginPress() {
    this.setState({ error: '' });
    const { email, password } = this.state;
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ error: '' });
        alert('Login Berhasil');
        this.props.navigation.navigate('Home');
      })
      .catch((e) => {
        alert(e);
        this.setState({ error: 'Login Gagal' });
      });
  }

signInGoogle = async () => {
    console.log("Login.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId: '727501526959-vo8pcna5v2ee6ptn77n5oobp1n5jqpg2.apps.googleusercontent.com',
        androidClientId: '727501526959-vo8pcna5v2ee6ptn77n5oobp1n5jqpg2.apps.googleusercontent.com',
        webClientId:'727501526959-vo8pcna5v2ee6ptn77n5oobp1n5jqpg2.apps.googleusercontent.com'
      });

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to Home");
        navigation.navigate("Home", { user });
      }
    } catch (error) {
      console.log("Login.js 19 | error with login", error);
    }
  };

//   signInWithGoogleAsync() = async () => {
//   try {
//     const result = await Google.logInAsync({
//       // androidClientId: YOUR_CLIENT_ID_HERE,
//       iosClientId: '',
//       scopes: ['profile', 'email'],
//     });

//     if (result.type === 'success') {
//       this.props.navigation.navigate('Home');
//       return result.accessToken;
//     } else {
//       return { cancelled: true };
//     }
//   } catch (e) {
//     return { error: true };
//   }
// }
  

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={logo} style={styles.img} />
        </View>

        <Text style={styles.text}>Selamat Datang, Silahkan Login</Text>

        <View style={styles.inputContainer}>
          <Image
            style={[styles.icon, styles.inputIcon]}
            source={{
              uri: 'https://img.icons8.com/windows/32/000000/email-sign.png',
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Masukkan Email"
            placeholderTextColor="gray"
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={[styles.icon, styles.inputIcon]}
            source={{
              uri:
                'https://img.icons8.com/material-rounded/24/000000/password.png',
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Masukkan Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={this.onLoginPress.bind(this)}>
            <Text style={styles.appButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => {
              this.props.navigation.navigate('Register');
            }}>
            <Text style={styles.appButtonText}>Register</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.label}>Or Login With</Text>
        </View>

        <TouchableOpacity
          style={[styles.buttonContainergoogle, styles.googleButton]}
          onPress={this.signInGoogle.bind(this)}
          >
          <View style={styles.socialButtonContent}>
            <Image
              style={styles.icon}
              source={{
                uri: 'https://img.icons8.com/fluent/48/000000/google-logo.png',
              }}
            />
            <Text style={styles.loginText}> Sign in with Google </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}



export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0E0E6',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 150,
    borderRadius: 30,
  },
  buttonContainergoogle: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#3498db',
  },
  fabookButton: {
    backgroundColor: '#3b5998',
  },
  googleButton: {
    backgroundColor: '#454141',
  },
  loginText: {
    color: 'white',
  },
  restoreButtonContainer: {
    width: 250,
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  socialButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    color: '#FFFFFF',
    marginRight: 5,
  },
  text: {
    color: 'black',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    margin: 8,
    fontSize: 13,
    textAlign: 'center',
  },
  img: {
    borderRadius: 10,
    marginTop: 5,
    width: 100,
    height: 100,
  },
});
