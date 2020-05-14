import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

export const RoomsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.item}>This is rooms item!</Text>
      <Text style={styles.item}>This is rooms item!</Text>
      <Text style={styles.item}>This is rooms item!</Text>
      <Text style={styles.item}>This is rooms item!</Text>
      <Text style={styles.item}>This is rooms item!</Text>
      <Text style={styles.item}>This is rooms item!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
padding: 10
  },
  item: {
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    borderStyle: "solid",
    paddingVertical: 15
  }
});