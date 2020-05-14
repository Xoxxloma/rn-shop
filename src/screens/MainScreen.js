import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  View,
  Button,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Card, Rating, AirbnbRating } from "react-native-elements";
import MyCarousel from "../Components.js/Carousel";
import Constants from "expo-constants";
import { THEME } from "../theme";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { MyIcons } from "../Components.js/Icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../slices/itemsSlice";

const items = [
  {
    title: "Sofa",
    img:
      "https://www.divan.ru/assets/thumb/shop_product/294014/x_ffffff_100_0_2018020910592110800_80.jpg",
  },
  {
    title: "Dinner stuff",
    img:
      "https://www.stolplit.ru/upload/resize_cache/iblock/a03/2048_1536_1/obedennaya_gruppa_modern_belaya.jpg",
  },
  {
    title: "Kitchen",
    img:
      "https://nonton.ru/wa-data/public/shop/products/72/72/7272/images/45203/45203.0x450@2x.jpg",
  },
  {
    title: "Bads",
    img:
      "https://pinskdrev.ru/web/files/imagick_cache/w1000h0t1/web/catalogfiles/catalog/offers/janetta_16_896_20gr_.jpg",
  },
  {
    title: "Tableware",
    img:
      "https://ae01.alicdn.com/kf/H1edd5f38789345c0bedb77ed82843780L/-.jpg_q50.jpg",
  },
  {
    title: "Armchairs",
    img:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dw6ffdb502/images/1090000/1097341.jpg",
  },
];
const windowWidth = Dimensions.get("window").width;

export const MainScreen = () => {

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <MyCarousel />
      </SafeAreaView>
      <MyIcons/>
      <ScrollView style={styles.itemsWrap} horizontal={true}>
        {items.map((item, i) => (
          <React.Fragment key={i}>
          <Card
            containerStyle={{
              width: windowWidth * 0.9,
              height: 300,
              borderRadius: 20,
              margin: 5,
            }}
            title={item.title}
            image={{ uri: item.img }}
            imageWrapperStyle={{ width: "80%", alignSelf: "center" }}
            imageStyle={{width: "100%", height: 150}}
          >
            <Text style={{ marginBottom: 10, alignSelf: "center" }}>
              The idea with React Native Elements.
            </Text>
            <Rating
              type="star"
              ratingCount={5}
              ratingColor={THEME.MAIN_COLOR}
              startingValue={3}
              showRating={false}
              imageSize={30}
            />
          </Card>
          </React.Fragment>
        ))}
      </ScrollView>
      <ScrollView style={styles.itemsWrap} horizontal={true}>
        {items.map((item, i) => (
          <TouchableNativeFeedback
            key={i + 10}
            background={TouchableNativeFeedback.Ripple(THEME.MAIN_COLOR, true)}
            useForeground={true}
          >
            <Card
              containerStyle={{
                width: windowWidth * 0.75,
                height: 280,
                borderRadius: 20,
              }}
              title={item.title}
              image={{ uri: item.img }}
              imageWrapperStyle={{ width: "100%", height: "auto" }}
            >
              <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements.
              </Text>
              <Rating
                type="heart"
                ratingCount={5}
                startingValue={2}
                imageSize={20}
                readonly
              />
            </Card>
          </TouchableNativeFeedback>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: THEME.WHITE_COLOR,
  },
  itemsWrap: {
    backgroundColor: THEME.WHITE_COLOR,
  },
});
