import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CountryDetailScreen from './src/screens/CountryDetailScreen';
import { FavoritesProvider } from './src/context/FavoritesContext';
import MainTabs from './src/navigation/MainTabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#4893d6', 
            },
            headerTintColor: '#fff',      
            headerTitleAlign: 'center', 
          }}
        >
          <Stack.Screen
            name="Tabs"
            component={MainTabs}
            options={{ headerShown: true, title: 'Gezipedia' }}
          />
          
          <Stack.Screen
            name="CountryDetail"
            component={CountryDetailScreen}
            options={{ title: 'Gezipedia', headerTitleAlign: 'center'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}