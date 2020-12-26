import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  item: {
    backgroundColor: theme.colors.white,
    padding: 10,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  topContainer: { flexDirection: 'row' },
  titleContainer: { alignItems: 'flex-start' },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  numberContainer: {},
  textContainer: { textAlign: 'center' },
});

const RepositoryItem = ({ item }) => {
  const addKtoNumber = (number) => {
    if (number > 1000) {
      return `${Math.round(number / 100 + Number.EPSILON * 10) / 10}k`;
    }
    return number.toString();
  };

  return (
    <View style={styles.item}>
      <View style={styles.topContainer}>
        <Image
          style={styles.logo}
          source={{ uri: item.ownerAvatarUrl }}
        ></Image>
        <View style={styles.titleContainer}>
          <Text fontWeight='bold' fontSize='subheading'>
            {item.fullName}
          </Text>
          <Text color='textSecondary'>{item.description}</Text>
          <Text color='white' backgroundColor='primary'>
            {item.language}
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.numberContainer}>
          <Text align='center' fontWeight='bold'>
            {addKtoNumber(item.stargazersCount)}
          </Text>
          <Text color='textSecondary'>Stars</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text align='center' fontWeight='bold'>
            {addKtoNumber(item.forksCount)}
          </Text>
          <Text color='textSecondary'>Forks</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text align='center' fontWeight='bold'>
            {addKtoNumber(item.reviewCount)}
          </Text>
          <Text color='textSecondary'>Reviews</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text align='center' fontWeight='bold'>
            {addKtoNumber(item.ratingAverage)}
          </Text>
          <Text color='textSecondary'>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
