import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const CustomButton = () => {
  return (
    <button style={{
              backgroundColor: 'cadetblue',
              border: 'none',
              padding: '10px',
              width: '80%'
         }} onClick={() => alert('hello')}>Login</button>
  )
}


export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasFocus: false
    };
  }

  checkEmail(e) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (regex.test(e.target.value)) {

    }
  }

  checkPassword(e) {
    const regex = /^\w{8,}$/
    if (regex.test(e.target.value)) {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
                   maxLength='30'
                   autoComplete='email'
                   placeholder='Login'
                   onChange={this.checkEmail.bind(this)} /> 
        <TextInput style={styles.input}
                   maxLength='30'
                   secureTextEntry={true}
                   placeholder='Password'
                   onChange={this.checkPassword.bind(this)} /> 
        <CustomButton style={styles.login_btn} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    border: 'none',
    marginBottom: '10px',
    color: '#fff'
  },
  login_btn: {
    border: 'none',
    color: '#fff',
    backgroundColor: 'cadetblue'
  }
});
