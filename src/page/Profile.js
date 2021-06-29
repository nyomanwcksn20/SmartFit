import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { FlatList,Image,StyleSheet,Text, View, TouchableOpacity } from 'react-native'
import avatar from "../asset/avatar.jpg";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dataFlatList:{}
    }
}

    render() {
        return (
            <View style={{ flex: 1,paddingTop:30,backgroundColor:"#242320" }}>
            <StatusBar style="auto" />

                <View style={styles.container}>
                    <Image source={avatar} style={styles.imgprofile} />
                    <View>
                        <Text style={styles.txtprofile}>NamaUser</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.txttitle}>Basic Profile</Text>
                    <Text style={styles.txt}>Name</Text>
                    <Text style={styles.txt}>Birth Date</Text>
                    <Text style={styles.txt}>Height</Text>
                    <Text style={styles.txt}>Weight</Text>
                </View>

                <View style={{marginTop:20}}>
                    <Text style={styles.txttitle}>Private Information</Text>
                    <Text style={styles.txt}>Email</Text>
                    <Text style={styles.txt}>Phone Number</Text>
                    <Text style={styles.txt}>Gender</Text>
                </View>

                <View style={{marginTop:20}}>
                    <TouchableOpacity>
                        <Text style={styles.txtlink}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.txtlink}>Change Password</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:20}}>
                    <Text style={styles.txttitle}>About</Text>
                    <TouchableOpacity>
                        <Text style={styles.txt}>Help</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.txt}>Privacy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.txt}>Terms of Service</Text>
                    </TouchableOpacity>
                </View>
        </View>
        )
    }
}

export default Profile


const styles = StyleSheet.create({
    container: {
      margin:10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    imgprofile: {
        borderRadius: 50,
        marginTop: 5,
        width:75,
        height:75, 
    },
  
    txtprofile: {
        marginTop: 5,
        fontSize: 20,
        color:'white'
    },

    txttitle:{ 
        backgroundColor: '#42403b',
        paddingTop:2,
        paddingBottom:2,
        paddingLeft:5,
        marginTop: 5,
        fontSize: 18,
        color:'white'
    },

    txt:{ 
        backgroundColor: '#5e5d5c',
        paddingTop:2,
        paddingBottom:2,
        paddingLeft:5,
        marginBottom: 1,
        fontSize: 18,
        color:'white'
    },

    txtlink:{ 
        color:'#0e75a1',
        paddingTop:2,
        paddingBottom:2,
        paddingLeft:5,
        marginTop: 5,
        fontSize: 18,
    }
  })