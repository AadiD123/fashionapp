import React, { useState } from "react";
import { View, Image, SafeAreaView, StyleSheet } from "react-native";
export default function Datadisplay() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.size} source={require("../assets/slide1.jpg")} />
        <Image style={styles.size} source={require("../assets/slide2.jpg")} />
        <Image style={styles.size} source={require("../assets/slide3.jpg")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  size: {
    width: 250,
    height: 200,
    marginTop: 10,
  },
});
