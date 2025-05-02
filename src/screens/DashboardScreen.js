import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { db } from '../services/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth } from '../services/firebase';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {
  const [habits, setHabits] = useState([]);
  const navigation = useNavigation();
  const user = auth.currentUser;

  useEffect(() => {
    const fetchHabits = async () => {
      if (user) {
        const habitsCollection = collection(db, 'users', user.uid, 'habits');
        const habitsSnapshot = await getDocs(habitsCollection);
        const habitsList = habitsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHabits(habitsList);
      }
    };

    fetchHabits();
  }, [user]);

  const renderHabitItem = ({ item }) => (
    <TouchableOpacity
      style={styles.habitCard}
      onPress={() => navigation.navigate('HabitDetails', { habitId: item.id })} // Navegar a Detalles
    >
      <Text style={styles.habitName}>{item.name}</Text>
      <Text style={styles.habitGoal}>Meta: {item.goal} {item.goalUnit}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Hábitos</Text>
      <FlatList
        data={habits}
        renderItem={renderHabitItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        style={styles.addHabitButton}
        onPress={() => { /* TODO:  Navegar a la pantalla de Agregar Hábito */ }}
      >
        <Text style={styles.addHabitButtonText}>Agregar Hábito</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  habitCard: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  habitName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  habitGoal: {
    fontSize: 14,
    color: 'gray',
  },
  addHabitButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  addHabitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DashboardScreen;