import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../Components.js/AppHeaderButton";
import { MainScreen } from "../screens/MainScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { ShoppingCartScreen } from "../screens/ShoppingCartScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { CategoriesScreen } from "../screens/Catalog/CategoriesScreen";
import { RoomsScreen } from "../screens/Catalog/RoomsScreen";
import { CategoriesItem } from '../screens/CategoriesItem';
import { THEME } from "../theme";
import { SearchBar } from "react-native-elements";
import { Platform, StyleSheet } from "react-native";
import { BarcodeScreen } from "../screens/BarcodeScreen";
import { Icon, withBadge } from 'react-native-elements'
import { useSelector } from "react-redux";




const FavIcon = withBadge(3, {status: 'primary'})(MaterialIcons)
const ProfileIcon = withBadge(null, {status: "success"})(MaterialCommunityIcons)

//-------- Catalog page -----------//

const CatalogTab = createMaterialTopTabNavigator();
const CatalogStack = createStackNavigator();

const CatalogTabs = () => {
  return (
    <CatalogTab.Navigator
      tabBarOptions={{
        indicatorStyle: { backgroundColor: THEME.MAIN_COLOR },
      }}
    >
      <CatalogTab.Screen name="Categories" component={CategoriesScreen} />
      <CatalogTab.Screen name="Rooms" component={RoomsScreen} />
    </CatalogTab.Navigator>
  );
};

const Catalog = () => {
  return (
    <CatalogStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: THEME.WHITE_COLOR,
        headerStyle: { backgroundColor: THEME.MAIN_COLOR },
        headerTitleAlign: "center",
      }}
    >
      <CatalogStack.Screen
        name="Categories"
        component={CatalogTabs}
        options={({ navigation }) => ({
          header: () => (
            <SearchBar
              platform={Platform.OS === "android" ? "android" : "ios"}
              containerStyle={{ backgroundColor: THEME.MAIN_COLOR }}
              inputContainerStyle={{ paddingTop: 15 }}
              inputStyle={{ color: THEME.WHITE_COLOR }}
              clearIcon={{ color: THEME.WHITE_COLOR }}
              cancelIcon={{ color: THEME.WHITE_COLOR }}
              searchIcon={
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                  <Item
                    title="to barcode"
                    iconName="ios-barcode"
                    onPress={() => navigation.navigate("Barcode")}
                  />
                </HeaderButtons>
              }
              placeholder="Search"
            />
          ),
        })}
      />
      <CatalogStack.Screen name="Barcode" component={BarcodeScreen} />
      <CatalogStack.Screen name="Categories Item" component={CategoriesItem} />
    </CatalogStack.Navigator>
  );
};

//-------- Catalog page -----------//

//-------- Shop page -----------//

const ShoppingCartStack = createStackNavigator();

const ShopCart = () => {
  return (
    <ShoppingCartStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: THEME.WHITE_COLOR,
        headerStyle: { backgroundColor: THEME.MAIN_COLOR },
        headerTitleAlign: "center",
      }}
    >
      <ShoppingCartStack.Screen
        name="ShoppingCart"
        component={ShoppingCartScreen}
      />
    </ShoppingCartStack.Navigator>
  );
};

//-------- Shop page -----------//

//-------- Favorites page -----------//
const FavoritesStack = createStackNavigator();

const Favorites = () => {
  return (
    <FavoritesStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: THEME.WHITE_COLOR,
        headerStyle: { backgroundColor: THEME.MAIN_COLOR },
        headerTitleAlign: "center",
      }}
    >
      <FavoritesStack.Screen name="Favorites" component={FavoritesScreen} />
    </FavoritesStack.Navigator>
  );
};
//-------- Favorites page -----------//

//-------- Profile page -----------//
const ProfileStack = createStackNavigator();

const Profile = () => {
  return (
    <ProfileStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: THEME.WHITE_COLOR,
        headerStyle: { backgroundColor: THEME.MAIN_COLOR },
        headerTitleAlign: "center",
      }}
    >
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};
//-------- Profile page -----------//
const BotTab = createMaterialBottomTabNavigator();

export function MyStack() {
  const shoppingCart = useSelector(state => state.items.shoppingCart)
  const ShopIcon = withBadge(shoppingCart.length, {status: 'error', hidden: shoppingCart.length === 0 ? true : false})(FontAwesome)
  return (
    <NavigationContainer>
      <BotTab.Navigator
        shifting={false}
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: THEME.MAIN_COLOR }}
      >
        <BotTab.Screen
          name="Main"
          component={MainScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" color={color} size={26} />
            ),
          }}
        />
        <BotTab.Screen
          name="Catalog"
          component={Catalog}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="list-ul" color={color} size={26} />
            ),
          }}
        />
        <BotTab.Screen
          name="ShoppingCart"
          component={ShopCart}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ color }) => (
              <ShopIcon type="FontAwesome" name="shopping-cart" color={color} size={26} />
            ),
          }}
        />
        <BotTab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({ color }) => (
              <FavIcon type="MaterialIcons"  color={color} name="favorite"  size={26} />
            ),
          }}
        />
        <BotTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <ProfileIcon name="account" color={color} size={26} />
            ),
          }}
        />
      </BotTab.Navigator>
    </NavigationContainer>
  );
}
