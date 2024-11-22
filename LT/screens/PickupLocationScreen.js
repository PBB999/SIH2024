// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Modal,
//   TextInput,
//   ScrollView,
// } from 'react-native';
// import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

// const PickupLocationScreen = () => {
//   const [isFirstSheetVisible, setFirstSheetVisible] = useState(false);
//   const [isSecondSheetVisible, setSecondSheetVisible] = useState(false);
//   const [isAddAddressScreenVisible, setAddAddressScreenVisible] = useState(false);
//   const [selectedSaveAs, setSelectedSaveAs] = useState(null);
//   const [otherAddress, setOtherAddress] = useState('');

//   // Open and close functions
//   const openFirstSheet = () => setFirstSheetVisible(true);
//   const closeFirstSheet = () => setFirstSheetVisible(false);

//   const openSecondSheet = () => {
//     closeFirstSheet();
//     setSecondSheetVisible(true);
//   };
//   const closeSecondSheet = () => setSecondSheetVisible(false);

//   const openAddAddressScreen = () => {
//     closeSecondSheet();
//     setAddAddressScreenVisible(true);
//   };

//   const closeAddAddressScreen = () => {
//     setAddAddressScreenVisible(false);
//     setSelectedSaveAs(null); // Reset save-as selection
//     setOtherAddress(''); // Reset other address input
//   };

//   return (
// <View style={styles.container}>
//       {/* Only show the button if the Add Address screen is not visible */}
//       {!isAddAddressScreenVisible && (
//         <TouchableOpacity style={styles.button} onPress={openFirstSheet}>
//           <Text style={styles.buttonText}>Select Pickup Location</Text>
//         </TouchableOpacity>
//       )}

//       {/* First Bottom Sheet */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isFirstSheetVisible}
//         onRequestClose={closeFirstSheet}>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContainer}>
//             <View style={styles.sheetHeader}>
//               <Text style={styles.modalHeader}>Select Pickup Address</Text>
//               <TouchableOpacity onPress={closeFirstSheet}>
//                 <Text style={styles.closeButton}>✕</Text>
//               </TouchableOpacity>
//             </View>
//             <TouchableOpacity onPress={openSecondSheet} style={styles.addNewAddressOption}>
//               <Text style={styles.addNewAddressText}>📍 Add New Address</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* Second Bottom Sheet */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isSecondSheetVisible}
//         onRequestClose={closeSecondSheet}>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContainer}>
//             <View style={styles.sheetHeader}>
//               <Text style={styles.modalHeader}>Add Address</Text>
//               <TouchableOpacity onPress={closeSecondSheet}>
//                 <Text style={styles.closeButton}>✕</Text>
//               </TouchableOpacity>
//             </View>
//             <TouchableOpacity onPress={openAddAddressScreen} style={styles.addManuallyButton}>
//               <Text style={styles.addManuallyText}>Add Address Manually</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* Add Pickup Address Screen */}
//       {isAddAddressScreenVisible && (
//         <View style={styles.addAddressScreen}>
//           <ScrollView>
            

//             {/* Name Field */}
//             <Text style={styles.label}>Name</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter name"
//               placeholderTextColor="#aaa"
//             />

//             {/* Mobile Number Field */}
//             <Text style={styles.label}>
//               <FontAwesome name="phone" size={16} /> Mobile Number
//             </Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter mobile number"
//               placeholderTextColor="#aaa"
//               keyboardType="phone-pad"
//             />

//             {/* Address Fields */}
//             <Text style={styles.label}>Flat, Housing no., Building, Apartment</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Flat, Housing no., Building, Apartment"
//               placeholderTextColor="#aaa"
//             />

//             <Text style={styles.label}>Area, Street, Sector</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Area, Street, Sector"
//               placeholderTextColor="#aaa"
//             />

//             <Text style={styles.label}>Pincode</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter pincode"
//               placeholderTextColor="#aaa"
//               keyboardType="number-pad"
//             />

