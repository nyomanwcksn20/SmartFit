import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  ActivityIndicator,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { app } from '../config/db';
import { addItem } from '../services/AddServices';
import logo from '../asset/icon.png';

export default class AddProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      image: null,
      tb: '',
      bb: '',
      filePath: {}, //folder image
      upload: false, //pengecekan upload file
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }

  handleNama = (text) => {
    this.setState({ nama: text });
  };

  handleTb = (text) => {
    this.setState({ tb: text });
  };
  handleBb = (text) => {
    this.setState({ bb: text });
  };

  handleSubmit = (text) => {
    addItem(this.state.nama, this.state.image, this.state.tb, this.state.bb);
    alert('Data Berhasil Disimpan, Silahkan Login');
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.container} >

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={logo} style={styles.img} />
        </View>

          <Text style={styles.titlePage}>Isi Profile</Text>
          <View style={styles.containerInput}>
            <TextInput
              placeholder="Masukkan Nama Anda"
              style={styles.inputAddProfile}
              onChangeText={this.handleNama}
              value={this.state.nama}
            />
          </View>

          <View style={styles.containerInput}>
            <TextInput
              placeholder="Masukkan Tinggi Badan Anda"
              style={styles.inputAddProfile}
              onChangeText={this.handleTb}
              value={this.state.tb}
            />
          </View>

          <View style={styles.containerInput}>
            <TextInput
              placeholder="Masukkan Berat Badan Anda Sekarang"
              style={styles.inputAddProfile}
              onChangeText={this.handleBb}
              value={this.state.bb}
            />
          </View>

          <TouchableOpacity style={styles.buttonPickImage} onPress={this._pickImage} >
            <Text style={styles.text}>Ambil Foto</Text>
          </TouchableOpacity>

          {this._maybeRenderImage()}
          {this._maybeRenderUploadingOverlay()}

          <TouchableOpacity style={styles.buttonAddNews} onPress={this.handleSubmit}>
            <Text style={styles.text}>Simpan Profile</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
  // untuk loading
  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: 'rgba(0,0,0,0.4)',
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}>
          <ActivityIndicator color="#fff" animating size="large" />
        </View>
      );
    }
  };

  //mengecek image terupload
  _maybeRenderImage = () => {
    let { image } = this.state;
    if (!image || image == '') {
      return;
    }
    return (
      <View
        style={{
          marginTop: 30,
          width: 250,
          borderRadius: 3,
          elevation: 2,
        }}>
        <View
          style={{
            borderTopRightRadius: 3,
            borderTopLeftRadius: 3,
            shadowColor: 'rgba(0,0,0,1)',
            shadowOpacity: 0.2,
            shadowOffset: { width: 4, height: 4 },
            shadowRadius: 5,
            overflow: 'hidden',
          }}>
          <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
        </View>
      </View>
    );
  };

  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    this._handleImagePicked(pickerResult);
  };

  _handleImagePicked = async (pickerResult) => {
    try {
      this.setState({ uploading: true });
      if (!pickerResult.cancelled) {
        uploadUrl = await uploadImageAsync(pickerResult.uri, this.state.nama);
        this.setState({ image: uploadUrl });
      }
    } catch (e) {
      alert(e);
    } finally {
      this.setState({ uploading: false });
    }
  };
}

async function uploadImageAsync(uri, nama) {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      reject(new TypeError('Network Request Failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

//folder lokasi gambar firebase
  const ref = app.storage().ref('/users_image').child(nama);
  // const ref = app.storage().ref('/news_image').child('image' + title);
  const snapshot = await ref.put(blob);
  // blob.close();

  return await snapshot.ref.getDownloadURL();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0E0E6',
  },

  containerButton: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
  },

  containerInput: {
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

  input: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  text: {
    fontSize: 15,
    color: '#fff',
    paddingTop:8,
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  appButton: {
    elevation: 8,
    backgroundColor: "black",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 5,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
// Start add news

buttonPickImage : {
    height: 35,
    marginBottom: 20,
    width: 150,
    borderRadius: 30,
    backgroundColor: '#3498db',
    color: 'white'
},

buttonAddNews: {
  height: 35,
  marginBottom: 20,
  width: 150,
  borderRadius: 30,
  backgroundColor: '#3498db',
  color: 'black'
},

imageAddProfile : {
  width:250,
  height:250
},

buttonAddProfile : {
  width:150,
  margin:10
},

inputAddProfile : {
  width:250
},
//end
titlePage :{
  color: 'black',
  padding: 10,
  marginBottom: 5,
  fontSize: 20,
  fontWeight: 'bold',
},
img: {
    borderRadius: 10,
    marginTop: 5,
    width: 100,
    height: 100,
}
});