export function setData(data) {
    return {
        type: 'SET_DATA',
        data: data
    };
}
export function setLoading(loading) {
    return {
        type: 'SET_LOADING',
        loading: loading
    };
}
export function setCity(city) {
    return {
        type: 'SET_CITY',
        city: city
    };
}
export function setTempUnit(tempUnit) {
    return {
        type: 'SET_TEMPUNIT',
        tempUnit: tempUnit
    };
}