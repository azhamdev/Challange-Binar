import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Left from '../../assets/images/Left.png'
import Favorite from '../../assets/images/Favorite.png'
import Share from '../../assets/images/Share.png'
import { Background_Color, Button_Primary } from '../../assets/utils/colors'
import { ms, scale } from 'react-native-size-matters'
import cover from '../../assets/images/cover.jpg'
import Title from '../Home/components/title'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailBook } from '../Home/redux/action'

export default function Detail() {
    const dispatch = useDispatch();
    const { detailBook } = useSelector(state => state.home);
    useEffect(() => {
        getDataBook()
    }, [])

    const getDataBook = () => {
        // fetching data api
        dispatch(getDetailBook());
    };
    return (
        <View style={styles.background}>
            <ScrollView>
                <View style={styles.navbar}>
                    <TouchableOpacity>
                        <Image source={Left} style={styles.iconNav} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Image source={Favorite} style={[styles.iconNav, styles.iconNav1]} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={Share} style={styles.iconNav} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.line} />
                <View style={styles.heading}>
                    <View style={styles.imagesContainer}>
                        <Image source={{ uri: `${detailBook.cover_image}` }} style={styles.cover} />
                    </View>
                    <View style={styles.rightContent}>
                        <View>
                            <Text style={{ color: 'black', fontSize: ms(24), fontWeight: 'bold' }}>
                                {detailBook.title}
                            </Text>
                            <Text style={{ color: '#72808A', fontSize: ms(18), fontWeight: '400' }}>
                                by Author
                            </Text>
                            <Text style={{ color: 'black', fontSize: ms(18), fontWeight: '800' }}>
                                Rp 100000
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <View style={styles.buttonBuy}>
                                    <Text style={styles.textButtonBuy}>
                                        Buy Now
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.info}>
                        <View>
                            <Text style={{ color: '#72808A', fontSize: ms(10), fontWeight: '300' }}>Rating</Text>
                            <Text style={{ color: '#000', fontSize: ms(14), fontWeight: '500' }}>4.7</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#72808A', fontSize: ms(10), fontWeight: '300' }}>Publisher</Text>
                            <Text style={{ color: '#000', fontSize: ms(14), fontWeight: '500' }}>Gramedia</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#72808A', fontSize: ms(10), fontWeight: '300' }}>Author</Text>
                            <Text style={{ color: '#000', fontSize: ms(14), fontWeight: '500' }}>Bill Gates</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: ms(20) }} />
                <Title title="Overview" />
                <View style={styles.overviewContainer}>
                    <View style={styles.overview}>
                        <Text style={{ color: 'black', fontSize: ms(14), textAlign: 'justify', lineHeight: ms(18) }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: Background_Color,
        flex: 1,
        paddingTop: ms(30)
    },
    navbar: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: ms(21),
    },
    iconNav: {
        height: ms(32),
        width: ms(32),
    },
    iconNav1: {
        marginRight: ms(10)
    },
    line: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        marginTop: ms(25),
        paddingHorizontal: ms(21),
    },
    heading: {
        // backgroundColor: 'red',
        // flex: 1,
        flexDirection: 'row',
        paddingHorizontal: ms(21),
        marginTop: ms(20)
    },
    imagesContainer: {
        backgroundColor: 'white',
        height: scale(207),
        width: scale(130),
        padding: scale(4),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2

    },
    cover: {
        height: scale(187),
        width: scale(110),
    },
    buttonBuy: {
        backgroundColor: Button_Primary,
        width: ms(147),
        height: ms(40),
        borderRadius: ms(12),
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButtonBuy: {
        fontSize: ms(18),
        color: 'white'
    },
    rightContent: {
        justifyContent: 'space-around',
        paddingLeft: ms(12)
    },
    infoContainer: {
        paddingHorizontal: ms(21),
        marginTop: ms(40)
    },
    info: {
        backgroundColor: 'white',
        width: ms(318),
        height: ms(73),
        borderWidth: 2,
        borderRadius: ms(40),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    overviewContainer: {
        // backgroundColor: 'red',
        paddingHorizontal: ms(21),
    },
    overview: {
        backgroundColor: 'white',
        flex: 1,
        borderWidth: 2,
        padding: ms(12),
        borderRadius: ms(8)
    }
})