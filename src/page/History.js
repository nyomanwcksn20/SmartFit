import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { Header } from 'react-native-elements';

export class History extends Component {
    render() {
        return (
    <View style={{ flex: 1, }}>
          
      <Button
        onPress={()=>{this.props.navigation.navigate('Profile')}}
        title="Go to Profile"
      />
    </View>
        )
    }
}

export default History
