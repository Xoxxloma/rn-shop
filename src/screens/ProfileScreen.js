import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { THEME } from "../theme";

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri:
            "https://i.kym-cdn.com/photos/images/facebook/001/566/686/65f.jpg",
        }}
      />
      <View style={styles.buttons}>
        <Button title="Sign in" color={THEME.MAIN_COLOR}/>
        <Button title="Sign up" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  img: {
    alignSelf: "center",
    width: 150,
    height: 150,
    borderRadius: 60,
  },
  buttons: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