//             {/* City and State */}
//             <View style={styles.row}>
//               <View style={{ flex: 1 }}>
//                 <Text style={styles.label}>City</Text>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Enter city"
//                   placeholderTextColor="#aaa"
//                 />
//               </View>
//               <View style={{ flex: 1, marginLeft: 10 }}>
//                 <Text style={styles.label}>State</Text>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Enter state"
//                   placeholderTextColor="#aaa"
//                 />
//               </View>
//             </View>

//             {/* Save As Options */}
//             <Text style={styles.label}>Save as</Text>
//             <View style={styles.saveAsContainer}>
//               {['Home', 'Work', 'Other'].map((option) => (
//                 <TouchableOpacity
//                   key={option}
//                   style={[
//                     styles.saveAsButton,
//                     selectedSaveAs === option && styles.selectedSaveAsButton,
//                   ]}
//                   onPress={() => setSelectedSaveAs(option)}>
//                   <Text>
//                     {option === 'Home' && <MaterialIcons name="home" size={16} />}
//                     {option === 'Work' && <MaterialIcons name="work" size={16} />}
//                     {option === 'Other' && <MaterialIcons name="location-on" size={16} />}  {option}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </View>

//             {/* Show Other Address Input if 'Other' is Selected */}
//             {selectedSaveAs === 'Other' && (
//               <>
//                 <Text style={styles.label}>Other Address</Text>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="e.g. Friend's home, New office"
//                   placeholderTextColor="#aaa"
//                   value={otherAddress}
//                   onChangeText={setOtherAddress}
//                 />
//               </>
//             )}

//             {/* Submit Button */}
//             <TouchableOpacity
//               style={styles.addAddressButton}
//               onPress={closeAddAddressScreen}>
//               <Text style={styles.addAddressText}>Add Pickup Address</Text>
//             </TouchableOpacity>
//           </ScrollView>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f9f9f9',
//   },
//   button: {
//     backgroundColor: '#d9534f',
//     padding: 15,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContainer: {
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//     padding: 20,
//   },
//   sheetHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   modalHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   closeButton: {
//     fontSize: 20,
//     color: '#666',
//   },
//   addNewAddressOption: {
//     marginTop: 20,
//   },
//   addNewAddressText: {
//     color: '#d9534f',
//     fontSize: 16,
//   },
//   addManuallyButton: {
//     marginTop: 20,
//     padding: 15,
//     backgroundColor: '#d9534f',
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   addManuallyText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   addAddressScreen: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 15,
//     fontSize: 14,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   saveAsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 15,
//   },
//   saveAsButton: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     marginHorizontal: 5,
//   },
//   selectedSaveAsButton: {
//     backgroundColor: '#d9534f',
//     borderColor: '#d9534f',
//   },
//   addAddressButton: {
//     padding: 15,
//     backgroundColor: '#d9534f',
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   addAddressText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default PickupLocationScreen;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Modal,
//   TextInput,
//   ScrollView,
// } from 'react-native';
// import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

// const PickupLocationScreen = () => {
//   const [isFirstSheetVisible, setFirstSheetVisible] = useState(false);
//   const [isSecondSheetVisible, setSecondSheetVisible] = useState(false);
//   const [isAddAddressScreenVisible, setAddAddressScreenVisible] = useState(false);
//   const [selectedSaveAs, setSelectedSaveAs] = useState(null);
//   const [otherAddress, setOtherAddress] = useState('');

//   // Open and close functions
//   const openFirstSheet = () => setFirstSheetVisible(true);
//   const closeFirstSheet = () => setFirstSheetVisible(false);

//   const openSecondSheet = () => {
//     closeFirstSheet();
//     setSecondSheetVisible(true);
//   };
//   const closeSecondSheet = () => setSecondSheetVisible(false);

//   const openAddAddressScreen = () => {
//     closeSecondSheet();
//     setAddAddressScreenVisible(true);
//   };

//   const closeAddAddressScreen = () => {
//     setAddAddressScreenVisible(false);
//     setSelectedSaveAs(null); // Reset save-as selection
//     setOtherAddress(''); // Reset other address input
//   };

//   return (
//     <View style={styles.container}>
      
