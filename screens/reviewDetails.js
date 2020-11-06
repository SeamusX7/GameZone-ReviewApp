import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {
  const rating= navigation.getParam('rating');

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam('title')}</Text>
        <Text>{navigation.getParam('body')}</Text>
        <View style={styles.rating}>
          <Text>Gamezone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rating: {
    borderTopColor: '#eee',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    paddingTop: 16,    
  }
});