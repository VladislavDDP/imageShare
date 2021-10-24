import CustomButton from './CustomButton';
import { Text, View, Image } from 'react-native';
import React from 'react';
import { styles } from '../styles/style';
import { logout } from '../redux/loginReducer';

const ProfileScreen = ({ navigation }) => {
    const loadLoginScene = () => {
      logout()
      navigation.navigate('Login')
    }

    const changeTheme = () => {
      console.log('Functionallity will be added in next versions');
    }

    return (
      <View style={{ 
                height: '100vh',
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
              <Text style={styles.text}>Name</Text>
              <Text style={styles.text}>Email</Text>
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