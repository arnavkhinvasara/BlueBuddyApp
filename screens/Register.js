import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import colors from '../constants/colors'
import genericInfo from '../constants/genericInfo'

import asyncstorage from '../databaseLogic/asyncstorage'
import { setUserAuthData } from '../api/firebase'


const Register = ({route}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const usernameHandler = usernameText => {setUsername(usernameText)}
    const passwordHandler = passwordText => {setPassword(passwordText)}

    const registerButtonHandler = async() => {
        //VALIDATION FIRST
        await asyncstorage(username)
        await setUserAuthData(username, password)
        
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <View style={styles.logoContainer}>
                    <Ionicons name='md-aperture' size={100} color={colors.primary}/>
                </View>
                <View style={styles.welcome}>
                    <Text style={styles.welcomeAppText}>{genericInfo.appName}</Text>
                </View>
                <View style={styles.registerBox}>
                    <View style={styles.registerTextContainer}>
                        <Text style={styles.registerText}>Register!</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Enter Username' style={styles.inputFields} value={username} onChangeText={usernameHandler}/>
                        <TextInput placeholder='Enter Password' style={styles.inputFields} secureTextEntry={true} value={password} onChangeText={passwordHandler}/>
                        <TouchableOpacity style={styles.registerButton} onPress={registerButtonHandler}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*
                    <Text>{route.params.tester}</Text>
                */}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoStyle: {
        width: '80%',
        height: '80%'
    },
    welcome: {
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeAppText: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 0.12 * Dimensions.get('window').width,
        textAlign: 'center'
    },
    registerBox: {
        padding: 15,
        borderColor: colors.primary,
        borderWidth: 3,
        width: '80%',
        alignItems: 'center'
    },
    registerTextContainer: {
        marginBottom: 20
    },
    registerText: {
        textAlign: 'center',
        fontSize: 30
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputFields: {
        padding: 10,
        margin: 10,
        borderColor: colors.primary,
        borderWidth: 2,
        fontSize: 17,
        width: 200
    },
    registerButton: {
        marginTop: 22,
        backgroundColor: colors.primary,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 19
    }
})

export default Register