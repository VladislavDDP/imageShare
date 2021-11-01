import { Text, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from '../styles/style'
import { connect } from 'react-redux'
import { skipPages } from '../redux/feedsReduces'
import styled, { ThemeProvider } from 'styled-components/native'
import { useSelector, useDispatch } from 'react-redux'
import { switchTheme } from '../redux/themeReducer'
import { lightTheme, darkTheme } from '../theme'

const ProfileScreen = ({ navigation, ...props } : any) => {
    const theme = useSelector((state: any) => state.themeSwitcher.theme)
    const dispatch = useDispatch()

    type IData = {
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
    })

    interface IResult {
      data: Array<any>
    }
    const setProfile = (email: string) => {
      const getUser = async () => {
        let result: IResult = {data: []}
        for (let i = 1; i < 3; i++) {
          const response = await fetch(`https://reqres.in/api/users?page=${i}`)
          const json = await response.json()
          result = {data: [...result.data, ...json.data]}
        }
        const user = result.data.filter( item => {
          return email == item.email
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
      <ThemeProvider theme={theme}>
        <Container>
            <View style={styles.user_info}>
              <Image style={styles.profile_photo} source={{uri: data.avatar}}/>
              <View style={styles.profile_description}>
                <Text style={styles.white_color}>{data.email}</Text>
                <Text style={styles.white_color}>{data.first_name} {data.last_name}</Text>
              </View>
            </View>
            <View style={styles.max_width}>
              {theme.mode === 'light'
                ? 
                <TouchableOpacity style={styles.changeThemeBtn} onPress={() => dispatch(switchTheme(darkTheme))}>
                  <Text>Change theme to dark</Text>
                </TouchableOpacity>
                : 
                <TouchableOpacity style={styles.changeThemeBtn} onPress={() => dispatch(switchTheme(lightTheme))}>
                  <Text>Change theme to light</Text>
                </TouchableOpacity>
              }
              <TouchableOpacity style={styles.logoutBtn} onPress={logoutAction}>
                <Text>Logout</Text>
              </TouchableOpacity>
            </View>
        </Container>
      </ThemeProvider>
    );
}

type ILoginPage = {
  email: string
}

type IState = {
  loginPage: ILoginPage
}

const mapStateToProps = (state: IState) => ({
  email: state.loginPage.email
})

export default connect(mapStateToProps, {skipPages})(ProfileScreen)

const Container = styled.View`
  flex: 1;
  background-color: ${(props: any) => props.theme.BACKGROUND_COLOR}
` 