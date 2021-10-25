import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
      justifyContent: 'center',
      alignItems: 'center'
    },
    form: {
      width: 50,
      display: 'flex',
      flexDirection: 'column'
    },
    input: {
      marginBottom: 10,
      color: '#fff',
      width: 100,
      height: 30
    },
    text: {
      color: '#fff'
    },
    button: {
      marginTop: 10
    }
});