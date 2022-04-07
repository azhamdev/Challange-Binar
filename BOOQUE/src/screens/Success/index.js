import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Background_Color, Button_Primary, Orange, Pink } from '../../assets/utils/colors'
import { ms } from 'react-native-size-matters'
import LottieView from 'lottie-react-native';

export default function Success({ navigation }) {
    return (
        <View style={styles.background}>
            <View>
                <Text style={{ color: Orange, fontSize: ms(22), textAlign: 'center', fontWeight: '800' }}>
                    YEAY ! Registration Completed!
                </Text>
            </View>
            <View flex={1}>
                <LottieView source={require('../../assets/lottie/success.json')} autoPlay={true} loop={true} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonText}>
                    Back to Login
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: Background_Color,
        flex: 1,
        paddingHorizontal: ms(21),
        paddingVertical: ms(44)
    },
    button: {
        height: ms(50),
        width: window.width,
        backgroundColor: Button_Primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: ms(22),
        borderRadius: ms(10),

    },
    buttonText: {
        color: 'white',
        fontSize: ms(20),
        fontWeight: '600'
    }
})