import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ApText from "./ApText";
import AppButton from "./AppButton";
import Styles from "../config/styles"
import colors from "./colors";

export default function StartTripp() {
  return (
    <View style={Styles.Containerr}>
            <View style={Styles.detaill}>
                <ApText textStyle={{fontWeight:'bold'}}>Festac</ApText>
                <Text >6.30am</Text>
                <Text style={{fontWeight:'bold'}}>Ojota</Text>
            </View>
            <View style={Styles.detaills}>
                <View style={Styles.imagee}>
                    <Image  source={require("../../assets/cruise.png")} style={{marginLeft:10}}/>
                    <ApText textStyle={{width:50,paddingLeft:5, color:colors.gray}}>Toyota Camry</ApText>
                </View>   
                <View style={Styles.Image} >
                    <Image  source={require("../../assets/front.png")}  />
                    <Text style={Styles.Seat}>6 seat</Text>
                </View>
                    <Text style={{top:32, color:colors.gray}}>N200</Text>  
            </View>
            <View style={Styles.Wit}>
              <AppButton buttonStyle={{  top:0, height:50, width:130,backgroundColor: colors.blue,  }}    onPress={() =>console.log('Go ahead')} title='End Trip' />
              <AppButton
                buttonStyle={{ top:0, height:50, width:130, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.gray }}
                onPress={() =>console.log('Cancel')}
                title='Cancel Trip'
                textStyle={{
                  color: colors.gray
                }}
              />
            </View>
    </View>
  );
}

const styles = StyleSheet.create({})