import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from 'react-native';
import Constants from 'expo-constants';


import {app} from '../config/db';

//style
import styles from '../styles/style';

//Screen
import Register from './Register';

class Login extends React.Component {
constructor(props){
    super(props);
    this.state={
      email : '',
      password : '',
      error : '',
    }
  }

onLoginPress(){
  this.setState({error:''});
  const{email,password}= this.state;
  app.auth().signInWithEmailAndPassword(email,password)
  .then(()=>{
    this.setState({error:''});
    alert('Login Berhasil')
    this.props.navigation.navigate('Home');

  })
  .catch((e)=>{
    alert(e);
    this.setState({error:'Login Gagal'});
  })
}

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.text}>Selamat Datang, Silahkan Login</Text>

        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Masukkan Email"
            placeholderTextColor="gray"
             onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Masukkan Password"
            placeholderTextColor="gray"
            secureTextEntry = {true}
             onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.appButton}
            onPress ={this.onLoginPress.bind(this)}
            >
            <Text style={styles.appButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.appButton}
            onPress={() => {
              this.props.navigation.navigate('Register');
            }}>
            <Text style={styles.appButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}



export default Login;
