import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Heading from "../components/Heading";
import ListItemSeperator from "../components/ListItemSeperator"
import StartTrip from "../components/StartTrip";
import colors from "../components/colors";
import { wp, hp } from "../config/Responsive";

export default function SaveTripScreen() {
  return (
    <View style={styles.container}>
    <Heading  icon='menu' title='Saved Trips' headed={styles.headed} />
    <StartTrip head='Festac' middle='7.00am' header='Obalande'
      avater={require("../../assets/cruise.png")} motor='Toyota Camry'
      seats='5 seats' naira='N500' begin='Activate Trip' end='Delete Trip'
      container={styles.contain} Seat={styles.seat} price={styles.naira} carText={styles.car}
      />
     <ListItemSeperator itemSeperator={styles.line} />
     <StartTrip head='Festac' middle='7.00am' header='Obalande'
      avater={require("../../assets/cruise.png")} motor='Toyota Camry'
      seats='5 seats' naira='N500' begin='Activate Trip' end='Delete Trip'
      cancel={styles.cancel} untouch={styles.untouch}
      Seat={styles.seat} price={styles.naira} carText={styles.car}
      />
      <TouchableOpacity style={styles.touch} onPress={() =>console.log('Cancel')}>
        <Text style={styles.text}>Add New Saved Trip</Text>
      </TouchableOpacity>
      <ListItemSeperator itemSeperator={styles.lines} />
    </View>
  );
}

const styles = StyleSheet.create({
car:{
  color:colors.newBlack
},  
cancel:{
  alignSelf:'center',
  fontSize:12,
  color:colors.danger,
  borderColor:colors.danger,
  },
contain: {
  marginTop:hp(34),
},
container: {
  flex: 1,
},
headed:{
  left:wp(33)
},
line: {
  marginTop: wp(13)
},
lines: {
  marginTop: wp(19),
  alignSelf:'center',
  height:hp(5), 
  width:wp(135), 
  backgroundColor:colors.black
},
naira:{
  color:colors.newBlack
},
seat:{
  color:colors.newBlack
},
text:{
  fontSize:17,
  fontWeight:'600',
  lineHeight:22,
  color:colors.white
},
touch:{  
  marginTop:hp(255),
  alignSelf:'center',
  alignItems:'center',
  justifyContent:'center',
  height:hp(50), 
  width:wp(343), 
  backgroundColor: colors.blue,  
  borderRadius: wp(5),
  },
 untouch:{
  borderColor: colors.danger,
}
});
