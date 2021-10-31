import React from "react"
import FormInput from "./FormInput.tsx"
import { styles } from "../styles/style"
import { connect } from "react-redux"
import { View, Text,
         Alert, TouchableOpacity, ActivityIndicator } from "react-native"
import { login } from "../redux/loginReducer"
import { SafeAreaView } from "react-native-safe-area-context"

const Login = ({ navigation, ...props }) => {
  const [isLoading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  });
  const [error, setError] = React.useState('')

  const validateData = ({email, password}) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordRegex = /^\w{8,}$/
    if (!emailRegex.test(email)) {
      setError('Email isn`t valid!')
      return false
    } else if (!passwordRegex.test(password)) {
      setError('Password isn`t valid!')
      return false
    }
    else return true
  }

  const authorize = async () => {
    if (validateData(data)) {
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
          props.login(email, password, resData.token)
          navigation.navigate('Main')
          setError(null)
        } else {
          Alert.alert('Authentification error!')
        } 
        setLoading(false)
      })
    } else {
      setLoading(false)
    }
  }

  const handleOnTextChange = (value, fieldName) => {
    setData({...data, [fieldName]: value})
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.container}>
        {isLoading === true 
        ? <ActivityIndicator size="large" color="indigo" /> 
        : ( 
            <View>
              {error ? <Text style={styles.validating_error}>{error}</Text> : null}
              <FormInput style={styles.input}
                         autoCapitalize='none'
                         placeholder='Email' 
                         onChangeText={(value) => handleOnTextChange(value, 'email')} 
                         value={data.email} />
              <FormInput style={styles.input}
                         autoCapitalize='none'
                         placeholder='Password'
                         onChangeText={(value) => handleOnTextChange(value, 'password')}
                         secureTextEntry={true} 
                         value={data.password} />

              <TouchableOpacity style={styles.loginBtn} onPress={() => {
                  setLoading(true)
                  authorize()
                }}>
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
          )}
      </View>
      </SafeAreaView>
  )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps, {login})(Login)

