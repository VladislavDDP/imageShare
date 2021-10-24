import CustomButton from "./CustomButton"
import { styles } from "../styles/style"
import React from "react"
import { SafeAreaView, View, TextInput } from "react-native"

const Login = ({ navigation }) => {

    const checkEmail = (e) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (regex.test(e.target.value)) {
        return true
      }
    }

    const checkPassword = (e) => {
      const regex = /^\w{8,}$/
      if (regex.test(e.target.value)) {
        return true
      }
    }

    const loadScene = () => {
      // if (checkEmail() && checkPassword()) {
        navigation.navigate('Main')
      // }
    }

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.form}>
            <TextInput style={styles.input}
              maxLength='30'
              autoComplete='email'
              placeholder='Login'
              onChange={checkEmail.bind(this)} />
            <TextInput style={styles.input}
              maxLength='30'
              secureTextEntry={true}
              placeholder='Password'
              onChange={checkPassword.bind(this)} />
            <CustomButton title='Login' action={loadScene} />
          </View>
        </SafeAreaView>
    )
}

export default Login

