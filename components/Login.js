import CustomButton from "./CustomButton"
import { styles } from "../styles/style"
import React from "react"
import { SafeAreaView, View, TextInput, Button } from "react-native"
import { Formik } from 'formik';
import { login } from "../redux/loginReducer";

const Login = ({ navigation }) => {
    const checkEmail = (e) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regex.test(e)
    }

    const checkPassword = (e) => {
      const regex = /^\w{8,}$/
      return regex.test(e)
    }

    const authorize = (values) => {
      if (checkEmail(values.email) && checkPassword(values.password)) {
        let {email, password} = values
        navigation.navigate('Main')
        login(email, password)
        return true
      }
    }
    return (
        <SafeAreaView style={styles.container}>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, {resetForm}) => {
              if (authorize(values)) resetForm()
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
                <CustomButton title='Login'
                 action={handleSubmit} />
              </View>
            )}
          </Formik>
        </SafeAreaView>
    )
}

export default Login

