import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Platform, Button, Image, FlatList, TouchableOpacity, Dimensions} from 'react-native'
import { connect } from 'react-redux'
//import ImagePicker from 'react-native-image-picker';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
 //import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
// import { Picker } from '@react-native-picker/picker';
// import {ActionSheet, Root} from "native-base";

   
 class Registrasi extends Component  {
    
    constructor (props){
        super(props);
        this.state={
             nama:"",
             tempat:"",
             ttl:"",
             tinggiBadan:"",
             beratBadanAwal:"",
             hp:"",
             email:"",
             username:"",
             password:"",
            //  image:"https://www.dumetschool.com/images/fck/indah_columns_08_13_2016_01.png",
        }
    }

    // componentDidMount(){
    //   // this.getPerission();
    // }

    simpanData () {
      axios.post('http://9850a83eca96.ngrok.io/user/AddUser/', this.state)
      .then((response)=>{
         alert(response.data)
         this.props.navigation.navigate('Login')
      })
      .catch((error)=> {
        console.log ("Error woy" + error)
      })
    }

    // async getPerission () {
    //   if (Platform.OS !== 'web') {
    //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //     console.log(status)
    //     if (status !== 'granted') {
    //       alert('Sorry, we need camera roll permissions to make this work!');
    //     }
    //   }
    // }

    // async pickImage(){
    //   let result = await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.All,
    //     allowsEditing: true,
    //     aspect: [4, 3],
    //     quality: 1,
    //   });
  
    //   console.log(result);
  
    //   if (!result.cancelled) {
    //     this.setState({image:result.uri})
    //   }
    // }
    
    render() {
        return (
           
            <ScrollView style={{paddingTop:30 }}> 
                <Text> Nama </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({nama:data})}}
                placeholder="Nama"
                />

                <Text> Tempat Lahir </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({tempat:data})}}
                placeholder="Tempat Lahir"
                />

                <Text> Tanggal Bulan dan Tahun  </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({ttl:data})}}
                placeholder="Tanggal Bulan dan Tahun"
                />

                <Text> Tinggi Badan </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({tinggiBadan:data})}}
                placeholder="Tinggi Badan"
                />

                <Text> Berat Badan </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({beratBadanAwal:data})}}
                placeholder="Berat Badan Saat Ini"
                />

                <Text> No Hp </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({hp:data})}}
                placeholder="Number HandPhone"
                />

                <Text> Email </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({email:data})}}
                placeholder="Email"
                />

                <Text> Username </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({username:data})}}
                placeholder="Username"
                />

                <Text> Password </Text>
                <TextInput 
                style={styles.input}
                onChangeText={(data)=>{this.setState({tempat:data})}}
                placeholder="Tempat"
                />

                <TouchableOpacity style={styles.button} onPress={()=>{this.simpanData()}}><Text>Submit</Text></TouchableOpacity>
               
                  {/* <Button title="Pick an image from camera roll" onPress={()=>{this.pickImage()}} />
                  <Text> </Text>
                  <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200, alignSelf:'center' }} />
                  <TouchableOpacity style={styles.button} onPress={()=>{}}><Text style={styles.title}>Submit</Text></TouchableOpacity> */}

               

            </ScrollView>
          
            
            ) 
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Registrasi)
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