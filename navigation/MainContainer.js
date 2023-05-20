import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeIcon, UsersIcon, PlusIcon, BookmarkIcon, UserIcon } from "react-native-heroicons/outline";
import HeaderDropdown from './HeaderDropdown';

// Screens
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import FriendsScreen from './screens/FriendsScreen';
import ListsScreen from './screens/ListsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainContainer() {
  const headerOptions = {
    headershown : false,
    headerTintColor : "white",
    headerStyle : "white",
    headerTitle: props => <HeaderDropdown title={props.children} />,
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'white',
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={headerOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        color : "white",
        headerShown : false,
        headerTintColor : "white",
        headerStyle : "white",
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
  
            if (rn === "Home") {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              return <HomeIcon stroke = {color} color = "white" size = {size}/>
            } else if (rn === "Create") {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              return <PlusIcon stroke = {color} color = "white" size = {size}/>;
  
            } else if (rn === "Friends") {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              return <UsersIcon stroke = {color} color = "white" size = {size}/>;
            } else if (rn === "Lists") {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              return <BookmarkIcon stroke = {color} color = "white" size = {size}/>;
            } else if (rn === "Profile") {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              return <UserIcon stroke = {color} color = "white" size = {size}/>;
            }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Friends" component={FriendsScreen} />
      <Tab.Screen name="Create" component={CreateScreen} />
      <Tab.Screen name="Lists" component={ListsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MainContainer;
