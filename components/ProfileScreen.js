import { Text, View, Image, Button } from 'react-native';
import React from 'react';
import { styles } from '../styles/style';
import { logout } from '../redux/loginReducer';

const ProfileScreen = ({ navigation }) => {
    const changeTheme = () => {
      console.log('Functionallity will be added in next versions');
    }

    return (
      <View style={{ 
                height: '100%',
                backgroundColor: '#664E88',
                alignItems: 'center' 
              }}>
          <View style={{
                backgroundColor: '#4B3869',
                flexDirection: 'row',
                margin: 10,
                width: 300,
                padding: 5,
                borderRadius: 5
          }}>
            <Image
              style={{ width: 50, height: 50, marginRight: 5 }}
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
              <Button title='Change theme to light' onPress={changeTheme} />
              <Button title='Logout' onPress={() =>
                  navigation.navigate('Login', {})
              } />
          </View>
      </View>
    );
}

export default ProfileScreen