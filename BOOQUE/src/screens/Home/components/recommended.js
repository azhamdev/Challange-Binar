import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ms, scale } from 'react-native-size-matters'
import cover from '../../../assets/images/cover.jpg'

export default function Recommended() {
    return (
        <View style={styles.cardRecommended}>
            <Image source={cover} style={styles.coverBook} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: ms(20),
        fontWeight: 'bold'
    },
    cardRecommended: {
        backgroundColor: 'white',
        width: ms(120),
        height: ms(180),
        padding: ms(2),
        borderColor: 'black',
        borderWidth: 2,
        marginRight: ms(10),
        justifyContent: 'center',
    },
    coverBook: {
        width: window.width,
        height: ms(170),
        resizeMode: 'cover'
    }
})