import React, { useState, useRef } from "react";
import {
  View,
  SafeAreaView,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { THEME } from "../theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default () => {
  const carouselItems = [
    {
      uri: "https://i.kym-cdn.com/photos/images/facebook/001/566/686/65f.jpg",
    },
    {
      uri: "https://www.pngmart.com/files/11/Sad-Pepe-The-Frog-PNG-Transparent.png",
    },
    {
      uri: "https://dota-blog.ru/wp-content/uploads/2020/01/8aiz3ud.jpg",
    },
    {
      uri: "https://lh3.googleusercontent.com/proxy/ZNl3Fuhsm_h7Vr_e8zZYMkm6kGES9rn0IckHjp3osHrYIce9dc4fstTufsbm_TIPONTCBbaIzMcg4uev_pWHUeP6k4-tfJJnrPxisFfDWOQStzuZ_e0w7Xc7qGwMo3uoBc-gAf8ygc10xglkaZzAFVins0hLPO8X4XTr6sPEtaQYgoAoNMml-m2HlFxW_A",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const _renderItem = ({ item }) => {
    return (
      <Image
        style={{
          width: "100%",
          height: 300,
        }}
        source={{ uri: item.uri }}
      />
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: THEME.WHITE_COLOR }}>
      <View style={{ flexDirection: "row" }}>
        <Carousel
          layout={"default"}
          ref={carouselRef}
          data={carouselItems}
          inactiveSlideOpacity={0.1}
          inactiveSlideScale={0.5}
          containerCustomStyle={{ overflow: 'visible' }}
          contentContainerCustomStyle={{ overflow: 'visible' }}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          renderItem={_renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
          loop={true}
          
          // autoplay={true}
        />
      </View>
      <View style={styles.containerPagination}>
        <Pagination
          dotsLength={carouselItems.length}
          activeDotIndex={activeIndex}
          containerStyle={styles.paginationContainer}
          dotColor={THEME.MAIN_COLOR}
          dotStyle={styles.paginationDot}
          inactiveDotColor={"lightgrey"}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.7}
          carouselRef={carouselRef}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    paddingTop: 7,
    paddingBottom: 1,
    backgroundColor: THEME.WHITE_COLOR
  },
  paginationDot: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    marginHorizontal: 2,
  },
  containerPagination: {
    width: "100%",
    height: 20,
    backgroundColor: THEME.WHITE_COLOR
  },
});
