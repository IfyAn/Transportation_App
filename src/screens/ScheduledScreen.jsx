import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Heading from "../components/Heading";
import ListItemSeperator from "../components/ListItemSeperator"
import Title from "../components/Title";
import StartTrip from "../components/StartTrip";
import StartTripp from "../components/StartTripp";
import StartTrippp from "../components/StartTrippp";
import { wp, hp } from "../config/Responsive";


export default function ScheduledScreen() {
  return (
    <View style={styles.container}>
    <Heading  icon='keyboard-backspace' title='Schedule' />
     <Title left='All' center='Scheduled' right='Completed' />
     <StartTrip />
     <ListItemSeperator itemSeperator={styles.line} />
     <StartTripp />
     <ListItemSeperator itemSeperator={styles.line} />
     <StartTrippp />
     <ListItemSeperator itemSeperator={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    marginTop: wp(13)
  },
});
