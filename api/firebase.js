import firebase from 'react-native-firebase'

export const setUserAuthData = async(usernameField, passwordField) => {
    try{
        await firebase
        .firestore()
        .doc('UserInfo')
        .set({
            username: usernameField,
            password: passwordField
        })
        console.log('Success with firebase')
    } catch (error) {
        console.log(error)
    }
}