const initialState = {
    bookRecomended: [],
    bookPopular: [],
    detailBook: {},
    // refreshing: false,
};

const HomeReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case 'SET_BOOKS_RECOMMENDED':
            return {
                ...state,
                bookRecomended: action.payload,
            };

        case 'SET_BOOKS_POPULAR':
            return {
                ...state,
                bookPopular: action.payload,
            };

        case 'SET_DETAIL_BOOK':
            return {
                ...state,
                detailBook: action.payload,
            };

        default:
            return state;
    }
};
export default HomeReducer;