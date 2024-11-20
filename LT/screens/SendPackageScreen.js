import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SendPackageScreen = () => {
  const navigation = useNavigation();

  const handleAddPickupAddress = () => {
    // Navigate to PickupLocationScreen
    navigation.navigate('PickupLocation');
  };

  const handleAddDeliveryAddress = () => {
    // Placeholder for delivery address navigation
    alert('Navigate to Delivery Address Screen (to be implemented)');
  };

  const handleGetEstimatePress = () => {
    navigation.navigate("EstimatePrice");
  };

  return (
    <View style={styles.container}>
      {/* Progress Steps */}
      <View style={styles.progressContainer}>
        <View style={styles.progressItem}>
          <View style={styles.activeStepCircle} />
          <Text style={styles.activeStepText}>ADDRESS</Text>
        </View>
        <View style={styles.progressLine} />
        <View style={styles.progressItem}>
          <View style={styles.inactiveStepCircle} />
          <Text style={styles.inactiveStepText}>PACKAGE</Text>
        </View>
        <View style={styles.progressLine} />
        <View style={styles.progressItem}>
          <View style={styles.inactiveStepCircle} />
          <Text style={styles.inactiveStepText}>SCHEDULE</Text>
        </View>
        <View style={styles.progressLine} />
        <View style={styles.progressItem}>
          <View style={styles.inactiveStepCircle} />
          <Text style={styles.inactiveStepText}>SUMMARY</Text>
        </View>
      </View>

      {/* Address Buttons */}
      <TouchableOpacity style={styles.addressButton} onPress={handleAddPickupAddress}>
        <FontAwesome5 name="heart" size={24} color="#d9534f" />
        <Text style={styles.buttonText}>Add Pickup Address</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addressButton} onPress={handleAddPickupAddress}>
        <FontAwesome5 name="map-marker-alt" size={24} color="#d9534f" />
        <Text style={styles.buttonText}>Add Delivery Address</Text>
      </TouchableOpacity>

      {/* Shipping Cost */}
      <Text style={styles.estimateText}>
        Want to know the shipping cost?{' '}
        <TouchableOpacity onPress={handleGetEstimatePress}>
          <Text style={styles.estimateLink}>Get an Estimate</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  progressItem: {
    alignItems: 'center',
  },
  activeStepCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#d9534f', // Active step color
  },
  inactiveStepCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ddd', // Inactive step color
  },
  progressLine: {
    width: 50,
    height: 2,
    backgroundColor: '#ddd', // Line between steps
  },
  activeStepText: {
    fontSize: 12,
    color: '#000',
    marginTop: 5,
    fontWeight: 'bold',
  },
  inactiveStepText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  addressButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 10,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#d9534f',
    fontWeight: 'bold',
  },
  estimateText: {
    marginTop: 20,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  estimateLink: {
    color: '#d9534f',
    fontWeight: 'bold',
  },
});

export default SendPackageScreen;
