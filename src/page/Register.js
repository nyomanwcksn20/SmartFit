import * as React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import { app } from '../config/db';
//style
import styles from '../styles/style';

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
          alert('Register Berhasil, Silahkan Login');
          this.props.navigation.navigate('AddProfile');
        })
        .catch((e) => {
          alert(e);
          this.setState({ error: 'Login Gagal' });
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Selamat Datang, Silahkan Register</Text>

        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Masukkan Email"
            placeholderTextColor="gray"
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Masukkan Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Konfirmasi Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={(conf_password) => this.setState({ conf_password })}
            value={this.state.conf_password}
          />
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity activeOpacity={0.8} style={styles.appButton}
          onPress = {this.onSignUpPress.bind(this)}
          >
            <Text style={styles.appButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
