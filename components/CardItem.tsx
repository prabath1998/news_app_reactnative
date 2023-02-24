import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NewsData} from '../utils/types';
import {Card, useTheme} from 'react-native-paper';

const CardItem = (props: NewsData) => {
  const theme = useTheme();
  return (
    <Pressable>
      <Card
        style={{
          marginVertical: 10,
          backgroundColor: theme.colors.elevation.level5,
          marginHorizontal: 10,
          height: 'auto',
        }}>
        {props.image_url && (
          <Card.Cover borderRadius={10} source={{uri: props.image_url}} />
        )}
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

const styles = StyleSheet.create({});
