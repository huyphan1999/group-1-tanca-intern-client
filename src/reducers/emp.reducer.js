import * as EMP from '../actionTypes/emp.actiontypes';

const initialState = {
    requesting: false,
    successful: false,
    message: [],
    employees:[],
}

const reducer = function companyReducer(state = initialState, action) {
    switch (action.type) {
        case EMP.EMP_REQUESTING:
            return {
                ...state,
                requesting: true,
            }

        case EMP.EMP_SUCCESS:
            return {
                ...state,
                requesting: false,
                successful: true,
                employees: action.data
            }

        case EMP.EMP_ERROR:
            return {
                ...state,
                message: action.error,
                successful: false,
                requesting: false
            }

        case EMP.EMP_ADD:
            return {
                ...state,
                requesting: true,
            }

        case EMP.EMP_DEL:
            return {
                ...state,
                requesting: true,
            }
        case EMP.EMP_EDIT:
            return {
                ...state,
                requesting: false,
            }
        default : return state
    }
}

export default reducer
