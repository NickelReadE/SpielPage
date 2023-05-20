import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ChatBubbleOvalLeftIcon, BookmarkIcon, EllipsisHorizontalIcon } from 'react-native-heroicons/outline';
import {MapPinIcon} from 'react-native-heroicons/solid'

const Pic1 = require('./Friendsimage.png');
const Pic2 = require('./ProfilePic.png');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.infoContainer}>
          <Image style={styles.image2} source={Pic2} />
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>David Keating</Text>
            <Text style={styles.grayText}>@out_in_the_outback 4hr</Text>
          </View>
          <View style={styles.ellipsisContainer}>
            <EllipsisHorizontalIcon color="black" />
          </View>
        </View>
      </View>

      <View style={styles.middleContainer}>
        <View style={styles.postContainer}>
          <Image style={styles.postImage} source={require('./postpic.png')} />
          <View style={styles.postTextContainer}>
            <View style={styles.postHeaderContainer}>
              <Text style={styles.postHeading}>La Ristorante</Text>
              <View style={styles.postRatingContainer}>
                <View style={styles.iconContainer}>
                  <MapPinIcon color="#2DD4CA" />
                </View>
                {/* <Text style={styles.postRating}>10/10</Text> */}
              </View>
            </View>
            <Text style={styles.postLocation}>New York, NY Place                                   10/10</Text>
            <Text style={styles.postExplanationHeading}>One of my fav places of all time!</Text>
            <View style={styles.postDescriptionContainer}>
              <Text style={styles.postDescription}>
                I've been here about 1500 times in my life. Small gig, family-owned. Love the mom & pop who r...
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.averageContainer}>
          <Image style={styles.image} source={Pic1} />
          <Text style={styles.blackText}>   Friend avg 8.6/10        </Text>
          <ChatBubbleOvalLeftIcon color="black" />
          <Text>25  </Text>
          <BookmarkIcon color="black" />
          <Text>32  </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  topContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image2: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'column',
    marginRight: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  grayText: {
    color: 'gray',
  },
  ellipsisContainer: {
    alignItems: 'flex-end',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  postContainer: {
    width: '92%',
    aspectRatio: 1.5,
    borderWidth: 0.5,
    borderRadius: 40,
    borderColor: 'rgba(211, 211, 211, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100,
  },
  postImage: {
    width: '100%',
    height: '130%',
    resizeMode: 'cover',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    bottom: -30,
  },
  postTextContainer: {
    position: 'absolute',
    width: '100%',
    height: '90%',
    backgroundColor: 'white',
    padding: 5,
    bottom: -300,
  },
  postHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  postHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  postRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  postRating: {
    fontSize: 16,
    color: '#2DD4CA',
  },
  postLocation: {
    fontSize: 16,
    color: '#2DD4CA',
    marginBottom: 10,
  },
  postExplanationHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 10,
    color: 'black',
  },
  postDescriptionContainer: {
    marginTop: 10,
    fontSize: 10,
  },
  postDescription: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    marginBottom: -50,
    alignItems: 'center',
  },
  averageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '30%',
    marginBottom: 55,
    marginTop: -10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  averageText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  blackText: {
    fontWeight: 'normal',
    color: 'black',
  },
});

export default HomeScreen;
