import CustomButton from './CustomButton';
import { Text, View, Image } from 'react-native';
import React from 'react';
import { styles } from '../styles/style';

const ProfileScreen = ({ navigation }) => {
    const loadLoginScene = () => {
      navigation.navigate('Login')
    }

    const changeTheme = () => {
      if (styles.color === '#000') {
        styles.color = '#4B3869'
      } else {
        styles.color = '#000'
      }
    }

    return (
      <View style={{ 
                flex: 1,
                backgroundColor: '#664E88',
                alignItems: 'center' 
              }}>
          <View style={{
                backgroundColor: '#4B3869',
                flexDirection: 'row',
                margin: '20px',
                width: '50vw',
                padding: '20px',
                borderRadius: '20px'
          }}>
            <Image
              style={{ width: 50, height: 50, marginRight: '20px' }}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <View>
              <Text>Name</Text>
              <Text>Email</Text>
            </View>
          </View>
          <View>
              <CustomButton title='Change theme to light' action={changeTheme} />
              <CustomButton title='Logout' action={loadLoginScene} />
          </View>
      </View>
    );
}

export default ProfileScreen