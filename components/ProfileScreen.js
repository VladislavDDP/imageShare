import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../styles/style';
import { connect } from 'react-redux';
import { skipPages } from '../redux/feedsReduces';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = ({ navigation, ...props }) => {
    const changeTheme = () => {
      console.log('Functionallity will be added in next versions');
    }

    const [data, setData] = React.useState([]);

    const setProfile = (email) => {
      const getUser = async () => {
        const response1 = await fetch(`https://reqres.in/api/users?page=1`)
        const response2 = await fetch(`https://reqres.in/api/users?page=2`)
        const json1 = await response1.json();
        const json2 = await response2.json();
        const result = {data: [...json1.data, ...json2.data]}
        const user = result.data.filter( item => {
          return email == item.email;
        })[0]
        setData(user)
        return user
      }
      return getUser()
    }

    React.useEffect(() => {
      setProfile(props.email);
    }, []);

    const logoutAction = () => {
      navigation.navigate('Login', {})
      props.skipPages()
    }

    return (
      <View style={styles.profile_view}>
          <View style={styles.user_info}>
            <Image
              style={styles.profile_photo}
              source={{
                uri: data.avatar? data.avatar : null,
              }}
            />
            <View style={styles.profile_description}>
              <Text style={styles.white_color}>{data.email}</Text>
              <Text style={styles.white_color}>{data.first_name} {data.last_name}</Text>
            </View>
          </View>
          <View style={styles.max_width}>
            <TouchableOpacity style={styles.changeThemeBtn} onPress={changeTheme}>
              <Text>Change theme to light</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutBtn} onPress={logoutAction}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
}

const mapStateToProps = (state) => ({
  email: state.loginPage.email
})

export default connect(mapStateToProps, {skipPages})(ProfileScreen)