import React, { useEffect } from "react"
import FormInput from "./FormInput"
import { styles } from "../styles/style"
import { connect } from "react-redux"
import { View, Text,
         Alert, TouchableOpacity, ActivityIndicator } from "react-native"
import { login } from "../redux/loginReducer"
import { SafeAreaView } from "react-native-safe-area-context"
import AsyncStorage from '@react-native-async-storage/async-storage'

const LOGIN_DATA = '@login'

type ILoginData = {
  email: string
  password: string
}

const Login = ({ navigation, ...props }: any) => {
  const [isLoading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({
    email: '',
    password: ''
  })
  const [error, setError] = React.useState('')

  const storeLoginData = async () => {
    try {
      const loginData = JSON.stringify(data)
      await AsyncStorage.setItem(LOGIN_DATA, loginData)
    } catch(e) {

    }
  }

  useEffect(() => {
    (async () => {
      try {
        const loginData: string | null = await AsyncStorage.getItem(LOGIN_DATA)
        if (loginData) {
          setData(JSON.parse(loginData))
        }
      } catch(e) {} 
    })()
  }, [])

  const validateData = ({email, password}: ILoginData) => {
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
      const response = await props.login(email, password)
      const networkTrouble = setTimeout(() => {
        setLoading(false)
      }, 10000)
      if (!response) {
        Alert.alert('Incorrect login or password!')
      } else {
        navigation.navigate('Main')
        storeLoginData()
        clearTimeout(networkTrouble)
      }
      setLoading(false)
      setError('')
    }
  }

  const handleOnTextChange = (value: string, fieldName: string) => {
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
                         onChangeText={(value: string) => handleOnTextChange(value, 'email')} 
                         value={data.email} />
              <FormInput style={styles.input}
                         autoCapitalize='none'
                         placeholder='Password'
                         onChangeText={(value: string) => handleOnTextChange(value, 'password')}
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

const mapStateToProps = (state: any) => ({})
export default connect(mapStateToProps, {login})(Login)

