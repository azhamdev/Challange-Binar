import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Background_Color, Button_Primary, Pink, Primary } from '../../assets/utils/colors'
import IL_Login from '../../assets/images/IL_Login.png'
import { ms, scale } from 'react-native-size-matters'
import { Button } from 'react-native-elements'



export default function Register({ navigation }) {
    return (
        <View style={styles.background}>
            <View style={styles.containerImages}>
                <Image source={IL_Login} style={styles.ilustrasi} />
            </View>
            <TextInput
                style={styles.input}
                // onChangeText={ }
                // value={number}
                placeholder="Fullname"
                placeholderTextColor={'black'}
            />
            <TextInput
                style={styles.input}
                // onChangeText={ }
                // value={number}
                placeholder="Email"
                placeholderTextColor={'black'}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                // onChangeText={ }
                // value={number}
                placeholder="Password"
                placeholderTextColor={'black'}
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Success")}>
                <Text style={styles.buttonText}>
                    REGISTER
                </Text>
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'black', marginTop: ms(4) }}>
                    Already have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{ color: Pink, fontSize: ms(18), marginTop: ms(5) }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>


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
    ilustrasi: {
        width: window.width,
        height: ms(190),
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
    },
    containerImages: {
        backgroundColor: 'white',
        width: window.width,
        height: ms(200),
        paddingHorizontal: ms(20),
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: scale(10),
        marginBottom: ms(30)
    },
    input: {
        height: ms(50),
        borderWidth: 2,
        paddingHorizontal: ms(20),
        backgroundColor: 'white',
        color: Primary,
        borderRadius: ms(22),
        marginTop: ms(14)
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