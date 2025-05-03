import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const HabitDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Access the habitId passed from the DashboardScreen (or wherever you navigate from)
  const { habitId } = route.params;

  //  TODO:  Fetch the habit details from Firestore using the habitId
  //  For now, let's use some placeholder data
  const habit = {
    name: "Placeholder Habit",
    goal: 3,
    goalUnit: "times",
    frequency: "Daily",
    startDate: "2024-05-02"
  };

  const goBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habit Details</Text>

      {/* Display Habit Information */}
      <Text style={styles.detailText}>Name: {habit.name}</Text>
      <Text style={styles.detailText}>Goal: {habit.goal} {habit.goalUnit}</Text>
      <Text style={styles.detailText}>Frequency: {habit.frequency}</Text>
      <Text style={styles.detailText}>Start Date: {habit.startDate}</Text>

      {/* TODO:  Display Progress Information (e.g., a chart or list) */}

      {/* Button to go back */}
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>

      {/* TODO:  Buttons to edit the habit, add progress, etc. */}

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
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  //  Add more styles as needed
});

export default HabitDetailsScreen;