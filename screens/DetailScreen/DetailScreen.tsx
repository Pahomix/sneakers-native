import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {Sneaker} from "../../interface/sneaker";

interface DetailScreenProps {
  route: {
    params: {
      sneaker: Sneaker;
    };
  };
  navigation: any;
}

const onAddToCart = () => {
  console.log('Item added to cart');
};

const DetailScreen: React.FC<DetailScreenProps> = ({ route, navigation }) => {
  const { sneaker } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: sneaker.photo }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{sneaker.title}</Text>
        <Text style={styles.price}>${sneaker.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.button} onPress={onAddToCart}>
          <Text style={styles.buttonText}>Добавить в корзину</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default DetailScreen;
