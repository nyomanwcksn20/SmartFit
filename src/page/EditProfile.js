import * as React from 'react';
import { Text, View,StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView,Button ,ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import {app} from '../config/db';
import {updateItem} from '../services/EditServices'

import styles from '../styles/style';

export default class AddProfile extends React.Component {
constructor (props){
  super(props);
  this.state = {
    nama : '',
    image : null,
    bb : '',
    tb : '',
    filePath : {}, //folder image
    upload : false //pengecekan upload file
  }
  this.handleSubmit = this.handleSubmit.bind(this);
}


async componentDidMount(){
  await Permissions.askAsync(Permissions.CAMERA_ROLL);
}




handlenama = (text) => {
  this.setState ({nama:text})
}

handletb = (text) => {
  this.setState ({tb:text})
}
handlebb = (text) => {
  this.setState ({bb:text})
}

handleSubmit = (text) => {
  addItem(this.state.nama,this.state.image,this.state.tb,this.state.bb)
  alert('Data Berhasil Disimpan, Silahkan Login')
   this.props.navigation.navigate('Login')
}

  render(){
    return(
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <ScrollView>
          <Text style={styles.titlePage}>Add News</Text>
          <View style={styles.containerInput}>
            <TextInput
              placeholder = 'Masukkan Judul'
              style = {styles.inputAddNews}
              onChangeText = {this.handleTitle}
              value = {this.state.title} />
          </View>

          <View style={styles.containerInput}>
            <TextInput
              placeholder = 'Masukkan Deskripsi'
              style = {styles.inputAddNews}
              multiline={true}
              numberOfLines={4}
              onChangeText = {this.handleDesc}
              value = {this.state.desc} />
          </View>

          <View style={styles.buttonPickImage}>
            <Button 
            title ='Choose File' 
            onPress = {this._pickImage}
             />
          </View>

           {this._maybeRenderImage()}
           {this._maybeRenderUploadingOverlay()}

          <View style={styles.buttonAddNews}>
            <Button
            title = 'Add News'
            onPress = {this.handleSubmit} />
          </View>

      </ScrollView>
      </KeyboardAvoidingView>
    )
  }
 // untuk loading
_maybeRenderUploadingOverlay = () => {
    if(this.state.uploading){
      return (
        <View style = {[
          StyleSheet.absoluteFill,
          {
              backgroundColor : 'rgba(0,0,0,0.4)',
              alignItems : 'center',
              justifyContent : 'center'
          },
        ]}>
       
            <ActivityIndicator color= '#fff' animating size='large' /> 
        </View>
      )
    }
  }

//mengecek image terupload
  _maybeRenderImage = () => {
    let {image} = this.state;
    if(!image || image == ''){
      return;
    }
    return(
      <View
      style = {{
        marginTop : 30,
        width : 250,
        borderRadius : 3,
        elevation : 2
      }}
      >

        <View
        style = {{
          borderTopRightRadius : 3,
          borderTopLeftRadius : 3,
          shadowColor : 'rgba(0,0,0,1)',
          shadowOpacity : 0.2,
          shadowOffset : {width: 4, height : 4},
          shadowRadius : 5,
          overflow : 'hidden'
        }}>
          <Image source = {{uri : image}} style = {{width:250,height:250}} />

        </View>

      </View>
    )
  }

  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing : true,
      aspect : [4,3]
    });
    this._handleImagePicked(pickerResult);
  };

  _handleImagePicked = async pickerResult => {
    try{
      this.setState({uploading : true})
      if(!pickerResult.cancelled){
        uploadUrl = await uploadImageAsync(pickerResult.uri, this.state.title);
        this.setState({image:uploadUrl});
      }
    } catch (e) {
      alert(e); 
    } finally {
      this.setState({uploading : false});
    }
  }

}

async function uploadImageAsync (uri,title){
  const blob = await new Promise ((resolve,reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
        resolve(xhr.response);
      };
      xhr.onerror = function(e){
        reject(new TypeError('Network Request Failed'));
      }
      xhr.responseType = 'blob';
      xhr.open('GET',uri,true);
      xhr.send(null);
    });


  const ref = app.storage().ref('/news_image').child(title);
  // const ref = app.storage().ref('/news_image').child('image' + title);
  const snapshot = await ref.put(blob);
  // blob.close();

  return await snapshot.ref.getDownloadURL();

}
