import React, { Component } from 'react'
import { Image,StyleSheet,ScrollView,Text, View, TouchableOpacity } from 'react-native'
import barbel from "../asset/barbel.png";
import yoga from "../asset/yoga.png";

export class Home extends Component {
  render() {
    return (
      
      <ScrollView style={{ flex: 1, }}>
          <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('Fitness')}}> 
          <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image source={{uri:'https://i.pinimg.com/originals/30/7b/f5/307bf50af25dfdf4d9052476923aed44.jpg'}} style={styles.img} />
          </View>
          </TouchableOpacity>
        <View style={styles.container}>

          <TouchableOpacity style={styles.box}  onPress={()=>{this.props.navigation.navigate('Profile')}}>
            <View style={styles.inner}>
            <Image source={yoga} style={styles.imgbtn}/>
              <Text style={{color:"white",margin:10}}>Senam Lantai</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}  onPress={()=>{this.props.navigation.navigate('Profile')}}>
            <View style={styles.inner}>
              <Image source={barbel} style={styles.imgbtn}/>
              <Text style={{color:"white",margin:10}}>Angkat Barbel</Text>
            </View>
          </TouchableOpacity>

          

        </View>
    </ScrollView>
    )
  }
}

export default Home

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

  imgbtn: {
    margin: 10,
    width:100,
      height:100,
  }
})