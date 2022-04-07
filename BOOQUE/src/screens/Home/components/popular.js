import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { ms, scale } from 'react-native-size-matters'
import cover from '../../../assets/images/cover.jpg'
import { Pink } from '../../../assets/utils/colors'


export default function Popular({ navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
            <View style={{ paddingHorizontal: ms(21), }}>
                <View style={styles.popular}>
                    <Image source={cover} style={styles.popularBook} />
                    <View style={{ paddingHorizontal: scale(10), flex: 1, justifyContent: 'space-evenly' }}>
                        <Text style={{ color: 'black' }}>
                            by Bill Aulet
                        </Text>
                        <Text style={{ color: 'black', fontSize: scale(18), fontWeight: '800' }}>
                            My Book Cover
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: 'black' }}>
                                by Bill Aulet
                            </Text>
                            <Text style={{ color: 'black' }}>
                                4.5
                            </Text>
                        </View>
                        <View style={{ width: window.width, height: ms(24), backgroundColor: Pink, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: scale(14), fontWeight: '700' }}>
                                Rp 1000
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    popular: {
        backgroundColor: 'white',
        width: ms(160),
        height: ms(280),
        borderWidth: 2,

    },
    popularBook: {
        width: window.width,
        height: ms(160),
        resizeMode: 'cover'
    }
})