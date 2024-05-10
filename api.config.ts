import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Создание экземпляра Axios с базовыми настройками
const axiosInstance = axios.create({
  baseURL: 'http://10.0.2.2:8080',
});

const setAuthToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axiosInstance.defaults.headers.common['Authorization'];
    }
  } catch (error) {
    console.error('Error setting auth token:', error);
  }
};

setAuthToken();

export default axiosInstance;
