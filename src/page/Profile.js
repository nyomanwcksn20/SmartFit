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
            <View style={{ flex: 1,paddingTop:30 }}>
            <StatusBar style="auto" />
            
            <View style={{ margin: 10,}}>
                <View style={{flexDirection:"row"}}>
                    <Image source={avatar} style={styles.imgprofile} />
                    <View style={styles.txtprofile}>
                        <Text style={{ fontSize: 20}}>NamaUser</Text>
                    </View>
                </View>
            </View>

            {/* <View>
                <FlatList
                    data={this.state.dataFlatList}
                    keyExtractor={item=>parseInt(item.id)}
                    renderItem={({item})=>(
                        <View style={{borderWidth:5,borderColor:"red",flexDirection:"row",margin:5}}>
                            <Image style={{width:100,height:100}}
                                source={{uri:`http://192.168.100.88:8080/laporan/image/${item.image}`}}
                            />
                            <View style={{flexDirection:"column",alignSelf:"center"}}>
                                <Text>Angkat Barbel : {item.status}</Text>
                                <Text>Senam Lantai : {item.jam}</Text>
                            </View>
                        </View>
                    )}
                />
            </View> */}
        </View>
        )
    }
}

export default Profile


const styles = StyleSheet.create({
    container: {
      width:'100%',
      height:'85%',
      padding:5,
      flexDirection:'row',
      flexWrap:'wrap',
    },
  
    box: {
      width:'50%',
      height:'50%',
      padding:5,
    },
  
    inner: {
      flex:1,
      backgroundColor:'dimgray',
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    img: {
      borderRadius: 10,
  
        marginTop: 5,
        width:"95%",
        height:150, 
    },
  
    imgprofile: {
      borderRadius: 50,
        marginTop: 5,
        width:75,
        height:75, 
    },
  
    txtprofile: {
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:10, 
    },
  
    imgbtn: {
      margin: 10,
      width:100,
        height:100,
    }
  })