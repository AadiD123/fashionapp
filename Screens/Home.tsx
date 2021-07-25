import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';

export function HomeScreen() {
  return (
    <SafeAreaView>
      <Text
        style={{
          marginTop: 10,
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 50,
        }}>
        Fittr
      </Text>
      <Text style={styles.TextStyle}>My Profile</Text>
      <View style={styles.container}>
        <View style={styles.SquareShapeView}>
          <Image
            style={styles.ImageStyle}
            source={require('../assets/widget1.jpg')}
          />
        </View>
      </View>

      <Text style={styles.TextStyle}>My Recent Fits </Text>
      <View style={styles.container}>
        <View style={styles.SquareShapeView}>
          <Image
            style={styles.ImageStyle}
            source={require('../assets/widget2.jpg')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  SquareShapeView: {
    marginTop: 10,
    width: 120 * 3,
    height: 170,
    backgroundColor: '#00BCD4',
    borderRadius: 30,
  },

  RectangleShapeView: {
    marginTop: 10,
    width: 120 * 2,
    height: 200,
    backgroundColor: '#FFC107',
  },

  ImageStyle: {
    opacity: 0.7,
    borderRadius: 30,
    width: 360,
    height: 170,
  },

  TextStyle: {
    marginLeft: 35,
    marginTop: 40,
    fontWeight: '400',
    fontSize: 15,
  },
});
