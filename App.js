import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { PriceLimitsScreen } from './components/PriceLimitsScreen';
import { OwnInfo } from './components/OwnInfo';
import { ElCarScreen } from './components/ElCarScreen';
import { PriceListScreen } from './components/PriceListScreen';
import { HomeScreen } from './components/HomeScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { DataScreen } from './components/DataScreen';
import { CustomDrawer } from './components/CustomDrawer'
import { useFonts } from 'expo-font';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

LogBox.ignoreAllLogs();
export default function DrawerNavigation(props) {

  let [fontsLoaded] = useFonts({
    MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    RampartOneRegular: require("./assets/fonts/RampartOne-Regular.ttf")
  })

  //const [priceNow, setPriceNow] = useState()

  if (!fontsLoaded) {
    return null
  }
  return (

    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerTintColor: '#a6d3d8',
          fontFamily: 'MontserratRegular',
          headerShown: true,
          headerTitleStyle: { color: '#a6d3d8', fontSize: 25, fontFamily: "MontserratRegular" },

          drawerLabelStyle: {
            marginLeft: -15,
            fontFamily: "MontserratRegular"
          },

          headerStyle: {
            backgroundColor: '#1f2131',
            borderBottomColor: '#D4850E',
            borderBottomWidth: 3,
          },

          drawerActiveTintColor: "#D4850E",
          drawerInactiveTintColor: "#a6d3d8",
          drawerStyle: {
            backgroundColor: '#1f2131',
          },
        }}>
        <Drawer.Screen
          name="Koti"
          component={HomeScreen}
          options={{ drawerIcon: () => <Entypo name="home" size={24} color='#a6d3d8' /> }}
        />
        <Drawer.Screen
          name="Omat kodinkoneet"
          component={OwnInfo}
          options={{ drawerIcon: () => <Entypo name="add-to-list" size={24} color='#a6d3d8' /> }}
        />
        <Drawer.Screen
          name="Sähköauto"
          component={ElCarScreen}
          options={{ drawerIcon: () => <MaterialCommunityIcons name="car-electric" size={24} color='#a6d3d8' /> }}
        //initialParams={{hinta: 10}}
        />
        <Drawer.Screen
          name="Tuntihinnat"
          component={PriceListScreen}
          options={{ drawerIcon: () => <FontAwesome name="list-ul" size={24} color='#a6d3d8' /> }}
        //initialParams={{hinta: 100}} 
        />
        <Drawer.Screen
          name="Tilastot"
          component={DataScreen}
          options={{ drawerIcon: () => <AntDesign name="piechart" size={24} color="#a6d3d8" /> }}
        />
        <Drawer.Screen
          name="Asetukset"
          component={SettingsScreen}
          options={{ drawerIcon: () => <Ionicons name="settings-sharp" size={24} color='#a6d3d8' /> }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}