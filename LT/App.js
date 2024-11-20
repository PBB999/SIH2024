import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import SendPackageScreen from './screens/SendPackageScreen';
import PickupLocationScreen from './screens/PickupLocationScreen';
import EstimatePriceScreen from './screens/EstimatePriceScreen';






const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        {/* Hide drawer for Login and Register screens */}
        <Drawer.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ swipeEnabled: false, headerShown: false }} 
        />
        <Drawer.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ swipeEnabled: false, headerShown: false }} 
        />
        {/* Only show drawer on Dashboard screen and rename to "Home" */}
        <Drawer.Screen 
          name="Home"  // Renaming Dashboard to Home in the drawer
          component={DashboardScreen} 
          options={{ headerShown: true, title: 'Home' }} 
        />
        {/* Add SendPackageScreen to the drawer */}
        <Drawer.Screen 
          name="SendPackage" 
          component={SendPackageScreen} 
          options={{ headerShown: true, title: 'Send Package' }} 

        />

        <Drawer.Screen 
          name="PickupLocation" 
          component={PickupLocationScreen} 
          options={{ headerShown: true, title: 'PickupLocation' }} 
          

        />


        <Drawer.Screen 
          name="EstimatePrice" 
          component={EstimatePriceScreen} 
          options={{ headerShown: true, title: 'EstimatePrice' }} 
          

        />

       



      </Drawer.Navigator>
    </NavigationContainer>
  );
}



