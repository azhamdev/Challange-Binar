import { BASE_URL } from '../../../helpers/api'
import axios from 'axios'
import { store } from '../../../redux/store'
import { setLoading } from '../../../redux/globalAction';
import LottieView from 'lottie-react-native'

const token = store.getState().login.token;
axios.defaults.headers.Authorization = `Bearer ${token}`;


export const getDataBooks = () => async dispatch => {
    try
    {
        dispatch(setLoading(true));
        const res = await axios.get(`${BASE_URL}/books`);
        console.log(res);

        if (res.status === 200)
        {
            return dispatch(setDataBookPopular(res.data.results));
        }
    } catch (error)
    {
        console.log(error);
    } finally
    {
        dispatch(setLoading(false));
        // console.log(res)
        console.log('token', token)
    }
};

export const setDataBookRecommended = payload => {
    return {
        type: 'SET_BOOKS_RECOMMENDED',
        payload,
    };
};


export const setDataBookPopular = payload => {
    return {
        type: 'SET_BOOKS_POPULAR',
        payload,
    };
};

export const getDetailBook = id => async dispatch => {
    try
    {
        dispatch(setLoading(true));
        const res = await axios.get(`${BASE_URL}/books/${id}`);
        if (res.status === 200)
        {
            console.log(res)
            dispatch(setDetailBook(res.data));
            navigate('Detail')
        }
    } catch (error)
    {
        console.log(error);
    } finally
    {
        dispatch(setLoading(false));
    }
};

export const setDetailBook = payload => {
    return {
        type: 'SET_DETAIL_BOOK',
        payload,
    };
};

