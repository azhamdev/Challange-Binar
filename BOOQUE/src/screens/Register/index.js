import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Background_Color, Button_Primary, Pink, Primary } from '../../assets/utils/colors'
import IL_Login from '../../assets/images/IL_Login.png'
import { ms, scale } from 'react-native-size-matters'
import { Button } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../redux/globalAction'
import axios from 'axios'
import { BASE_URL } from '../../helpers/api'
import { ScrollView } from 'react-native-gesture-handler'



export default function Register({ navigation }) {
    const [fullname, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.global);

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPassword = /^[a-z0-9]\w{8,14}$/;

    const postRegister = async () => {
        if (fullname.length === 0)
        {
            Alert.alert('Peringatan', 'FullName harus diisi!')
        }
        else if (email.length === 0)
        {
            Alert.alert('Peringatan', 'Email harus diisi!');
        }
        else if (password.length === 0)
        {
            Alert.alert('Peringatan', 'Password harus diisi!')
        }
        else
        {
            if (!email.match(regexEmail))
            {
                alert('Email tidak valid')
            }
            else if (!password.match(regexPassword))
            {
                alert('Password tidak valid. Minimal 8 karakter dan 1 angka')
            }
            else
            {

                try
                {
                    dispatch(setLoading(true));
                    const body = {
                        email: email,
                        password: password,
                        name: fullname
                    };
                    const res = await axios.post(`${BASE_URL}/auth/register`, body, {
                        validateStatus: status => status < 501
                    });
                    console.log(res);

                    if (res.status <= 201)
                    {
                        navigation.navigate("Success")
                    } else
                    {
                        Alert.alert("Error", "Gagal register")
                    }
                } catch (error)
                {
                    console.log(error);
                } finally
                {
                    dispatch(setLoading(false));
                }
            }
        }
    }


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
                    onChangeText={(value) => setFullName(value)}
                    placeholder="Fullname"
                    placeholderTextColor={'black'}
                />
                <TextInput
                    style={styles.input}
                    // onChangeText={ }
                    // value={number}
                    placeholder="Email"
                    placeholderTextColor={'black'}
                    onChangeText={(value) => setEmail(value)}

                />
                <TextInput
                    style={styles.input}
                    // onChangeText={ }
                    // value={number}
                    placeholder="Password"
                    placeholderTextColor={'black'}
                    secureTextEntry={true}
                    onChangeText={(value) => setPassword(value)}
                />

                <TouchableOpacity style={styles.button} onPress={() => postRegister()}>
                    <Text style={styles.buttonText}>
                        REGISTER
                    </Text>
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', marginTop: ms(4) }}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{ color: Button_Primary, fontSize: ms(18), marginTop: ms(5) }}>
                            Login
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