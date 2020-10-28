import React from "react";
import { View, Text, StyleSheet, image } from "react-native";
import Heading from "../components/Heading";
import Title from "../components/Title";
import ListItemSeperator from "../components/ListItemSeperator"
import StartTrippp from "../components/StartTrippp";
import colors from "../components/colors";
import { wp, hp } from "../config/Responsive";

export default function ThirdScheduledScreen() {
  return (
    <View style={styles.container}>
     <Heading  image={require("../../assets/Menu.png")}  title='Schedule' />
     <Title left='All' center='Scheduled' right='Completed' first={styles.first} third={styles.third} />
     <StartTrippp />
     <ListItemSeperator itemSeperator={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  first:{
    color:colors.gray,
    borderBottomWidth: 0, 
  },
  line: {
    marginTop: wp(13)
  },
  third:{
    borderBottomColor:colors.blue, 
    borderBottomWidth: 3, 
    width:90, 
    top:hp(3), 
    color:colors.blue 
  },
});
