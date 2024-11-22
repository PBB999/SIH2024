// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet ,Modal} from 'react-native';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

// const SendPackageScreen = () => {
//   const navigation = useNavigation();
//   const [isFirstSheetVisible, setIsFirstSheetVisible] = useState(false); // State for Modal visibility

//   const openFirstSheet = () => setIsFirstSheetVisible(true);
//   const closeFirstSheet = () => setIsFirstSheetVisible(false);

//   const handleAddPickupAddress = () => {
//     // Navigate to PickupLocationScreen
//     navigation.navigate('PickupLocation');
//   };

//   const handleAddDeliveryAddress = () => {
//     // Placeholder for delivery address navigation
//     alert('Navigate to Delivery Address Screen (to be implemented)');
//   };

//   const handleGetEstimatePress = () => {
//     navigation.navigate("EstimatePrice");
//   };

//   return (
//     <View style={styles.container}>
//       {/* Progress Steps */}
//       <View style={styles.progressContainer}>
//         <View style={styles.progressItem}>
//           <View style={styles.activeStepCircle} />
//           <Text style={styles.activeStepText}>ADDRESS</Text>
//         </View>
//         <View style={styles.progressLine} />
//         <View style={styles.progressItem}>
//           <View style={styles.inactiveStepCircle} />
//           <Text style={styles.inactiveStepText}>PACKAGE</Text>
//         </View>
//         <View style={styles.progressLine} />
//         <View style={styles.progressItem}>
//           <View style={styles.inactiveStepCircle} />
//           <Text style={styles.inactiveStepText}>SCHEDULE</Text>
//         </View>
//         <View style={styles.progressLine} />
//         <View style={styles.progressItem}>
//           <View style={styles.inactiveStepCircle} />
//           <Text style={styles.inactiveStepText}>SUMMARY</Text>
//         </View>
//       </View>

//       {/* Address Buttons */}
//       <TouchableOpacity style={styles.addressButton} onPress={openFirstSheet}>
//         <FontAwesome5 name="heart" size={24} color="#d9534f" />
//         <Text style={styles.buttonText}>Add Pickup Address</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.addressButton} onPress={handleAddPickupAddress}>
//         <FontAwesome5 name="map-marker-alt" size={24} color="#d9534f" />
//         <Text style={styles.buttonText}>Add Delivery Address</Text>
//       </TouchableOpacity>

