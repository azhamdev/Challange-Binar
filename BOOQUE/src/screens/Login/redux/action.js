export const setToken = (payload) => {
    return {
        type: "SET_TOKEN",
        payload: payload,
    };
}

export const setName = (payload) => {
    return {
        type: "SET_NAME",
        payload: payload,
    };
}