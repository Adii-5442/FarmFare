/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import colors from '../../components/styles/colors';
import firestore from '@react-native-firebase/firestore';
import {useAuth} from '../../backend/hooks/useAuth';
import {ToastAndroid} from 'react-native';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const featuredListings = [
  {
    id: 1,
    title: 'Product 1',
    price: '$100',
    location: 'New York',
    image: require('../../components/assets/loginBack.jpg'),
  },
  {
    id: 2,
    title: 'Product 2',
    price: '$150',
    location: 'Los Angeles',
    image: require('../../components/assets/loginBack.jpg'),
  },
  // Add more listings here
];

const Home = (props: any) => {
  const {user, CurrentData} = useAuth();
  const [address, setaddress] = useState('');

  useEffect(() => {
    if (CurrentData.has('address')) {
      let k = CurrentData.get('address');
      if (k.length > 12) {
        k = k.substring(0, 12) + '...';
      }
      setaddress(k);
    }
  }, [CurrentData]);
  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 10,
          backgroundColor: '#b1b5b2',
        }}>
        {/* OLX logo */}
        <Text style={styles.title}>FarmFare</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            style={{marginHorizontal: 5}}
            name="location"
            size={30}
            color={colors.BLACK}
          />
          <Text style={{}}>{address}</Text>
        </View>
      </View>

      {/* Category Selector */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>{/* Category 1 */}</TouchableOpacity>
        <TouchableOpacity>{/* Category 2 */}</TouchableOpacity>
        {/* Add more category buttons */}
      </ScrollView>

      {/* Featured Listings */}
      <ScrollView>
        {featuredListings.map(listing => (
          <TouchableOpacity key={listing.id}>
            <View>
              <Image source={listing.image} style={{width: 200, height: 150}} />
              <Text>{listing.title}</Text>
              <Text>{listing.price}</Text>
              <Text>{listing.location}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Popular Cities */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>{/* City 1 */}</TouchableOpacity>
        <TouchableOpacity>{/* City 2 */}</TouchableOpacity>
        {/* Add more city buttons */}
      </ScrollView>

      {/* Trending Searches */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>{/* Trending Search 1 */}</TouchableOpacity>
        <TouchableOpacity>{/* Trending Search 2 */}</TouchableOpacity>
        {/* Add more trending search buttons */}
      </ScrollView>

      {/* Recently Viewed */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>{/* Recently Viewed Item 1 */}</TouchableOpacity>
        <TouchableOpacity>{/* Recently Viewed Item 2 */}</TouchableOpacity>
        {/* Add more recently viewed items */}
      </ScrollView>

      {/* Footer */}
      <View>{/* Footer links */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    color: colors.BLACK,
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 25,
    marginBottom: 20,
    color: colors.BLACK,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  userImageContainer: {
    width: 200,
    height: 200,
    alignItems: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
  },
  backIcon: {
    height: 30,
    width: 30,
    marginLeft: 15,
    paddingBottom: 15,
    marginTop: 15,
  },
  nextButtonView: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginVertical: 20,
    marginRight: 20,
  },
  nextIcon: {
    height: 65,
    width: 65,
    marginLeft: 15,
    paddingBottom: 15,
    marginTop: 15,
  },
  userTypeOption: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: 20,
    marginRight: 20,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  selectedOption: {
    backgroundColor: '#61d64f',
  },
  optionText: {
    fontSize: 20,
    color: colors.BLACK,
    alignSelf: 'center',
  },
  nextButton: {
    marginTop: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userImage: {
    width: 250,
    height: 250,
  },
});

export default Home;