//       {/* Shipping Cost */}
//       <Text style={styles.estimateText}>
//         Want to know the shipping cost?{' '}
//         <TouchableOpacity onPress={handleGetEstimatePress}>
//           <Text style={styles.estimateLink}>Get an Estimate</Text>
//         </TouchableOpacity>
//       </Text>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={isFirstSheetVisible}
//         onRequestClose={closeFirstSheet}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContainer}>
//             <View style={styles.sheetHeader}>
//               <Text style={styles.modalHeader}>Select Pickup Address</Text>
//               <TouchableOpacity onPress={closeFirstSheet}>
//                 <Text style={styles.closeButton}>✕</Text>
//               </TouchableOpacity>
//             </View>
//             {/* Saved addresses or a placeholder */}
//             <TouchableOpacity onPress={handleAddPickupAddress} style={styles.addNewAddressOption}>
//               <Text style={styles.addNewAddressText}>📍 Add New Address</Text>
//             </TouchableOpacity>
//             {/* Render saved addresses here */}
//             {/* For now, just a placeholder */}
//             <Text style={styles.savedAddresses}>Saved Pickup Address 1</Text>
//             <Text style={styles.savedAddresses}>Saved Pickup Address 2</Text>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   progressContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 30,
//     justifyContent: 'space-between',
//   },
//   progressItem: {
//     alignItems: 'center',
//   },
//   activeStepCircle: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     backgroundColor: '#d9534f', // Active step color
//   },
//   inactiveStepCircle: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     backgroundColor: '#ddd', // Inactive step color
//   },
//   progressLine: {
//     width: 50,
//     height: 2,
//     backgroundColor: '#ddd', // Line between steps
//   },
//   activeStepText: {
//     fontSize: 12,
//     color: '#000',
//     marginTop: 5,
//     fontWeight: 'bold',
//   },
//   inactiveStepText: {
//     fontSize: 12,
//     color: '#666',
//     marginTop: 5,
//   },
//   addressButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     marginVertical: 10,
//   },
//   buttonText: {
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#d9534f',
//     fontWeight: 'bold',
//   },
//   estimateText: {
//     marginTop: 20,
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//   },
//   estimateLink: {
//     color: '#d9534f',
//     fontWeight: 'bold',
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContainer: {
//     backgroundColor: 'white',
//     width: '80%',
//     padding: 20,
//     borderRadius: 10,
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
//     fontSize: 18,
//     color: '#d9534f',
//   },
//   addNewAddressOption: {
//     marginVertical: 15,
//     padding: 10,
//   },
//   addNewAddressText: {
//     fontSize: 16,
//     color: '#d9534f',
//   },
//   savedAddresses: {
//     fontSize: 14,
//     color: '#666',
//     marginVertical: 5,
//   },
// });


// export default SendPackageScreen;


import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const SendPackageScreen = () => {
  const navigation = useNavigation();
  const [isFirstSheetVisible, setIsFirstSheetVisible] = useState(false);

  // Reset state when the screen comes into focus
  useFocusEffect(
    useCallback(() => {
      // Reset state here when the screen is focused
      setIsFirstSheetVisible(false); // Reset modal visibility
      console.log("State reset on screen focus");

      return () => {
        // Clean up if needed when navigating away from the screen
        console.log("Cleaning up on screen blur");
      };
    }, [])
  );

  const openFirstSheet = () => {
    console.log("Opening first sheet...");
    setIsFirstSheetVisible(true);
  };

  const closeFirstSheet = () => {
    console.log("Closing first sheet...");
    setIsFirstSheetVisible(false);
  };

  const handleAddPickupAddress = () => {
    console.log("Navigating to PickupLocation");
    navigation.navigate('PickupLocation');
  };

  const handleAddDeliveryAddress = () => {
    console.log("Navigating to Delivery Address Screen");
    alert('Navigate to Delivery Address Screen (to be implemented)');
  };

  const handleGetEstimatePress = () => {
    console.log("Navigating to Estimate Price Screen");
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
      <TouchableOpacity
        style={styles.addressButton}
        onPress={openFirstSheet}
        activeOpacity={0.8}
      >
        <FontAwesome5 name="heart" size={24} color="#d9534f" />
        <Text style={styles.buttonText}>Add Pickup Address</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addressButton}
        onPress={handleAddPickupAddress}
        activeOpacity={0.8}
      >
        <FontAwesome5 name="map-marker-alt" size={24} color="#d9534f" />
        <Text style={styles.buttonText}>Add Delivery Address</Text>
      </TouchableOpacity>

      {/* Shipping Cost */}
      <Text style={styles.estimateText}>
        Want to know the shipping cost?{' '}
        <TouchableOpacity onPress={handleGetEstimatePress} activeOpacity={0.8}>
          <Text style={styles.estimateLink}>Get an Estimate</Text>
        </TouchableOpacity>
      </Text>

      {/* Modal for Pickup Address */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isFirstSheetVisible}
        onRequestClose={closeFirstSheet}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.sheetHeader}>
              <Text style={styles.modalHeader}>Select Pickup Address</Text>
              <TouchableOpacity onPress={closeFirstSheet}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleAddPickupAddress} style={styles.addNewAddressOption}>
              <Text style={styles.addNewAddressText}>📍 Add New Address</Text>
            </TouchableOpacity>
            {/* Render saved addresses here */}
            <Text style={styles.savedAddresses}>Saved Pickup Address 1</Text>
            <Text style={styles.savedAddresses}>Saved Pickup Address 2</Text>
          </View>
        </View>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '80%',
    padding: 20,
    borderRadius: 10,
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
    fontSize: 18,
    color: '#d9534f',
  },
  addNewAddressOption: {
    marginVertical: 15,
    padding: 10,
  },
  addNewAddressText: {
    fontSize: 16,
    color: '#d9534f',
  },
  savedAddresses: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
});

export default SendPackageScreen;
