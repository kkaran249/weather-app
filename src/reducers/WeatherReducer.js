var initialState = {
    data: {},
    city: '',
    tempUnit: '',
    loading: true
};

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DATA':
            return Object.assign({}, state, {
                data: action.data
            });
        case 'SET_LOADING':
            return Object.assign({}, state, {
                loading: action.loading
            });
        case 'SET_CITY':
            return Object.assign({}, state, {
                city: action.city
            });
        case 'SET_TEMPUNIT':
            return Object.assign({}, state, {
                tempUnit: action.tempUnit
            });
        default:
            return state;
    }
}