//       {isAddAddressScreenVisible && (
//         <View style={styles.addAddressScreen}>
//           <View style={styles.mapContainer}>
//             {/* This is a placeholder for the map (60% height) */}
//             <View style={styles.map}>
//               <Text>Map Placeholder</Text>
//             </View>
//           </View>

//           {/* Buttons below the map */}
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity
//               style={styles.saveButton}
//               onPress={() => console.log('Save Location')}>
//               <Text style={styles.saveButtonText}>Save Location</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.addManuallyButton}
//               onPress={openAddAddressScreen}>
//               <Text style={styles.addManuallyText}>Add Address Manually</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}

//       {/* First Bottom Sheet */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isFirstSheetVisible}
//         onRequestClose={closeFirstSheet}>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContainer}>
//             <View style={styles.sheetHeader}>
//               <Text style={styles.modalHeader}>Select Pickup Address</Text>
//               <TouchableOpacity onPress={closeFirstSheet}>
//                 <Text style={styles.closeButton}>✕</Text>
//               </TouchableOpacity>
//             </View>
//             <TouchableOpacity onPress={openSecondSheet} style={styles.addNewAddressOption}>
//               <Text style={styles.addNewAddressText}>📍 Add New Address</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* Second Bottom Sheet */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isSecondSheetVisible}
//         onRequestClose={closeSecondSheet}>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContainer}>
//             <View style={styles.sheetHeader}>
//               <Text style={styles.modalHeader}>Add Address</Text>
//               <TouchableOpacity onPress={closeSecondSheet}>
//                 <Text style={styles.closeButton}>✕</Text>
//               </TouchableOpacity>
//             </View>
//             <TouchableOpacity onPress={openAddAddressScreen} style={styles.addManuallyButton}>
//               <Text style={styles.addManuallyText}>Add Address Manually</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* Add Pickup Address Screen */}
//       {isAddAddressScreenVisible && (
//         <View style={styles.addAddressScreen}>
//           <ScrollView>
//             {/* Name Field */}
//             <Text style={styles.label}>Name</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter name"
//               placeholderTextColor="#aaa"
//             />

//             {/* Mobile Number Field */}
//             <Text style={styles.label}>
//               <FontAwesome name="phone" size={16} /> Mobile Number
//             </Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter mobile number"
//               placeholderTextColor="#aaa"
//               keyboardType="phone-pad"
//             />

//             {/* Address Fields */}
//             <Text style={styles.label}>Flat, Housing no., Building, Apartment</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Flat, Housing no., Building, Apartment"
//               placeholderTextColor="#aaa"
//             />

//             <Text style={styles.label}>Area, Street, Sector</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Area, Street, Sector"
//               placeholderTextColor="#aaa"
//             />

//             <Text style={styles.label}>Pincode</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter pincode"
//               placeholderTextColor="#aaa"
//               keyboardType="number-pad"
//             />

//             {/* City and State */}
//             <View style={styles.row}>
//               <View style={{ flex: 1 }}>
//                 <Text style={styles.label}>City</Text>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Enter city"
//                   placeholderTextColor="#aaa"
//                 />
//               </View>
//               <View style={{ flex: 1, marginLeft: 10 }}>
//                 <Text style={styles.label}>State</Text>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Enter state"
//                   placeholderTextColor="#aaa"
//                 />
//               </View>
//             </View>

//             {/* Save As Options */}
//             <Text style={styles.label}>Save as</Text>
//             <View style={styles.saveAsContainer}>
//               {['Home', 'Work', 'Other'].map((option) => (
//                 <TouchableOpacity
//                   key={option}
//                   style={[styles.saveAsButton, selectedSaveAs === option && styles.selectedSaveAsButton]}
//                   onPress={() => setSelectedSaveAs(option)}>
//                   <Text>
//                     {option === 'Home' && <MaterialIcons name="home" size={16} />}
//                     {option === 'Work' && <MaterialIcons name="work" size={16} />}
//                     {option === 'Other' && <MaterialIcons name="location-on" size={16} />}  {option}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </View>

