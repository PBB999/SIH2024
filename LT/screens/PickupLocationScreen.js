import React, { useState } from 'react';
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

const PickupLocationScreen = () => {
  const [isFirstSheetVisible, setFirstSheetVisible] = useState(false);
  const [isSecondSheetVisible, setSecondSheetVisible] = useState(false);
  const [isAddAddressScreenVisible, setAddAddressScreenVisible] = useState(false);
  const [selectedSaveAs, setSelectedSaveAs] = useState(null);
  const [otherAddress, setOtherAddress] = useState('');

  // Open and close functions
  const openFirstSheet = () => setFirstSheetVisible(true);
  const closeFirstSheet = () => setFirstSheetVisible(false);

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
    setSelectedSaveAs(null); // Reset save-as selection
    setOtherAddress(''); // Reset other address input
  };

  return (
<View style={styles.container}>
      {/* Only show the button if the Add Address screen is not visible */}
      {!isAddAddressScreenVisible && (
        <TouchableOpacity style={styles.button} onPress={openFirstSheet}>
          <Text style={styles.buttonText}>Select Pickup Location</Text>
        </TouchableOpacity>
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
                  style={[
                    styles.saveAsButton,
                    selectedSaveAs === option && styles.selectedSaveAsButton,
                  ]}
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
            <TouchableOpacity
              style={styles.addAddressButton}
              onPress={closeAddAddressScreen}>
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
  button: {
    backgroundColor: '#d9534f',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
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
    fontSize: 20,
    color: '#666',
  },
  addNewAddressOption: {
    marginTop: 20,
  },
  addNewAddressText: {
    color: '#d9534f',
    fontSize: 16,
  },
  addManuallyButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#d9534f',
    borderRadius: 8,
    alignItems: 'center',
  },
  addManuallyText: {
    color: '#fff',
    fontSize: 16,
  },
  addAddressScreen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  saveAsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  saveAsButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  selectedSaveAsButton: {
    backgroundColor: '#d9534f',
    borderColor: '#d9534f',
  },
  addAddressButton: {
    padding: 15,
    backgroundColor: '#d9534f',
    borderRadius: 8,
    alignItems: 'center',
  },
  addAddressText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PickupLocationScreen;