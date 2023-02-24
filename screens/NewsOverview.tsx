import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ComponentNavigationProps} from '../utils/types';
import DetailsCard from '../components/DetailsCard';

const NewsOverview = (props: ComponentNavigationProps) => {
  const {title, description, content, image_url} = props?.route?.params;
  return (
   <DetailsCard title={title} description={description} content={content} image_url={image_url}/>
  );
};

export default NewsOverview;

const styles = StyleSheet.create({});
