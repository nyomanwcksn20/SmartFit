import React, { Component } from 'react'
import { FlatList,Image,StyleSheet,ScrollView,Text, View, TouchableOpacity } from 'react-native'
import avatar from "../asset/avatar.jpg";
import food1 from "../asset/food1.jpg";
import banner from "../asset/banner.jpeg";
import health from "../asset/health.jpg";
import suplemen from "../asset/suplemen.jpg";
import { StatusBar } from 'expo-status-bar';

export class Home extends Component {

  render() {
    return (
      
      <View style={{ flex: 1,paddingTop:30, backgroundColor:"#242320"}}>
      <StatusBar style="auto" />
        <View style={{ margin: 10,}}>
            <View style={{flexDirection:"row"}}>
                <Image source={avatar} style={styles.imgprofile} />
                <View style={styles.txtprofile}>
                    <Text style={{ fontSize: 20,color:'white'}}>Hallo, NamaUser</Text>
                </View>
            </View>
        </View>

          
        <View style={{alignItems:'center',justifyContent:'center'}}>
          <Image source={banner} style={styles.img} />
        </View>

        <View style={{ marginTop: 10,marginRight: 10,marginLeft: 10 }}>
          <Text style={{ fontSize: 20,color:'white'}}>Tips</Text>
        </View>

            <ScrollView >

              <TouchableOpacity style={styles.box}  onPress={()=>{this.props.navigation.navigate('MakananSehat')}}>
                <View style={{ margin: 10,}}>
                  <View style={{flexDirection:"row"}}>
                    <Image source={food1} style={styles.imgbtn} />
                    <View style={styles.txtbtn}>
                      <Text style={{ fontSize: 20,color:'white'}}>Makanan Sehat</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.box1}  onPress={()=>{this.props.navigation.navigate('HidupSehat')}}>
                <View style={{ margin: 10,}}>
                  <View style={{flexDirection:"row"}}>
                    <Image source={health} style={styles.imgbtn} />
                    <View style={styles.txtbtn}>
                      <Text style={{ fontSize: 20,color:'white'}}>Hidup Sehat</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.box2}  onPress={()=>{this.props.navigation.navigate('Suplemen')}}>
                <View style={{ margin: 10,}}>
                  <View style={{flexDirection:"row"}}>
                    <Image source={suplemen} style={styles.imgbtn} />
                    <View style={styles.txtbtn}>
                      <Text style={{ fontSize: 20,color:'white'}}>Suplemen</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            
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
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    padding:1,
    backgroundColor:'tomato',
    borderRadius: 10,
  },

  box1: {
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    padding:1,
    backgroundColor:'steelblue',
    borderRadius: 10,
  },

  box2: {
    margin:10,
    padding:1,
    backgroundColor:'seagreen',
    borderRadius: 10,
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
      height:180, 
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

    txtbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:30, 
},

  imgbtn: {
      width:150,
      height:75, 
  }
})