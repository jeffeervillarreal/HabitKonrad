import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DashboardScreen from '../screens/DashboardScreen';
import HabitDetailsScreen from '../screens/HabitDetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AchievementsScreen from '../screens/AchievementsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Iniciar Sesión' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Registrarse' }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Mis Hábitos' }} />
        <Stack.Screen name="HabitDetails" component={HabitDetailsScreen} options={{ title: 'Detalles del Hábito' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configuración' }} />
        <Stack.Screen name="Achievements" component={AchievementsScreen} options={{ title: 'Logros' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;