import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from "axios";
import {API_BASE_URL} from "../../services/sneakers.service";

export default function AuthScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const authenticationHandler = async () => {
    try {
      const respone = await axios.post(`${API_BASE_URL}/login`, {
        username,
        password
      });
      const { token } = respone.data;
      console.log(token)
      await AsyncStorage.setItem('token', token);
      navigation.navigate('Home');
    } catch (e) {
      setError('Неверное имя пользователя или пароль');
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
        <View className="flex-1 justify-center items-center w-full px-8">
          <View className="mb-20`">
            <Text className="text-xl font-semibold">Alexey Efremov</Text>
            <Text className="text-gray-500">Магия кроссовок в простом - играй красиво</Text>
          </View>
          <View className="w-full">
            <TextInput
              className="border border-gray-400 rounded-md mb-4 px-4 py-2"
              placeholder="Имя пользователя"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            <TextInput
              className="border border-gray-400 rounded-md mb-4 px-4 py-2"
              placeholder="Пароль"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity className="bg-black rounded-md px-4 py-2" onPress={authenticationHandler}>
              <Text className="text-white font-semibold">Авторизоваться</Text>
            </TouchableOpacity>
          </View>
          {error && <Text className="text-red-500 mt-4">{error}</Text>}
        </View>
    </SafeAreaView>

  );
}
