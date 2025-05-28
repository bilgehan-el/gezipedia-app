import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Tab = createBottomTabNavigator();


const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#559BD9",
      },
      headerTintColor: "#fff",
      tabBarActiveTintColor: "#2165BF",
      tabBarInactiveTintColor: "#559BD9",
      tabBarStyle: {
        backgroundColor: "#F2F2F2",
      },

      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Home") iconName = "home";
        else if (route.name === "Search") iconName = "search";
        else if (route.name === "Favorites") iconName = "heart";
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: "Home", headerTitleAlign: "center" }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{ title: "Search", headerTitleAlign: "center" }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{ title: "Favorites", headerTitleAlign: "center" }}
    />
  </Tab.Navigator>
);

export default MainTabs;
