import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const OptionScreen = ({navigation}) => {

  const handleLogout = async () => {
    // Удаление токена аутентификации из AsyncStorage
    try {
      await AsyncStorage.removeItem('token');
      // Навигация на экран аутентификации
      navigation.navigate('AuthScreen');
    } catch (error) {
      console.error('Ошибка при выходе из аккаунта:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Настройки</Text>
        <Button title="Выйти с аккаунта" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default OptionScreen;