//             {/* Show Other Address Input if 'Other' is Selected */}
//             {selectedSaveAs === 'Other' && (
//               <>
//                 <Text style={styles.label}>Other Address</Text>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="e.g. Friend's home, New office"
//                   placeholderTextColor="#aaa"
//                   value={otherAddress}
//                   onChangeText={setOtherAddress}
//                 />
//               </>
//             )}

//             {/* Submit Button */}
//             <TouchableOpacity style={styles.addAddressButton} onPress={closeAddAddressScreen}>
//               <Text style={styles.addAddressText}>Add Pickup Address</Text>
//             </TouchableOpacity>
//           </ScrollView>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f9f9f9',
//   },
//   button: {
//     backgroundColor: '#d9534f',
//     padding: 15,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   mapContainer: {
//     height: '60%', // 60% height for the map
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#ddd', // Placeholder color
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonContainer: {
//     width: '100%',
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   saveButton: {
//     backgroundColor: '#28a745',
//     padding: 15,
//     borderRadius: 8,
//     marginBottom: 10,
//     width: '80%',
//     alignItems: 'center',
//   },
//   saveButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   addManuallyButton: {
//     backgroundColor: '#6c757d',
//     padding: 15,
//     borderRadius: 8,
//     width: '80%',
//     alignItems: 'center',
//   },
//   addManuallyText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   addAddressScreen: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 5,
//   },
//   input: {
//     backgroundColor: '#f2f2f2',
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 15,
//     fontSize: 16,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   saveAsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 15,
//   },
//   saveAsButton: {
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     borderRadius: 8,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   selectedSaveAsButton: {
//     backgroundColor: '#007bff',
//   },
//   addAddressButton: {
//     backgroundColor: '#007bff',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   addAddressText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContainer: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     width: '100%',
//   },
//   sheetHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   modalHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   closeButton: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   addNewAddressOption: {
//     paddingVertical: 10,
//     marginTop: 20,
//     backgroundColor: '#007bff',
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   addNewAddressText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default PickupLocationScreen;

import React, { useState,useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

const PickupLocationScreen = () => {
  const [isFirstSheetVisible, setFirstSheetVisible] = useState(false);
  const [isSecondSheetVisible, setSecondSheetVisible] = useState(false);
  const [isAddAddressScreenVisible, setAddAddressScreenVisible] = useState(false);
  const [selectedSaveAs, setSelectedSaveAs] = useState(null);
  const [otherAddress, setOtherAddress] = useState('');
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);

  // Open and close functions
  const openFirstSheet = () => setFirstSheetVisible(true);
  const closeFirstSheet = () => setFirstSheetVisible(false);
  useEffect(() => {
    // Request permission and get the current location
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    };

    getLocation();
  }, []);

  if (!location) {
    return null; // You can render a loading screen or placeholder until the location is fetched
  }

  const openSecondSheet = () => {
    closeFirstSheet();
    setSecondSheetVisible(true);
  };
  const closeSecondSheet = () => setSecondSheetVisible(false);

  const openAddAddressScreen = () => {
    closeSecondSheet();
    setAddAddressScreenVisible(true);
  };

  const closeAddAddressScreen = () => {
    setAddAddressScreenVisible(false);  
    setSelectedSaveAs(null);  
    setOtherAddress('');  
    navigation.navigate('SendPackage');
  };
  
  return (
    <View style={styles.container}>
      {/* Map View and Buttons */}
      {!isAddAddressScreenVisible && (
        <View style={styles.mapContainer}>
          <View style={styles.mapContainer}>
  <MapView
    style={styles.map}
    initialRegion={{
      latitude: 19.8897, // Latitude of Kopargaon
      longitude: 74.4785, // Longitude of Kopargaon
      latitudeDelta: 0.0922, // Adjust zoom level
      longitudeDelta: 0.0421, // Adjust zoom level
    }}
    showsUserLocation={true}
    showsMyLocationButton={true}
  >
    <Marker
      coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
      title="Pickup Location"
      description="This is your selected pickup location"
    />
  </MapView>
</View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => console.log('Save Location')}>
              <Text style={styles.saveButtonText}>Save Location</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addManuallyButton}
              onPress={openAddAddressScreen}>
              <Text style={styles.addManuallyText}>Add Address Manually</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}


      {/* First Bottom Sheet */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isFirstSheetVisible}
        onRequestClose={closeFirstSheet}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.sheetHeader}>
              <Text style={styles.modalHeader}>Select Pickup Address</Text>
              <TouchableOpacity onPress={closeFirstSheet}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={openSecondSheet} style={styles.addNewAddressOption}>
              <Text style={styles.addNewAddressText}>📍 Add New Address</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Second Bottom Sheet */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSecondSheetVisible}
        onRequestClose={closeSecondSheet}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.sheetHeader}>
              <Text style={styles.modalHeader}>Add Address</Text>
              <TouchableOpacity onPress={closeSecondSheet}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={openAddAddressScreen} style={styles.addManuallyButton}>
              <Text style={styles.addManuallyText}>Add Address Manually</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Add Pickup Address Screen */}
      {isAddAddressScreenVisible && (
        <View style={styles.addAddressScreen}>
          <ScrollView>
            {/* Name Field */}
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter name"
              placeholderTextColor="#aaa"
            />

            {/* Mobile Number Field */}
            <Text style={styles.label}>
              <FontAwesome name="phone" size={16} /> Mobile Number
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter mobile number"
              placeholderTextColor="#aaa"
              keyboardType="phone-pad"
            />

            {/* Address Fields */}
            <Text style={styles.label}>Flat, Housing no., Building, Apartment</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Flat, Housing no., Building, Apartment"
              placeholderTextColor="#aaa"
            />

            <Text style={styles.label}>Area, Street, Sector</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Area, Street, Sector"
              placeholderTextColor="#aaa"
            />

            <Text style={styles.label}>Pincode</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter pincode"
              placeholderTextColor="#aaa"
              keyboardType="number-pad"
            />

            {/* City and State */}
            <View style={styles.row}>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>City</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter city"
                  placeholderTextColor="#aaa"
                />
              </View>
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.label}>State</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter state"
                  placeholderTextColor="#aaa"
                />
              </View>
            </View>

            {/* Save As Options */}
            <Text style={styles.label}>Save as</Text>
            <View style={styles.saveAsContainer}>
              {['Home', 'Work', 'Other'].map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[styles.saveAsButton, selectedSaveAs === option && styles.selectedSaveAsButton]}
                  onPress={() => setSelectedSaveAs(option)}>
                  <Text>
                    {option === 'Home' && <MaterialIcons name="home" size={16} />}
                    {option === 'Work' && <MaterialIcons name="work" size={16} />}
                    {option === 'Other' && <MaterialIcons name="location-on" size={16} />}  {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Show Other Address Input if 'Other' is Selected */}
            {selectedSaveAs === 'Other' && (
              <>
                <Text style={styles.label}>Other Address</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g. Friend's home, New office"
                  placeholderTextColor="#aaa"
                  value={otherAddress}
                  onChangeText={setOtherAddress}
                />
              </>
            )}

            {/* Submit Button */}
            <TouchableOpacity style={styles.addAddressButton} onPress={closeAddAddressScreen}>
              <Text style={styles.addAddressText}>Add Pickup Address</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  mapContainer: {
    height: '75%',
    width:'100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '120%',
    height: '100%',
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#d9534f',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addManuallyButton: {
    backgroundColor: '#6c757d',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  addManuallyText: {
    color: '#fff',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '80%',
    padding: 20,
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 24,
    color: '#888',
  },
  addNewAddressOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  addNewAddressText: {
    fontSize: 16,
    color: '#007bff',
  },
  addAddressScreen: {
    padding: 20,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginVertical: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveAsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  saveAsButton: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    width: '30%',
    alignItems: 'center',
  },
  selectedSaveAsButton: {
    backgroundColor: '#007bff',
    borderColor: '#0056b3',
  },
  addAddressButton: {
    backgroundColor: '#d9534f',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addAddressText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PickupLocationScreen;
