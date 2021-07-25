import React, { useState } from "react";
import { View, Image, SafeAreaView, StyleSheet } from "react-native";
export default function Datadisplay() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.size} source={require("../assets/shirt.jpg")} />
        <Image style={styles.size} source={require("../assets/jacket.jpg")} />
        <Image style={styles.size} source={require("../assets/boots.jpg")} />
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
