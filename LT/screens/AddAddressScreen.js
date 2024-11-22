import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const AddAddressScreen = ({ navigation }) => {
  const [location, setLocation] = useState({
    latitude: 37.78825,  // Initial latitude (for example)
    longitude: -122.4324, // Initial longitude (for example)
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handleSaveLocation = () => {
    // Logic to save the location (could be saving to backend or local storage)
    alert('Location Saved!');
    navigation.goBack();  // Go back to the previous screen after saving
  };

  const handleAddAddressManually = () => {
    // Navigate to another screen for adding the address manually (if implemented)
    alert('Navigate to manually add address');
    navigation.goBack();  // Go back to the previous screen after adding manually
  };

  const onRegionChange = (region) => {
    setLocation(region);  // Update location when map region changes
  };

  return (
    <View style={styles.container}>
      {/* Map View */}
      <MapView
        style={styles.map}
        initialRegion={location}
        onRegionChangeComplete={onRegionChange}
      >
        {/* Marker at the current location */}
        <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} />
      </MapView>

      {/* Buttons below the map */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSaveLocation}>
          <Text style={styles.buttonText}>Save Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAddAddressManually}>
          <Text style={styles.buttonText}>Add Address Manually</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: '100%',
    height: '70%',
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#d9534f',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddAddressScreen;
