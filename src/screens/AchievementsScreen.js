import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AchievementsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Achievements Screen</Text>
      {/* TODO: Add your achievements content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AchievementsScreen;