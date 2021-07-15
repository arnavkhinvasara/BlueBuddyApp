import AsyncStorage from '@react-native-async-storage/async-storage';

export default async(usernameToAdd) => {
    try {
        await AsyncStorage.setItem('username', usernameToAdd)
        console.log("Success with async storage!")
    } catch (error) {
        console.log(error)
    }
}