import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Image, Button } from "react-native-elements";
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { THEME } from "../theme";
import { addToShoppingCart } from "../slices/itemsSlice";

export const CategoriesItem = ({ route, navigation }) => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  const id = route.params.item.productId;
  const item = items.find((i) => i.productId === id);

  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{item.title}</Text>
      <Image style={styles.img} source={{ uri: item.primaryImageUrl }} />
      <Text style={styles.price}>Price: {item.priceRetail} rub</Text>
      <Button
        buttonStyle={styles.btn}
        containerStyle={styles.container}
        icon={
          <FontAwesome
            name="shopping-cart"
            size={15}
            color="white"
            style={{ marginRight: 5 }}
          />
        }
        title="Add to cart"
        onPress={() => dispatch(addToShoppingCart(item))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    paddingVertical: 20,
  },
  title: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  img: {
    width: "100%",
    height: 200,
    marginVertical: 15,
  },
  price: {
    fontWeight: "bold",
    fontSize: 25,
    paddingLeft: 15,
  },
  container: { width: "50%", alignSelf: "center", marginVertical: 10 },
  btn: { backgroundColor: THEME.MAIN_COLOR },
});
