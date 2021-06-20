import React, { Component } from 'react'
import { Text, View, StyleSheet,ScrollView,Image} from 'react-native'
import food1 from "../asset/food1.jpg";

export class MakananSehat extends Component {
    render() {
        return (
            <ScrollView>
              <View style={styles.container}>
                <Image source={food1} style={styles.img} />

                <View>
                    <Text style={styles.tittle}>Pola Makan Sehat Memperbaiki Tubuh </Text>
                </View>

                <View>
                    <Text style={styles.txt}>
                    asdasdad asdasda as aaddd dsa asdasdas asdasdas dada sda adsas adasdasada adasd asdasdasda asdasdasd asdasdasd asdasdasd
                    asdasdad asdasda as aaddd dsa asdasdas asdasdas dada sda adsas adasdasada adasd asdasdasda asdasdasd asdasdasd asdasdasd
                    asdasdad asdasda as aaddd dsa asdasdas asdasdas dada sda adsas adasdasada adasd asdasdasda asdasdasd asdasdasd asdasdasd
                    asdasdad asdasda as aaddd dsa asdasdas asdasdas dada sda adsas adasdasada adasd asdasdasda asdasdasd asdasdasd asdasdasd
                    asdasdad asdasda as aaddd dsa asdasdas asdasdas dada sda adsas adasdasada adasd asdasdasda asdasdasd asdasdasd asdasdasd
                    asdasdad asdasda as aaddd dsa asdasdas asdasdas dada sda adsas adasdasada adasd asdasdasda asdasdasd asdasdasd asdasdasd
                    asdasdad asdasda as aaddd dsa asdasdas asdasdas dada sda adsas adasdasada adasd asdasdasda asdasdasd asdasdasd asdasdasd
                    </Text>
                </View>
              </View>
            </ScrollView>
        )
    }
}

export default MakananSehat


const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    img: {
        borderRadius: 10,
        marginTop: 10,
        height: 150,
        width: '95%',
    },
  
    txt: {
        marginTop:15,
        padding: 5,
        fontSize:18,
        borderWidth:1,
        borderRadius: 10,
    },

    tittle: {
        
        marginTop:15,
        padding: 5,
        fontWeight:'bold',
        fontSize:20,
    },

  })