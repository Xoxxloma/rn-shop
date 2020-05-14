import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export const MyBarCodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Requesting for camera permission</Text>
      </View>
      )
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFill, styles.container]}
      >
        <View style={styles.layerTop} />
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused} />
          <View style={styles.layerRight} />
        </View>
        <View style={styles.layerBottom} />
      </BarCodeScanner>

      {scanned && (
        <TouchableOpacity
          onPress={() => setScanned(false)}
          style={styles.rescanIconContainer}
        >
          <Image
            source={require('../../assets/rescan.png')}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

const opacity = "rgba(0, 0, 0, .7)";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  layerTop: {
    flex: 2,
    backgroundColor: opacity,
  },
  layerCenter: {
    flex: 2,
    flexDirection: "row",
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity,
  },
  focused: {
    flex: 10,
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity,
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity,
  },
  rescanIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
});
