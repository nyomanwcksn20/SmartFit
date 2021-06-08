import React, { Component } from 'react'
import { FlatList,Image,StyleSheet,ScrollView,Text, View, TouchableOpacity } from 'react-native'
import avatar from "../asset/avatar.jpg";
import barbel from "../asset/barbel.png";
import yoga from "../asset/yoga.png";
import fitnesstest from "../asset/fitnesstest.jpg";
export class Home extends Component {

  render() {
    return (
      
      <View style={{ flex: 1, }}>

        <View style={{ margin: 10,}}>
            <View style={{flexDirection:"row"}}>
                <Image source={avatar} style={styles.imgprofile} />
                <View style={styles.txtprofile}>
                    <Text style={{ fontSize: 20}}>Hallo, NamaUser</Text>
                </View>
            </View>
        </View>

          <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('Fitness')}}> 
           <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image source={fitnesstest} style={styles.img} />
            </View>
          </TouchableOpacity>

          <ScrollView>
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
    </View>
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