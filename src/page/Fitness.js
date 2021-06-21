import React, { Component } from 'react'
import { FlatList,Image,StyleSheet,ScrollView,Text, View, TouchableOpacity } from 'react-native'
import barbel from "../asset/barbel.png";
import yoga from "../asset/yoga.png";
import { StatusBar } from 'expo-status-bar';
export class Fitness extends Component {
    render() {
        return (
            <View style={{ flex: 1,paddingTop:30 }}>
            <StatusBar style="auto" />
            
            <ScrollView>
            <View style={styles.container}>

              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Profile')}}>
                <View style={styles.box}>
                <Image source={yoga} style={styles.imgbtn}/>
                  <Text style={styles.txt}>Senam Lantai</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AngkatBeban')}}>
                <View style={styles.box1}>
                  <Image source={barbel} style={styles.imgbtn}/>
                  <Text style={styles.txt}>Angkat Barbel</Text>
                </View>
              </TouchableOpacity>

            </View>
          </ScrollView>
            </View>
        )
    }
}

export default Fitness

const styles = StyleSheet.create({
    container: {
      width:'100%',
      height:'85%',
      padding:5,
     
    },
  
    box: {
      flex:1,
      margin:5,
      borderRadius:10,
      backgroundColor:'tomato',
      alignItems: 'center',
      justifyContent: 'center'
    },

    box1: {
      flex:1,
      margin:5,
      borderRadius:10,
      backgroundColor:'steelblue',
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    imgbtn: {
      margin: 10,
      width:75,
      height:75,
    },

    txt:{
      color:"white",
      margin:10,
      fontSize:18
  }
  })