import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export class AngkatBeban extends Component {
    render() {
        return (
          
                 <WebView source={{ uri: 'https://tensorflowuhuy123.herokuapp.com/'}} style={{ marginTop: 100 }}/>
    
        )
    }
}

export default AngkatBeban
