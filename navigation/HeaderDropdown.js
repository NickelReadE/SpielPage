import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { UserIcon } from 'react-native-heroicons/outline';
import { ChevronDownIcon, ChevronUpIcon, SparklesIcon , BellIcon} from 'react-native-heroicons/outline';

const options = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3' },
  { id: '4', label: 'Option 4' },
  // Add more options as needed
];

const HeaderDropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigation = useNavigation();

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleOptionPress = (option) => {
    // Perform actions when an option is selected
    console.log('Selected option:', option);
    setIsDropdownVisible(false);
  };

  const handlePersonIconPress = () => {
    Alert.alert("Notifications clicked");
    console.log('Person icon clicked');
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={toggleDropdownVisibility}>
      <View style={styles.container}>
        <SparklesIcon stroke="black" width={24} height={24} fill="white" style={styles.icon} />
        <Text style={styles.text}>All Categories</Text>

        {isDropdownVisible ? (
          <ChevronUpIcon color="black" />
        ) : (
          <ChevronDownIcon color="black" />
        )}

        <TouchableOpacity onPress={handlePersonIconPress}>
          <BellIcon name="user" size={24} color="black" style={styles.personIcon} />
        </TouchableOpacity>
      </View>

      {isDropdownVisible && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleOptionPress(item)}>
                <Text style={styles.option}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

HeaderDropdown.propTypes = {
  // Add prop types as needed
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: -175,
  },
  icon: {
    marginRight: 5,
  },
  text: {
    marginLeft: 5,
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  personIcon: {
    marginLeft: 'auto',
    marginRight: -175,
  },
  dropdown: {
    marginTop: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 1,
  },
  option: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HeaderDropdown;
