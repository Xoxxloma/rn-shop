import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const FavoritesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>This is Favorites Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
