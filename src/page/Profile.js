import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { Header } from 'react-native-elements';

export class Profile extends Component {
    render() {
        return (
        <View style={{ flex: 1, }}>
     
            <Button
              onPress={()=>{this.props.navigation.navigate('History')}}
              title="Go to History"
            />
        </View>
        )
    }
}

export default Profile
