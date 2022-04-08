import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Background_Color, Button_Primary, Pink, Primary } from '../../assets/utils/colors'
import IL_Login from '../../assets/images/IL_Login.png'
import { ms, scale } from 'react-native-size-matters'
import { Button } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../redux/globalAction'
import { BASE_URL } from '../../helpers/api'
import { setName, setToken } from './redux/action'
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'



export default function Login({ navigation }) {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { token } = useSelector(state => state.login);
    const { loading } = useSelector(state => state.global);

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const postLogins = async () => {
        if (email.length === 0)
        {
            Alert.alert('Warning', 'Userame harus diisi!');
        }
        else if (password.length === 0)
        {
            Alert.alert('Warning', 'Password harus diisi!')
        }
        else if (!email.match(regexEmail))
        {
            alert('Email tidak valid')
        }
        else
        {
            try
            {
                dispatch(setLoading(true));
                const body = {
                    email: email,
                    password: password,
                };
                const res = await axios.post(`${BASE_URL}/auth/login`, body, {
                    validateStatus: status => status < 501
                });
                console.log(email);
                console.log(password);
                console.log(res);

                if (res.status === 200)
                {
                    dispatch(setName(res.data.user.name));
                    dispatch(setToken(res.data.tokens.access.token));
                    navigate('Home');
                } else
                {
                    Alert.alert('Error', 'Username / Password Salah!');
                }
            } catch (error)
            {
                console.log(error);
            } finally
            {
                dispatch(setLoading(false));
            }
        }
    };

    useEffect(() => {
        if (token)
        {
            navigation.navigate('Home');
        }
    }, [token])

    return (
        <View style={styles.background}>
            <ScrollView>
                <View style={styles.containerImages}>
                    <Image source={IL_Login} style={styles.ilustrasi} />
                </View>
                <TextInput
                    style={styles.input}
                    // onChangeText={ }
                    // value={number}
                    onChangeText={(value) => setEmail(value)}
                    placeholder="Email"
                    placeholderTextColor={'black'}
                />
                <TextInput
                    style={styles.input}
                    // onChangeText={ }
                    // value={number}
                    onChangeText={(value) => setPassword(value)}
                    placeholder="Password"
                    placeholderTextColor={'black'}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button} onPress={() => postLogins()}>
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', marginTop: ms(4) }}>
                        Dont have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={{ color: Button_Primary, fontSize: ms(18), marginTop: ms(5) }}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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