import {
  StatusBar
} from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import AppButton from "./src/components/AppButton";
import MobileAuthScreen from "./src/screens/MobileAuthScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import MapScreen from "./src/screens/MapScreen";
import DestinationScreen from "./src/screens/DestinationScreen";
import DestinationPartScreen from "./src/screens/DestinationPartScreen";
import NoRideScreen from "./src/screens/NoRideScreen";
import OfferTripScreen from "./src/screens/OfferTripScreen";
import ScheduleTripScreen from "./src/screens/ScheduleTripScreen";
import ScheduledScreen from "./src/screens/ScheduledScreen";
import SecondScheduledScreen from "./src/screens/SecondScheduledScreen";
import ThirdScheduledScreen from "./src/screens/ThirdScheduledScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RequestScreen from "./src/screens/RequestScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import SettingScreen from "./src/screens/SettingScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import RefferalScreen from "./src/screens/RefferalScreen";
import LinkedScreen from "./src/screens/LinkedScreen";
import EditScreen from "./src/screens/EditScreen";
import ManagementScreen from "./src/screens/ManagementScreen";
import NewVehicleScreen from "./src/screens/NewVehicleScreen";
import DriverLicenseScreen from "./src/screens/DriverLicenseScreen";
import DocumentScreen from "./src/screens/DocumentScreen";
import AppNavigator from "./src/navigation/AppNavigator";


// export default function App() {
//   return <AppNavigator /> ;
// }
export default function App() {
  return <DriverLicenseScreen /> ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});