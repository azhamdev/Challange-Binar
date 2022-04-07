import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Background_Color, Orange } from '../../../assets/utils/colors'
import { ms } from 'react-native-size-matters'

export default function Title(props) {
    return (
        <View style={styles.background}>
            <Text style={styles.title}>
                {props.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        paddingHorizontal: ms(21),
        marginBottom: ms(18)
    },
    title: {
        color: 'black',
        fontSize: ms(20),
        fontWeight: 'bold'
    }
})