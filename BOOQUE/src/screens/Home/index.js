import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { Background_Color, Orange, Pink } from '../../assets/utils/colors'
import { ms, scale } from 'react-native-size-matters'
import Header from './components/header'
import Title from './components/title'
import cover from '../../assets/images/cover.jpg'
import Recommended from './components/recommended'
import Popular from './components/popular'
import { useDispatch, useSelector } from 'react-redux'
import { getDataBooks, getDetailBook } from './redux/action'
import LottieView from 'lottie-react-native'

export default function Home({ navigation }) {
    const { token, name } = useSelector(state => state.login);
    const { loading } = useSelector(state => state.global);
    const dispatch = useDispatch();
    const { bookPopular = [] } = useSelector(state => state.home);
    const { bookRecomended = [] } = useSelector(state => state.home);

    useEffect(() => {
        getDataBook()
    }, [])

    const getDataBook = () => {
        // fetching data api
        dispatch(getDataBooks());
    };

    const getBookByID = item => {
        dispatch(getDetailBook(item.id));
    };

    const Header = () => {
        return (
            <View style={styles.background}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>
                        Good Morning {name}
                    </Text>
                </View>
            </View>
        )
    }

    const Recommended = ({ item }) => {
        return (
            <View style={styles.cardRecommended}>
                <Image source={{ uri: `${item.cover_image}` }} style={styles.coverBook} />
            </View>
        )
    }

    const Popular = ({ item }) => {
        const idMovie = item.id;
        return (
            <TouchableOpacity onPress={() => getBookByID(item)}>
                <View style={{ paddingHorizontal: ms(21), }}>
                    <View style={styles.popular}>
                        <Image source={{ uri: `${item.cover_image}` }} style={styles.popularBook} />
                        <View style={{ paddingHorizontal: scale(10), flex: 1, justifyContent: 'space-evenly' }}>
                            <Text style={{ color: 'black' }}>
                                by {item.publisher}
                            </Text>
                            <Text style={{ color: 'black', fontSize: scale(18), fontWeight: '800' }}>
                                {item.title}
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: 'black' }}>
                                    by {item.author}
                                </Text>
                                <Text style={{ color: 'black' }}>
                                    {item.average_rating / 2}
                                </Text>
                            </View>
                            <View style={{ width: window.width, height: ms(24), backgroundColor: Pink, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontSize: scale(14), fontWeight: '700' }}>
                                    Rp {item.price}
                                </Text>
                            </View>
                            {/* {console.log(item)} */}
                        </View>
                    </View>
                </View>
            </TouchableOpacity >
        )
    }

    if (loading)
    {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                <LottieView style={{ flex: 1 }} source={require('../../assets/lottie/loadingplane.json')} autoPlay={true} loop={true} />
            </View>
        )
    }



    return (
        <ScrollView>
            <View style={styles.background}>
                <Header />
                <Title title="Recommended" />
                <FlatList
                    data={bookPopular}
                    keyExtractor={item => item.id}
                    renderItem={Recommended}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <View style={{ marginTop: scale(30) }} />
                <Title title="Popular Book" />
                <FlatList
                    data={bookPopular}
                    keyExtractor={(item, index) => index}
                    renderItem={Popular}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                {/* <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
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
                </TouchableOpacity> */}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: Background_Color,
        flex: 1,
        paddingVertical: ms(30),
        paddingHorizontal: ms(21),
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
    },
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