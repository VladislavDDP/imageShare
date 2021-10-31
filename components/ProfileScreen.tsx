import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../styles/style';
import { connect } from 'react-redux';
import { skipPages } from '../redux/feedsReduces';

const ProfileScreen = ({ navigation, ...props } : any) => {
    const changeTheme = () => {
      console.log('Functionallity will be added in next versions');
    }

    interface IData {
      avatar: string
      email: string | null
      first_name: string | null
      last_name: string | null
      id: number | null
    }

    const [data, setData] = React.useState<IData>({
      avatar: 'https://blog.logrocket.com/wp-content/uploads/2018/08/complete-guide-default-props-react.jpeg',
      email: '',
      first_name: '',
      last_name: '',
      id: 1
    });

    const setProfile = (email: string) => {
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
            <Image style={styles.profile_photo} source={{uri: data.avatar}}/>
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

const mapStateToProps = (state: any) => ({
  email: state.loginPage.email
})

export default connect(mapStateToProps, {skipPages})(ProfileScreen)