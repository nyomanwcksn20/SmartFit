import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'
import { LoginAction } from '../Redux/Action'

LoginAction
 class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:""
        }
    }

    handleLogin(){
        axios.get('http://9db32c8c406a.ngrok.io/user/login/',{
            params:{
                username:this.state.username,
                password:this.state.password
            }
        })
        .then((response)=>{
            let data = response.data
            console.log(data)
            if (data !== ""){
                this.props.LoginAction(true,'isLogin')
                this.props.LoginAction(data, "dataUser")
                alert("Login Berhasil")
                this.props.navigation.navigate("Home")
            }else{
                alert("Username atau Password anda salah, silahkan login kembali")
                this.props.LoginAction(false,"isLogin")
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render() {
        return (
            <View style={{paddingTop:30 }}>
                <Text> Username </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({username:data})}}
                placeholder="Username"
                />

                <Text> Password </Text>
                <TextInput secureTextEntry={true}
                style={styles.input}
                onChangeText={(data)=>{this.setState({password:data})}}
                placeholder="Password"
                />

                <TouchableOpacity style={styles.button} onPress={()=>{this.handleLogin()}}><Text style={styles.title}>Login</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Registrasi")}}><Text style={styles.title}>Registrasi</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataMapping:state.LoginReducer
})

const mapDispatchToProps = {
    LoginAction, 

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
      },

      button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
      },
});