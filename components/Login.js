import { styles } from "../styles/style"
import React from "react"
import { SafeAreaView,
         View,
         TextInput,
         Text,
         Alert,
         TouchableOpacity,
         ActivityIndicator } from "react-native"
import { Formik } from 'formik';
import { useEffect } from "react";

const Login = ({ navigation }) => {
    const [isLoading, setLoading] = React.useState(false);

    const loginHandle = (userName, password) => {

      const foundUser = Users.filter( item => {
          return userName == item.username && password == item.password;
      });
      signIn(foundUser);
  }

    const checkEmail = (e) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regex.test(e)
    }

    const checkPassword = (e) => {
      const regex = /^\w{8,}$/
      return regex.test(e)
    }

    const authorize = async (values) => {

      if (checkEmail(values.email) && checkPassword(values.password)) {
        let {email, password} = values
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
    return (
        <SafeAreaView style={styles.container}>
          {isLoading === true 
          ? <ActivityIndicator size="large" color="indigo" /> 
          : ( 
          <Formik
            initialValues={{ email: 'eve.holt@reqres.in', password: 'cityslicka' }}
            onSubmit={(values, {resetForm}) => {
              setLoading(true)
              if (authorize(values)) {
                // resetForm()
                values.email = 'eve.holt@reqres.in'
                values.password = 'cityslicka'
              } else {
                Alert.alert('Incorrect login or password!', [{text: 'OK'}])
                alert('Incorrect login or password!')
              }
            }}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput style={styles.input}
                  placeholder='Email'
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <TextInput style={styles.input}
                  placeholder='Password'
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry={true}
                  value={values.password}
                />
                <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
                  <Text>Login</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
          )}
        </SafeAreaView>
    )
}

export default Login

