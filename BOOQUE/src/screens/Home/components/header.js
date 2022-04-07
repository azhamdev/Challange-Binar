import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Background_Color, Orange } from '../../../assets/utils/colors'
import { ms } from 'react-native-size-matters'

export default function Header() {
    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>
                    Good Morning A'zham !
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        paddingHorizontal: ms(21),
    },
    header: {
        backgroundColor: Orange,
        width: window.width,
        height: ms(52),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2
    },
    textHeader: {
        color: 'white',
        fontSize: ms(22)
    }
})