import React, {useState, useCallback} from 'react';
import { Button, Image, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import ImagePicker from "react-native-image-picker";

export default class Upload extends React.Component{
  handleChoosePhoto = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, response => {
      console.log("response", response);
    });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
    );
  }
}

