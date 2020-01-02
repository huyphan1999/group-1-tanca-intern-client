import * as SHIFT from '../actionTypes/shift.actiontypes';

const initialState = {
    requesting: false,
    successful: false,
    message: [],
    shifts:[],
}

const reducer = function companyReducer(state = initialState, action) {
    switch (action.type) {
        case SHIFT.SHIFT_REQUESTING:
            return {
                ...state,
                requesting: true,
            }

        case SHIFT.SHIFT_SUCCESS:
            return {
                ...state,
                requesting: false,
                successful: true,
                shifts: action.data
            }

        case SHIFT.SHIFT_ERROR:
            return {
                ...state,
                message: action.error,
                successful: false,
                requesting: false
            }

        case SHIFT.SHIFT_ADD:
            return {
                ...state,
                requesting: true,
            }

        case SHIFT.SHIFT_DEL:
            return {
                ...state,
                requesting: true,
            }
        case SHIFT.SHIFT_EDIT:
            return {
                ...state,
                requesting: false,
            }
        default : return state
    }
}

export default reducer
