import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../services/firebase'; // Import Firebase Auth for logout

const SettingsScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user
      //  Navigation will likely be handled automatically by your auth state listener
      //  or you might want to manually navigate to the Login screen
      navigation.navigate('Login'); //  Example: Navigate to Login
    } catch (error) {
      console.error("Error signing out:", error);
      alert("Error signing out.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      {/* Example: User Profile Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        {/* TODO: Display user information (name, email, etc.) */}
        <Text>User Name: {/* User's name */}</Text>
        <Text>Email: {/* User's email */}</Text>
        {/* TODO: Button to edit profile */}
      </View>

      {/* Example: App Preferences Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        {/* TODO: Settings for theme, notifications, etc. */}
        <Text>Theme: {/* Current theme */}</Text>
        <Text>Notifications: {/* Notification status */}</Text>
        {/* TODO: Toggles or buttons to change preferences */}
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      {/* TODO: Add more settings options as needed */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  //  Add more styles as needed
});

export default SettingsScreen;
