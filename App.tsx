import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import CustomCarousel from "./Carousel";
import { StatusBar, SafeAreaView, View } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
// const Stack = createStackNavigator();
// import Display from "./Pages/Display";

import Tabs from "./Components/Tabs";

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Display" component={Display} />
      </Stack.Navigator> */}
      <Tabs />
    </NavigationContainer>
  );
}
