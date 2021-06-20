import React, { Component } from 'react'
import { Text, View, StyleSheet,ScrollView,Image} from 'react-native'
import health from "../asset/health.jpg";

export class HidupSehat extends Component {
    render() {
        return (
            <ScrollView>
              <View style={styles.container}>
                <Image source={health} style={styles.img} />

                <View>
                    <Text style={styles.tittle}>Pola Hidpu Sehat</Text>
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

export default HidupSehat


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