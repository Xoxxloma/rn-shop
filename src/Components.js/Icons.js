import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { THEME } from "../theme";

export const MyIcons = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrap}>
      <TouchableOpacity
        opacity={0.3}
        style={styles.icon}
        onPress={() => navigation.navigate("Rooms")}
      >
        <Ionicons name="logo-apple" size={80} color="green" />
        <Text>Murray</Text>
      </TouchableOpacity>
      <TouchableOpacity opacity={0.3} style={styles.icon}>
        <Ionicons name="ios-american-football" size={80} color="cyan" />
        <Text>introduce me</Text>
      </TouchableOpacity>
      <TouchableOpacity opacity={0.3} style={styles.icon}>
        <Ionicons name="ios-build" size={80} color="lightgray" />
        <Text>as Pepeger</Text>
      </TouchableOpacity>
      <TouchableOpacity opacity={0.3} style={styles.icon}>
        <Ionicons name="ios-call" size={80} color="lightblue" />
        <Text>I thought</Text>
      </TouchableOpacity>
      <TouchableOpacity opacity={0.3} style={styles.icon}>
        <Ionicons name="ios-cut" size={80} color="orange" />
        <Text>all my life</Text>
      </TouchableOpacity>
      <TouchableOpacity opacity={0.3} style={styles.icon}>
        <Ionicons name="ios-finger-print" size={80} color="chocolate" />
        <Text>was tragedy</Text>
      </TouchableOpacity>
      <TouchableOpacity opacity={0.3} style={styles.icon}>
        <Ionicons name="ios-flask" size={80} color="#bafc03" />
        <Text>But now</Text>
      </TouchableOpacity>
      <TouchableOpacity opacity={0.3} style={styles.icon}>
        <Ionicons name="ios-mic" size={80} color="#fc03f0" />
        <Text>i realize</Text>
      </TouchableOpacity>
      <TouchableOpacity opacity={0.3} style={styles.icon}>
        <Ionicons name="ios-pizza" size={80} color="#03fcdb" />
        <Text>It is MEME</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",

    backgroundColor: THEME.WHITE_COLOR,
  },
  icon: {
    flexDirection: "column",
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
