import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
      justifyContent: 'center',
    },
    loading: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    },
    feeds_container: {
      flex: 1,
      backgroundColor: '#664E88'
    },
    form: {
      width: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    validating_error: {
      color: '#FF0000',
      marginLeft: 10
    },
    profile_view: {
      alignItems: 'center',
      backgroundColor: '#664E88',
      height: '100%'
    },
    user_info: {
      backgroundColor: '#4B3869',
      borderRadius: 5,
      flexDirection: 'row',
      marginVertical: 10,
      paddingHorizontal: 20,
      paddingVertical: 20
    },
    white_color: {
      color: '#fff'
    },
    max_width: {
      width: '100%'
    },
    profile_photo: {
      width: 100,
      height: 100
    },
    profile_description: {
      marginLeft: 20
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
      backgroundColor: "#592357",
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
    },
    photo_container: {
      marginBottom: 10,
      marginLeft: 0,
      marginRight: 20
    },
    photo: {
      width: '100%',
      height: 300,
      borderRadius: 10,
      margin: 10,
      marginBottom: -30
    },
    photo_description: {
      width: '100%',
      padding: 10,
      position: 'relative',
      color: '#fff',
      backgroundColor: '#bebebe',
      marginLeft: 10,
      borderRadius: 10
    }
});