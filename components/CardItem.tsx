//@ts-nocheck
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NewsData} from '../utils/types';
import {Card, useTheme} from 'react-native-paper';
import {NavigationProp, Route} from '@react-navigation/native';

type Props = {
  title: string;
  image_url: string;
  description: string;
  content: string;
  navigation: NavigationProp<Route>;
};

const placeholderImage = require('../assets/images/news1.jpg');

const CardItem = (props: Props) => {
  const theme = useTheme();
  const handlePress = () => {
    props.navigation.navigate('NewsOverview', {
      title: props.title,
      description: props.description,
      image_url: props.image_url,
      content: props.content,
    });
  };
  return (
    <Pressable onPress={() => handlePress()}>
      <Card
        style={{
          marginVertical: 10,
          backgroundColor: theme.colors.elevation.level5,
          marginHorizontal: 10,
          height: 'auto',
        }}>
        <Card.Cover
          style={styles.image}
          borderRadius={10}
          source={
            props.image_url != null ? {uri: props.image_url} : placeholderImage
          }
        />

        <Card.Title
          title={props.title}
          subtitle={props.description.split('\n')[0]}
          titleNumberOfLines={1}
        />
      </Card>
    </Pressable>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  image: {
    
  },
});
