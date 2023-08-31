import React, { useState,useRef} from 'react';
import { View, Text, TouchableOpacity,Animated, StyleSheet ,ImageBackground , Image} from 'react-native';
import colors from '../../components/styles/colors';

const ConsumerType = () => {
  const [userType, setUserType] = useState(null);
  const slideAnimation = useRef(new Animated.Value(0)).current;

  const handleSelection = (selectedType) => {
    setUserType(selectedType);
    slideAnimation.setValue(0);

    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 1000, // You can adjust the animation duration
      useNativeDriver: false,
    }).start();
  };
  let selectedImage = null;

  if (userType === 'Producer') {
    selectedImage = require('../../components/assets/farmer.png');
  } else if (userType === 'Consumer') {
    selectedImage = require('../../components/assets/healthfood.png');
  } else if (userType === 'Both') {
    selectedImage = require('../../components/assets/farmglobe.png');
  }
  const animatedStyle = {
    transform: [
      {
        translateX: slideAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [300, 0], // Adjust the range for desired animation distance
        }),
      },
    ],
  };
  return (
    <ImageBackground source={require('../../components/assets/loginBack.jpg')} style={styles.container}>
      <View style={styles.imageContainer}>
        <Animated.View style={[styles.userImageContainer, animatedStyle]}>
          {selectedImage && (
            <Image source={selectedImage} style={styles.userImage} resizeMode="contain" />
          )}
        </Animated.View>
      </View>
      <View style={{marginVertical:20}}>
        <Text style={styles.subtitle}>How will you use the app?</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.userTypeOption,
          userType === 'Producer' && styles.selectedOption,
        ]}
        onPress={() => handleSelection('Producer')}
      >
        <Text style={styles.optionText}>I'm a Producer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.userTypeOption,
          userType === 'Consumer' && styles.selectedOption,
        ]}
        onPress={() => handleSelection('Consumer')}
      >
        <Text style={styles.optionText}>I'm a Consumer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.userTypeOption,
          userType === 'Both' && styles.selectedOption,
        ]}
        onPress={() => handleSelection('Both')}
      >
        <Text style={styles.optionText}>I'm Both</Text>
      </TouchableOpacity>

      <View style={{alignItems:'center',justifyContent:'center',marginVertical:20}}>
        <TouchableOpacity
          style={styles.nextButton}
          disabled={!userType}
          onPress={() => {
            // Navigate to the appropriate screen based on userType
          }}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
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
    marginBottom: 10,
    color:colors.BLACK
  },
  subtitle: {
    fontSize: 25,
    marginBottom: 20,
    color: colors.BLACK,
    fontWeight: 'bold',
  },
  userImageContainer: {
    width: 200,
    height: 200,
    alignItems: 'center',
  },
  userTypeOption: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: "center",
  },
  selectedOption: {
    backgroundColor: '#61d64f',
  },
  optionText: {
    fontSize: 20,
    color: colors.BLACK,
    alignSelf: "center",
  },
  nextButton: {
    backgroundColor: '#23472f',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical:20,
  },
  userImage: {
    width: 250,
    height: 250,
  },
});

export default ConsumerType;
