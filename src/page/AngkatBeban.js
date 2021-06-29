import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

export function AngkatBeban() {
    
        return (
          
          <WebView style={styles.container}
    
          userAgent="Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
          originWhitelist={['*']}
          allowsInlineMediaPlayback
          bounces={true}
          source={{
            uri: "https://tensorflowuhuy123.herokuapp.com/", //URL of your redirect site
          }}
          startInLoadingState
          scalesPageToFit
          javaScriptEnabled={true}
          mediaPlaybackRequiresUserAction={false}
          />
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
