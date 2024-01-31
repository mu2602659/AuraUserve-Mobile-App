import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const GardeningScreen = () => {

  const GardeningData = [
    { id: '1', name: 'BeautySaloonScreen', displayName: 'Garden Installation', icon: require('../assets/icons/garden.png') },
    { id: '3', name: 'MaintenanceScreen', displayName: 'Mosquito Control', icon: require('../assets/icons/mosquito.png') },
    { id: '4', name: 'ShiftingScreen', displayName: 'Garden Lighting Installation', icon: require('../assets/icons/street-light.png') },
    { id: '5', name: 'PestControlScreen', displayName: 'Wildlife Control', icon: require('../assets/icons/snail.png') },
    { id: '6', name: 'SolarScreen', displayName: 'Tree Care and Trimming', icon: require('../assets/icons/palm-tree.png') },
    { id: '8', name: 'ClinicalScreen', displayName: 'Rodent Control', icon: require('../assets/icons/rat.png') },
    { id: '10', name: 'ShiftingScreen', displayName: 'Bed Bug Extermination', icon: require('../assets/icons/bed-bug.png') },
    { id: '12', name: 'SolarScreen', displayName: 'Bee and Wasp Removal', icon: require('../assets/icons/bee.png') },
      ];
  const renderServiceBlock = (service) => (
    <TouchableOpacity
      key={service.id}
      style={styles.serviceBlock}
      onPress={() => {
        console.log(`Navigating to ${service.name}`);
        navigation.navigate(service.name);
      }}
    >
      <Image source={service.icon} style={styles.serviceIcon} />
      <Text style={styles.serviceName}>{service.displayName}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          {/* Your logo image goes here */}
          <Image source={require('../assets/images/logoo.png')} style={styles.logoImage} />
        </View>
        <View style={styles.gridContainer}>
          {GardeningData.map((service) => renderServiceBlock(service))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    padding: 16,
  },
  logoImage: {
    width: 190,
    height: 120,
    resizeMode: 'contain',
    borderTopLeftRadius: 40, // Adjust the value as needed
    borderBottomRightRadius: 40, // Adjust the value as needed
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 8,
  },
  serviceBlock: {
    width: '40%',
    aspectRatio: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000000',
  },
  serviceIcon: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  serviceName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GardeningScreen;
