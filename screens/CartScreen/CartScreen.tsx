import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const CartScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>Cart Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CartScreen;
