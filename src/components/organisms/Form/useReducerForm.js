import React, { useReducer } from 'react';


const actionTypes = {
    inputChange: 'INPUT CHANGE',
    clearValues: 'CLEAR VALUES',
}
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.inputChange:
            return {
                ...state,
                [action.field]: action.value
            }
        case actionTypes.clearValues:
            return {
                ...action.initialValue
            }

        default:
            return state
    }
}
const useReducerForm = (initialValue) => {
    const [formValue, dispatch] = useReducer(reducer, initialValue);

    const handleInputChange = (e) => {
        dispatch({
            type: actionTypes.inputChange,
            field: e.target.name,
            value: e.target.value,
        })
    }
    const clearValue = () => {
        dispatch({
            type: actionTypes.clearValues,
            initialValue
        })
    }
    return {
        handleInputChange,
        clearValue,
        formValue
    }
}

export default useReducerForm
