import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function DashboardScreen() {
  const [activeTab, setActiveTab] = useState('To Me');
  const navigation = useNavigation();

  const handleShipNowPress = () => {
    navigation.navigate('SendPackage', { initialStep: 'ADDRESS' });
  };


  const handleOptionPress = (option) => {
    if (option === 'Domestic Courier') {
      navigation.navigate('SendPackage');
    } else if (option === 'Estimate Price') {
      navigation.navigate('EstimatePrice'); // Navigate to the Estimate Price screen
    } else {
      Alert.alert('Option Selected', option);
    }
};

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header with Profile Info */}
        <View style={styles.header}>
          <Text style={styles.time}>8:17 AM</Text>
          <View style={styles.profileContainer}>
            <View style={styles.profileIcon}>
              <Text style={styles.profileText}>PB</Text>
            </View>
            <View>
              <Text style={styles.profileName}>Pratik Bulkunde</Text>
              <Text style={styles.profileNumber}>XXXXXX6606</Text>
            </View>
          </View>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <Text style={styles.sectionTitle}>Send Anything Anywhere</Text>
          <View style={styles.sendOptions}>
          <TouchableOpacity
    style={styles.option}
    onPress={() => handleOptionPress('Domestic Courier')}
  >
    <Ionicons name="paper-plane" size={40} color="#d9534f" /> 
    <Text style={styles.optionText}>Send Courier</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.option}
    onPress={() => handleOptionPress('International Courier')}
  >
    <Ionicons name="mail-open" size={40} color="#d9534f" /> 
    <Text style={styles.optionText}>Recieve Courier</Text>
  </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Track Your Orders</Text>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'To Me' && styles.activeTab]}
              onPress={() => setActiveTab('To Me')}
            >
              <Text style={[styles.tabText, activeTab === 'To Me' && styles.activeTabText]}>
                To Me
              </Text>
              {activeTab === 'To Me' && <View style={styles.underline} />}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'From Me' && styles.activeTab]}
              onPress={() => setActiveTab('From Me')}
            >
              <Text style={[styles.tabText, activeTab === 'From Me' && styles.activeTabText]}>
                From Me
              </Text>
              {activeTab === 'From Me' && <View style={styles.underline} />}
            </TouchableOpacity>
          </View>
          <View style={styles.trackOrders}>
            {activeTab === 'To Me' ? (
              <View style={styles.emptyOrdersContainer}>
                <Ionicons name="cube-outline" size={50} color="#999" />
                <Text style={styles.noOrders}>There are no active orders right now!</Text>
              </View>
            ) : (
              <View style={styles.fromMeContainer}>
                <Ionicons name="cube-outline" size={50} color="#999" />
                <Text style={styles.noOrders}>You haven’t sent any package yet!</Text>
                <TouchableOpacity style={styles.shipNowButton} onPress={handleShipNowPress}>
                  <Text style={styles.shipNowButtonText}>Ship Now</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        <View style={styles.additionalOptionsContainer}>
          <TouchableOpacity
            style={styles.additionalOption}
            onPress={() => handleOptionPress('Need Help')}
          >
            <Ionicons name="help-circle-outline" size={30} color="#333" />
            <Text style={styles.additionalText}>Need Help?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.additionalOption}
            onPress={() => handleOptionPress('Estimate Price')}
          >
            <Ionicons name="calculator" size={30} color="#333" />
            <Text style={styles.additionalText}>Estimate Price</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },

  // Header Styles
  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  time: { fontSize: 14, color: '#888' },
  profileContainer: { flexDirection: 'row', alignItems: 'center' },
  profileIcon: {
    backgroundColor: '#bbb',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  profileText: { color: 'white', fontWeight: 'bold' },
  profileName: { fontWeight: 'bold', fontSize: 16 },
  profileNumber: { fontSize: 12, color: '#888' },
  mainContent: { padding: 15, flex: 1 },
  sectionTitle: { fontWeight: 'bold', fontSize: 18, marginVertical: 10, color: '#333' },

  // Send Options Styles
  sendOptions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  option: {
    backgroundColor: '#e3e3e3',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  optionText: { marginTop: 10, fontSize: 14, color: '#333' },

  // Track Orders Tab Styles
  tabContainer: { flexDirection: 'row', justifyContent: 'center', marginVertical: 10 },
  tab: { flex: 1, padding: 10, alignItems: 'center' },
  activeTab: { borderBottomWidth: 0, borderBottomColor: '#007bff' },
  tabText: { color: '#666', fontSize: 16 },
  activeTabText: { color: '#007bff', fontWeight: 'bold' },

  // Underline for Active Tab
  underline: {
    width: '100%',
    height: 3,
    backgroundColor: '#007bff',
    marginTop: 5,
  },

  // Track Orders Content Styles
  trackOrders: { alignItems: 'center', marginVertical: 20 },
  emptyOrdersContainer: { alignItems: 'center', marginVertical: 20 },
  noOrders: { color: '#888', textAlign: 'center', marginVertical: 10 },

  // From Me Content Styles
  fromMeContainer: { alignItems: 'center', marginVertical: 20 },
  shipNowButton: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderColor: '#007bff',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
  },
  shipNowButtonText: { color: '#007bff', fontWeight: 'bold', fontSize: 16 },

  // Additional Options Styles
  additionalOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  additionalOption: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 15,
    margin: 10,
  },
  additionalText: { marginTop: 5, fontSize: 14, color: '#333' },

  // Scroll content to ensure it grows with content
  scrollContent: {
    paddingBottom: 20, // Ensures there's space at the bottom for scrolling
  },
});