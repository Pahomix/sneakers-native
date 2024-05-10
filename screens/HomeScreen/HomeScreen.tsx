import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import SneakerCard from "../../components/Card/SneakerCard";
import {Sneaker} from "../../interface/sneaker";
import {SneakersService} from "../../services/sneakers.service";



export default function HomeScreen({navigation}) {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const sneakersData = await SneakersService.getAllSneakers();
        setSneakers(sneakersData)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error(error);
      }
    };
    fetchData();
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <ScrollView style={{ marginTop: 8, paddingHorizontal: 16 }}>
        {sneakers.map((sneaker) => (
          <SneakerCard key={sneaker.ID} sneaker={sneaker} onPress={() => navigation.navigate('DetailScreen', { sneaker })} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
