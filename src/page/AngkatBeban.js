import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

export function AngkatBeban() {
    const [showWebView, setShowWebView] = React.useState(false);
    React.useEffect(() => {
      const fn = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        console.log(status);
        if (status === 'granted') {
          setShowWebView(true);
        }
      };
  
      fn();
    }, []);
    if (!showWebView) {
      return (
        <View>
          <Text>Grant Permission first</Text>
        </View>
      );
    }
    
    
        return (
          
                 <WebView source={{ uri: 'https://tensorflowuhuy123.herokuapp.com/'}} style={{ marginTop: 100 }}/>
    
        )
    
}

export default AngkatBeban

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
  });
