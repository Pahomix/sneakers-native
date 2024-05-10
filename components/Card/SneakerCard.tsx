import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {Sneaker} from "../../interface/sneaker";

interface SneakerCardProps {
  sneaker: Sneaker;
  onPress?: () => void;
}

const SneakerCard: React.FC<SneakerCardProps> = ({ sneaker, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        {sneaker.photo && <Image source={{ uri: sneaker.photo }} style={styles.image} />}
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{sneaker.title}</Text>
        <Text style={styles.price}>${sneaker.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
    padding: 12,
  },
  imageContainer: {
    marginRight: 12,
    flex: 1,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    marginBottom: 8,
  },
  sizeContainer: {
    flexDirection: 'row',
  },
});

export default SneakerCard;
