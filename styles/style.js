import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
      justifyContent: 'center',
    },
    form: {
      width: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    input: {
      color: 'black',
      height: 40,
      padding: 10,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10,
      backgroundColor: '#999',
      borderRadius: 10
    },
    loginBtn: {
      borderRadius: 25,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "indigo",
      marginLeft: 20,
      marginRight: 20
    },
    logoutBtn: {
      borderRadius: 25,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#de6488",
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10
    },
    changeThemeBtn: {
      borderRadius: 25,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "indigo",
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10
    }
});