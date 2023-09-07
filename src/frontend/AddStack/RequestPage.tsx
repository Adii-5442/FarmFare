import React, {useState, useRef} from 'react';
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

const RequestPage = (props: any) => {
  const {user} = useAuth();
  const [userType, setUserType] = useState('');
  const slideAnimation = useRef(new Animated.Value(1)).current;

  const handleNext = async () => {
    console.log('Pushing user Type to firebase');

    // await firestore()
    //   .collection('users')
    //   .doc(user?.uid)
    //   .set({userType: userType}, {merge: true})
    //   .then(() => {
    //     ToastAndroid.show('Wohoo!!', ToastAndroid.SHORT);
    //     props.navigation.navigate('Location');
    //   });
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Image
          source={require('../../components/assets/backIcon.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <View style={styles.nextButtonView}>
        <TouchableOpacity
          style={styles.nextButton}
          disabled={!userType}
          onPress={handleNext}>
          <Image
            source={require('../../components/assets/next.png')}
            style={styles.nextIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#77e0f2',
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.BLACK,
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

export default RequestPage;
