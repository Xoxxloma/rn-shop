import React, {useEffect} from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../slices/itemsSlice";

export const CategoriesScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const CatItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Categories Item", {item})}>
        <Text style={styles.item}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CatItem item={item} />}
        keyExtractor={(item) => item.productId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  item: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    borderStyle: "solid",
    paddingVertical: 15,
    paddingLeft: 15,
  },
});
