import { styles } from "../styles/style"
import React from "react"
import { SafeAreaView,
         View,
         TextInput,
         Text,
         Alert,
         TouchableOpacity,
         ActivityIndicator } from "react-native"

const Login = ({ navigation }) => {
  const [isLoading, setLoading] = React.useState(false);
    //email: 'eve.holt@reqres.in', password: 'cityslicka'
  const [data, setData] = React.useState({
    email: '',
    password: ''
  });

  const checkEmail = (e) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(e)
  }

  const checkPassword = (e) => {
    const regex = /^\w{8,}$/
    return regex.test(e)
  }

  const authorize = async () => {
    if (checkEmail(data.email) && checkPassword(data.password)) {
      let {email, password} = data
      await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          'email': email,
          'password': password
        })
      }).then(res => res.json())
      .then(resData => {
        if (resData.token) {
          // login(data.email, resData.token)
          navigation.navigate('Main')
          setLoading(false)
          return true
        } else {
          setLoading(false)
          Alert.alert('Authentification error!')
          return false
        } 
      })
    } else {
      Alert.alert(
        "Validation error",
        "Email should be corrent and password must contain at least 8 symbols",
        [{ text: "OK"}]
      );
    }
  }

  const emailTyping = (value) => {
    setData({
      ...data,
      email: value
    })
  }

  const passwordTyping = (value) => {
    setData({
      ...data,
      password: value
    })
  }

  return (
      <SafeAreaView style={styles.container}>
        {isLoading === true 
        ? <ActivityIndicator size="large" color="indigo" /> 
        : ( 
            <View>
              <TextInput style={styles.input}
                placeholder='Email'
                onChangeText={(e) => emailTyping(e)}
                value={data.email}
              />
              <TextInput style={styles.input}
                placeholder='Password'
                onChangeText={(e) => passwordTyping(e)}
                secureTextEntry={true}
                value={data.password}
              />
              <TouchableOpacity style={styles.loginBtn} onPress={() => {
                  setLoading(true)
                  authorize()
                }}>
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
          )}
      </SafeAreaView>
  )
}

export default Login

