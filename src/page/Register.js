import * as React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity,StyleSheet,KeyboardAvoidingView, Image } from 'react-native';
import Constants from 'expo-constants';

import { app } from '../config/db';
//style
// import styles from '../styles/style';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      conf_password: '',
    };
  }

  onSignUpPress() {
    if (this.state.password != this.state.conf_password) {
      alert('Password Tidak Sama');
      this.setState({password : '', conf_password : ''});
    } else {
      this.setState({ error: '' });
      const { email, password } = this.state;
      app
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ error: '' });
          alert('Register Berhasil, Silahkan Lengkapi Data User');
          this.props.navigation.navigate('AddProfile');
        })
        .catch((e) => {
          alert(e);
          this.setState({ error: 'Register Gagal' });
        });
    }
  }

  render() {
    return (
       <KeyboardAvoidingView style={styles.container} behavior="padding">

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../asset/icon.png')} style={styles.img} />
        </View>
        
        <Text style={styles.text}>Silahkan Register</Text>

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
            placeholder="Konfirmasi Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={(conf_password) => this.setState({ conf_password })}
            value={this.state.conf_password}
          />
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity activeOpacity={0.8}
         style={[styles.buttonContainer, styles.loginButton]}
          onPress = {this.onSignUpPress.bind(this)}
          >
            <Text style={styles.appButtonText}>Register</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity activeOpacity={0.8}
         style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => {
              this.props.navigation.navigate('Login');
            }}
          >
            <Text style={styles.appButtonText}>Batal</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

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

