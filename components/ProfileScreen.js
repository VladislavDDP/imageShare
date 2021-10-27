import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../styles/style';
import { logout } from '../redux/loginReducer';

const ProfileScreen = ({ navigation }) => {
    const changeTheme = () => {
      console.log('Functionallity will be added in next versions');
    }

    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    const setProfile = (email) => {
      const getUser = async () => {
        const response = await fetch(`https://reqres.in/api/users`);
        const json = await response.json();
        const user = json.data.filter( item => {
          return email == item.email;
        })
        setData(user[0]);
        return user[0]
      }
      return getUser()
    }

    React.useEffect(() => {
      setProfile('eve.holt@reqres.in');
    }, []);

    return (
      <View style={{ 
                alignItems: 'center',
                backgroundColor: '#664E88',
                height: '100%'
              }}>
          <View style={{
                backgroundColor: '#4B3869',
                borderRadius: 5,
                flexDirection: 'row',
                margin: 10,
                padding: 5,
                width: 300
          }}>
            <Image
              style={{ width: 50, height: 50, marginRight: 5 }}
              source={{
                uri: data.avatar,
              }}
            />
            <View>
              <Text style={{color: 'yellow'}}>{data.email}</Text>
              <Text style={{color: 'yellow'}}>{data.first_name}</Text>
            </View>
          </View>
          <View style={{width: '100%'}}>
            <TouchableOpacity style={styles.changeThemeBtn} onPress={changeTheme}>
              <Text>Change theme to light</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutBtn} onPress={() => {
                  navigation.navigate('Login', {})
                }
              }>
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}

export default ProfileScreen