import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Background_Color, Orange, Pink } from '../../assets/utils/colors'
import { ms, scale } from 'react-native-size-matters'
import Header from './components/header'
import Title from './components/title'
import cover from '../../assets/images/cover.jpg'
import Recommended from './components/recommended'
import Popular from './components/popular'

export default function Home({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.background}>
                <Header />
                <View style={{ marginTop: scale(30) }} />
                <Title title="Recommended" />
                <ScrollView horizontal={true}>
                    <Recommended />
                    <Recommended />
                    <Recommended />
                </ScrollView>
                <View style={{ marginTop: scale(30) }} />
                <Title title="Popular Book" />
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
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: Background_Color,
        flex: 1,
        paddingVertical: ms(30)
    },
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